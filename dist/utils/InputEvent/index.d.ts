import { EventDispatcher } from 'three';
declare const EVENTS: readonly ["pointerover", "pointerleave", "pointerdown", "pointerup", "pointermove", "pointercancel", "contextmenu", "click", "wheel"];
type EventTypes = (typeof EVENTS)[number];
type Ev<T extends EventTypes> = T extends 'click' ? MouseEvent : T extends 'wheel' ? WheelEvent : PointerEvent;
declare const getInputEvent: <T extends "pointerover" | "pointerleave" | "pointerdown" | "pointerup" | "pointermove" | "pointercancel" | "contextmenu" | "click" | "wheel">(type: T, e: Ev<T>, movementXY?: [number, number]) => {
    clientX: number;
    clientY: number;
    button: number;
    buttons: number;
    offsetX: number;
    offsetY: number;
    deltaY: number;
    deltaX: number;
    pointerId: number;
    pointerType: any;
    type: T;
    movementX: number;
    movementY: number;
    preventDefault: () => void;
    stopPropagation: () => void;
    stopImmediatePropagation: () => void;
};
type OwnInputEvent = ReturnType<typeof getInputEvent>;
export declare class InputEvent extends EventDispatcher<{
    [key in EventTypes]: OwnInputEvent;
}> {
    private _dom;
    private _pointers;
    private _pointerPos;
    private _clientRect;
    constructor(_dom: HTMLElement);
    private _bindResize;
    get clientRect(): {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    get pointers(): {
        clientX: number;
        clientY: number;
        button: number;
        buttons: number;
        offsetX: number;
        offsetY: number;
        deltaY: number;
        deltaX: number;
        pointerId: number;
        pointerType: any;
        type: "pointerover" | "pointerleave" | "pointerdown" | "pointerup" | "pointermove" | "pointercancel" | "contextmenu" | "click" | "wheel";
        movementX: number;
        movementY: number;
        preventDefault: () => void;
        stopPropagation: () => void;
        stopImmediatePropagation: () => void;
    }[];
    private _pointercancel;
    private _pointerdown;
    private _pointerover;
    private _pointerleave;
    private _pointerup;
    private _pointermove;
    private _click;
    private _wheel;
    private _contextmenu;
    private _bindEvent;
    dispose(): void;
}
export {};
