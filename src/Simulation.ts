import Vector from "ts-vector";
import Actor, { ActorType } from "./Actor";
import { ACTOR_COUNT, ACTOR_RADIUS, MAX_V } from "./consts";

export default class Simulation {
    actors: Actor[];
    width: number;
    height: number;
    allowWin: boolean = false;
    destroyOnCollision: boolean = false;

    constructor(width: number, height: number) {
        this.actors = [];
        this.width = width;
        this.height = height;
    }

    reset() {
        this.actors.splice(0);
        Vector.range(0, ACTOR_COUNT).forEach((i) => this.addActor(i % 3));
    }

    addActor(type: ActorType) {
        const actor = new Actor(
            type,
            new Vector(Math.random() * this.width, Math.random() * this.height)
        );
        this.actors.push(actor);
        return actor;
    }

    step(dt: number) {
        if (!Number.isFinite(dt) || this.width <= 0 || this.height <= 0) {
            return;
        }
        let losersToDestroy: number[] = [];
        this.actors.forEach((actor, actorIndex) => {
            let force = new Vector(0, 0);
            let totalWeight = 0;

            this.actors.forEach((other) => {
                if (actor === other) return;
                const vectorTo = Vector.subtract(other.pos, actor.pos);
                if (vectorTo.dot(vectorTo) < Number.EPSILON) return;
                const weight = 1 / vectorTo.dot(vectorTo);
                const dir = vectorTo.copy().normalizeVector();

                if (vectorTo.magnitude() < ACTOR_RADIUS * 2) {
                    if (actor.compare(other) < 0) {
                        if (this.destroyOnCollision) {
                            losersToDestroy.push(actorIndex);
                        } else {
                            actor.type = other.type;
                        }
                    }

                    force = force.add(dir.copy().multiply(-1));
                    totalWeight += 1;
                }

                force = force.add(dir.multiply(weight).multiply(actor.compare(other)));
                totalWeight += weight;
            });

            if (totalWeight !== 0) {
                actor.v = actor.v.add(force.divide(totalWeight).multiply(dt * 100));
            }
            if (actor.v.magnitude() > MAX_V) {
                actor.v = actor.v.normalizeVector().multiply(MAX_V);
            }
            this.checkBoundaries(actor, dt);
        });

        for (const actorIndex of losersToDestroy) {
            this.actors.splice(actorIndex, 1);
        }
    }

    private checkBoundaries(actor: Actor, dt: number): void {
        actor.pos = actor.pos.add(actor.v.multiply(dt));
        if (actor.pos[0] < ACTOR_RADIUS || actor.pos[0] > this.width - ACTOR_RADIUS) {
            actor.v[0] = -actor.v[0];
            actor.pos[0] = Math.max(ACTOR_RADIUS, Math.min(this.width - ACTOR_RADIUS, actor.pos[0]));
        }
        if (actor.pos[1] < ACTOR_RADIUS || actor.pos[1] > this.height - ACTOR_RADIUS) {
            actor.v[1] = -actor.v[1];
            actor.pos[1] = Math.max(ACTOR_RADIUS, Math.min(this.height - ACTOR_RADIUS, actor.pos[1]));
        }
    }

    checkMissingTypes(): void {
        if (this.allowWin) {
            return;
        }
        for (const type of [ActorType.rock, ActorType.paper, ActorType.scissor]) {
            if (!this.actors.some((actor) => actor.type === type)) {
                this.actors[Math.floor(Math.random() * this.actors.length)].type = type;
            }
        }
    }

    getCurrentWinner(): ActorType {
        const counts = new Map<ActorType, number>();
        this.actors.forEach((actor) => counts.set(actor.type, (counts.get(actor.type) || 0) + 1));
        let maxType: ActorType = null;
        let maxCount = 0;
        for (const [type, count] of Array.from(counts.entries())) {
            if (count > maxCount) {
                maxCount = count;
                maxType = type;
            }
        }
        return maxType;
    }
}
