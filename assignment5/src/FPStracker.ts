export class FPStracker {
    private lastCalledTime: number;
    private fps: number;
    private selection: HTMLParagraphElement;

    constructor() {
        this.selection = document.querySelector('#fps')
    }

    track() {
        if (!this.lastCalledTime) {
            this.lastCalledTime = performance.now();
            this.fps = 0;
            return;
        }
        const delta = (performance.now() - this.lastCalledTime) / 1000;
        this.lastCalledTime = performance.now();
        this.fps = Math.floor(1 / delta);
        this.selection.innerText = `FPS: ${this.fps}`
    }
}