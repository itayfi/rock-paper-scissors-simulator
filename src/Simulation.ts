import Vector from "ts-vector";
import Actor, { ActorType } from "./Actor";
import { ACTOR_COUNT, ACTOR_RADIUS, HEIGHT, MAX_V, WIDTH } from "./consts";

export default class Simulation {
    actors: Actor[];

    constructor() {
        this.actors = [];
    }

    reset() {
        this.actors.splice(0);
        for (let i = 0; i < ACTOR_COUNT; i++) {
            this.actors.push(new Actor(
                i % 3,
                new Vector(Math.random() * WIDTH, Math.random() * HEIGHT)
            ));
        }
    }

    step(dt: number) {
        this.actors.forEach((actor) => {
            let force = new Vector(0, 0);
            let totalWeight = 0;

            this.actors.forEach((other) => {
                if (actor === other) return;
                const vectorTo = Vector.subtract(other.pos, actor.pos);
                const weight = 1 / vectorTo.dot(vectorTo);
                const dir = vectorTo.copy().normalizeVector();

                if (vectorTo.magnitude() < ACTOR_RADIUS * 2) {
                    if (actor.compare(other) < 0) {
                        actor.type = other.type;
                    }

                    force = force.add(dir.copy().multiply(-1));
                    totalWeight += 1;
                }

                force = force.add(dir.multiply(weight).multiply(actor.compare(other)));
                totalWeight += weight;
            });

            actor.v = actor.v.add(force.divide(totalWeight).multiply(dt * 100));
            if (actor.v.magnitude() > MAX_V) {
                actor.v = actor.v.normalizeVector().multiply(MAX_V);
            }
            this.checkBoundaries(actor, dt);
        });
    }

    private checkBoundaries(actor: Actor, dt: number): void {
        actor.pos = actor.pos.add(actor.v.multiply(dt));
        if (actor.pos[0] < ACTOR_RADIUS || actor.pos[0] > WIDTH - ACTOR_RADIUS) {
            actor.v[0] = -actor.v[0];
            actor.pos[0] = Math.max(ACTOR_RADIUS, Math.min(WIDTH - ACTOR_RADIUS, actor.pos[0]));
        }
        if (actor.pos[1] < ACTOR_RADIUS || actor.pos[1] > HEIGHT - ACTOR_RADIUS) {
            actor.v[1] = -actor.v[1];
            actor.pos[1] = Math.max(ACTOR_RADIUS, Math.min(HEIGHT - ACTOR_RADIUS, actor.pos[1]));
        }
    }

    checkMissingTypes(): void {
        for (const type of [ActorType.rock, ActorType.paper, ActorType.scissor]) {
            if (!this.actors.some((actor) => actor.type === type)) {
                this.actors[Math.floor(Math.random() * this.actors.length)].type = type;
            }
        }
    }
}
