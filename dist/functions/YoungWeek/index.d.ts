import { YoungWeekOption } from './config';
export declare class YoungWeek {
    private scene;
    private camera;
    private renderer;
    private observer;
    private update;
    private landform;
    private inputEvent;
    private pointer;
    private raycaster;
    private labelRenderer;
    private controls;
    private aL;
    private sL;
    private composer;
    private bloomPass;
    private bloomConfig;
    private faceToName;
    constructor(wrap: HTMLElement, option: YoungWeekOption);
    private _initEvent;
    private handleMove;
    handleRender(): void;
    private onWindowResize;
    reset(): void;
    setCamera(z: number): void;
    dispose(): void;
}
