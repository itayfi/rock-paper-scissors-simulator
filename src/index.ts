import { ActorType } from "./Actor";
import { ACTOR_RADIUS, HEIGHT, WIDTH } from "./consts";
import Simulation from "./Simulation";
import './index.css';

const icons = new Map<ActorType, HTMLImageElement>([
    [ActorType.rock, getImage('rock')],
    [ActorType.paper, getImage('paper')],
    [ActorType.scissor, getImage('scissor')]
]);

let canvas: HTMLCanvasElement;
const simulation = new Simulation();

function init() {
    canvas = document.querySelector('canvas');
    canvas.width = WIDTH;
    canvas.height = HEIGHT;

    const resetButton = document.querySelector('#reset-button');
    resetButton.addEventListener('click', () => simulation.reset());

    simulation.reset();
}

function getImage(icon: string): HTMLImageElement {
    const image = new Image();
    image.src = `${icon}.png`;
    return image;
}


let lastTimestamp: number = null;
function animationLoop(timestamp: number) {
    const context = canvas.getContext('2d');
    if (lastTimestamp !== null) {
        simulation.step((timestamp - lastTimestamp) * 0.001);
    }
    lastTimestamp = timestamp;

    context.clearRect(0, 0, WIDTH, HEIGHT);

    simulation.actors.forEach((actor) => {
        context.drawImage(icons.get(actor.type), actor.pos[0] - ACTOR_RADIUS, actor.pos[1] - ACTOR_RADIUS, ACTOR_RADIUS * 2, ACTOR_RADIUS * 2);
    });

    requestAnimationFrame(animationLoop);
}

setInterval(() => simulation.checkMissingTypes(), 1000);

init();
requestAnimationFrame(animationLoop);
