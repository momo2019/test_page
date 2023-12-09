import { Scene } from 'three';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { ModelOption } from '../config';
export declare class Player {
    private scene;
    private object;
    private mixer;
    private isAnimationEnd;
    private actions;
    private updater;
    private circles;
    private faceMaterial?;
    constructor(scene: Scene, object: GLTF, option: ModelOption);
    play(): void;
    stop(): void;
    changeColor(url: string): Promise<void>;
    dispose(): void;
    private piepline;
}
