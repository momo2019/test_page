import { Group, Object3DEventMap } from 'three';
export declare class ChatFrame {
    private parent;
    private object;
    private objectName?;
    constructor(parent: Group<Object3DEventMap>, option: HTMLElement, name?: HTMLElement, size?: number, nameSize?: number);
    dispose(): void;
}
