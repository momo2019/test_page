import { ThreeNumber } from '../../utils/interface';
export type EntityStance = {
    position: ThreeNumber;
    rotation: ThreeNumber;
    level: number;
};
export declare const ENTITY_STANCE: EntityStance[];
export type SceneOption = {
    url: string;
    hdr: string;
};
export type CameraOption = {
    reserve?: boolean;
    rotateSpeed?: number;
    range?: number;
    verRange?: number;
    position?: ThreeNumber;
    target?: ThreeNumber;
    zoomRange?: [number, number];
    zoomSpeed?: number;
    lookFront?: ThreeNumber;
    lookSpeed?: number;
    callback?: (type: 0 | 1) => void;
};
export type EntityOption = {
    uuid: string;
    url: string;
    position?: ThreeNumber;
    rotation?: ThreeNumber;
    text: HTMLElement;
    name?: HTMLElement;
    textSize?: number;
    nameSize?: number;
};
export type NpcOption = {
    text: HTMLElement;
    textSize?: number;
};
export type ChatRoomOption = {
    scene: SceneOption;
    npc: NpcOption;
    camera?: CameraOption;
    entityStance?: EntityStance[];
};
