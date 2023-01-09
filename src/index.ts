import { ActorType } from "./Actor";
import { ACTOR_RADIUS, DEFAULT_HEIGHT, DEFAULT_WIDTH } from "./consts";
import Simulation from "./Simulation";
import './index.css';
import Vector from "ts-vector";

const icons = new Map<ActorType, HTMLImageElement>([
    [ActorType.rock, getImage('rock')],
    [ActorType.paper, getImage('paper')],
    [ActorType.scissor, getImage('scissor')]
]);

let canvas: HTMLCanvasElement;
const simulation = new Simulation(DEFAULT_WIDTH, DEFAULT_HEIGHT);

function init() {
    canvas = document.querySelector('canvas');
    setSize();

    document.querySelector('#reset-button').addEventListener('click', () => simulation.reset());
    document.querySelector('#add-one-button').addEventListener('click', addActor);
    document.querySelector('#add-ten-button').addEventListener('click', () => Vector.range(10).forEach(addActor));
    document.querySelector('#allow-win').addEventListener('change', (event) => {
        simulation.allowWin = (event.target as HTMLInputElement).checked;
    });
    document.querySelector('#destroy-on-collision').addEventListener('change', (event) => {
        simulation.destroyOnCollision = (event.target as HTMLInputElement).checked;
    });

    window.addEventListener('resize', setSize);

    simulation.reset();
}

function addActor() {
    simulation.addActor(Math.floor(Math.random() * 3));
}

function setSize() {
    const newWidth = window.innerWidth - 20;
    const newHeight = window.innerHeight - 30 - document.querySelector('footer').clientHeight - document.querySelector('#reset-button').clientHeight;
    canvas.width = newWidth;
    canvas.height = newHeight;
    simulation.width = newWidth;
    simulation.height = newHeight;
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

    context.clearRect(0, 0, canvas.width, canvas.height);

    simulation.actors.forEach((actor) => {
        context.drawImage(icons.get(actor.type), actor.pos[0] - ACTOR_RADIUS, actor.pos[1] - ACTOR_RADIUS, ACTOR_RADIUS * 2, ACTOR_RADIUS * 2);
    });

    requestAnimationFrame(animationLoop);
}

setInterval(() => {
    simulation.checkMissingTypes();
    const icon = icons.get(simulation.getCurrentWinner());
    if (!icon) return;
    document.head.querySelector('link[rel=icon]').setAttribute('href', icon.src);
}, 1000);

init();
requestAnimationFrame(animationLoop);
