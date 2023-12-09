import { Mesh, Object3DEventMap, Scene } from 'three';
import { EntityOption } from '../config';
export declare class ModelEntity {
    private scene;
    private entity;
    private chatFrame;
    private meshObj;
    private uid;
    private dis;
    private updater;
    private _opacity;
    private per;
    constructor(scene: Scene, option: Required<Omit<EntityOption, 'textSize' | 'nameSize' | 'name'>> & {
        textSize?: number;
        name?: HTMLElement;
        nameSize?: number;
    }, dis: () => void);
    get uuid(): string;
    get mesh(): Mesh<import("three").BufferGeometry<import("three").NormalBufferAttributes>, import("three").Material | import("three").Material[], Object3DEventMap> | null;
    get opacity(): number;
    set opacity(o: number);
    handleVisible(delta: number): void;
    dispose(): void;
}
