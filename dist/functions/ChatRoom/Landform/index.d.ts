import { Scene } from 'three';
import { NpcOption, SceneOption } from '../config';
export declare class Landform {
    private scene;
    private land;
    private mirror;
    private chatFrame;
    constructor(scene: Scene, option: SceneOption, npc: NpcOption);
    private handleWater;
    dispose(): void;
}
