import { EventDispatcher, PerspectiveCamera, Vector3 } from 'three';
import { ThreeNumber } from '../../interface';
type Cameras = PerspectiveCamera;
export declare class PanControls<T extends Cameras = PerspectiveCamera> extends EventDispatcher<{
    change: any;
}> {
    private _camera;
    private _input;
    private _canControls;
    private canPan;
    private panSpeed;
    private curPan;
    private panRange;
    private isLocked;
    private towards;
    constructor(params: {
        camera: T;
        dom: HTMLElement;
        towards: Vector3;
        canControls?: boolean;
        canPan?: boolean;
        panSpeed?: number;
        curPan?: number;
        panRange?: [number, number];
        position?: ThreeNumber;
        target?: ThreeNumber;
    });
    get camera(): T;
    get canControls(): boolean;
    set canControls(can: boolean);
    private _initInputEvents;
    pan(movementX: number, movementY: number): void;
    get lock(): boolean;
    set lock(locked: boolean);
    addPan(p: number): void;
    dispose(): void;
}
export type ControlsParams = typeof PanControls extends new (...args: infer A) => any ? Omit<A[0], 'camera'> : never;
export {};
