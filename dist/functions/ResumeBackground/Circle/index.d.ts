import { Scene } from 'three';
import { LabelOption } from '../config';
import { ThreeNumber } from '../../../utils/interface';
export type CircleOption = {
    radius?: number;
    color?: string;
    position?: ThreeNumber;
    rotation?: ThreeNumber;
    labelGap?: number;
    label: {
        className?: string;
        text: string;
        scale?: ThreeNumber;
    }[];
};
export declare class Circle {
    private scene;
    private labels;
    private root;
    private ring;
    private config;
    private rotateAngle;
    private coe;
    constructor(scene: Scene, option: LabelOption);
    play(delta: number): void;
    dispose(): void;
}
