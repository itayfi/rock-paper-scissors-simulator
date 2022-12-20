import Vector from 'ts-vector';

export enum ActorType {
    rock,
    paper,
    scissor
}

const winMap = new Map([
    [ActorType.rock, ActorType.scissor],
    [ActorType.paper, ActorType.rock],
    [ActorType.scissor, ActorType.paper],
])

export default class Actor {
    type: ActorType;
    pos: Vector;
    v: Vector;

    constructor(type: ActorType, pos: Vector) {
        this.type = type;
        this.pos = pos.copy();
        this.v = new Vector(0, 0);
    }

    compare(other: Actor): number {
        if (this.type === other.type) {
            return 0;
        }
        if (winMap.get(this.type) === other.type) {
            return 1;
        }
        return -1;
    }
}