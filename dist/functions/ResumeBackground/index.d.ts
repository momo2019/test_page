import { LabelOption, ModelOption } from './config';
import { ThreeNumber } from '../../utils/interface';
export declare class ResumeBackground {
    private wrap;
    private scene;
    private camera;
    private renderer;
    private labelRenderer;
    private observer;
    private player;
    private background;
    private update;
    private lights;
    private lastModelUid;
    private linePlayer;
    constructor(wrap: HTMLElement, video: HTMLVideoElement);
    private handleRender;
    private onWindowResize;
    setCamera(z: number): void;
    setBackground(url: string): void;
    setLights(option: {
        color: string;
        intensity: number;
        position: ThreeNumber;
    }[]): void;
    get video(): HTMLVideoElement;
    changeFace(url: string): Promise<void | undefined>;
    setLines(option: LabelOption[]): void;
    setModel(option: ModelOption): Promise<{
        play: () => void;
        stop: () => void;
    }>;
    dispose(): void;
}
