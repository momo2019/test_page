import { Scene } from 'three';
import { LabelOption } from '../config';
export declare class LinePlayer {
    private updater;
    private circles;
    constructor(scene: Scene, labels: LabelOption[]);
    play(): void;
    stop(): void;
    dispose(): void;
    private piepline;
}
