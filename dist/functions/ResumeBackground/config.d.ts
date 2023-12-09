import { ThreeNumber } from '../../utils/interface';
export declare const DEFAULT_CONFIG: {
    modelScale: number;
    ring: {
        radius: number;
        color: string;
        opacity: number;
        tube: number;
        radial: number;
        tubular: number;
        alpha: string;
    };
    text: {
        gap: number;
        rotation: number[];
        scale: number;
        opacity: number;
        transition: number;
    };
    sphere: {
        offset: number;
        opacity: number;
        scale: number;
        url: string;
    };
    config: {
        speed: number;
        centerCoe: number;
        intCeo: number;
        backCeo: number;
        ringShowSpeed: number;
        sphereShowSpeed: number;
        offset: number;
        endPosition: number;
        centerPosition: number;
    };
};
export type AnimationConfig = {
    speed?: number;
    centerCoe?: number;
    intCeo?: number;
    backCeo?: number;
    ringShowSpeed?: number;
    sphereShowSpeed?: number;
    offset?: number;
    endPosition?: number;
    centerPosition?: number;
};
export type LabelOption = {
    text: {
        text: string[];
        gap?: number;
        className?: string;
        scale?: number;
        rotation?: ThreeNumber;
        opacity?: number;
        transition?: number;
    };
    ring?: {
        position?: ThreeNumber;
        rotation?: ThreeNumber;
        scale?: number;
        opacity?: number;
        color?: string;
        tube?: number;
        radial?: number;
        tubular?: number;
        arc?: number;
        alpha?: string;
    };
    sphere?: {
        url?: string;
        scale?: number;
        offset?: number;
        opacity?: number;
    };
    config?: AnimationConfig;
};
export type ModelOption = {
    model: {
        url: string;
        scale?: number;
    };
    labels: LabelOption[];
};
