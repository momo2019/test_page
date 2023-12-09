import { Vector2 } from 'three';
import { Pass } from 'three/examples/jsm/postprocessing/Pass.js';
declare class BloomPass extends Pass {
    private renderTargetX;
    private renderTargetY;
    private combineUniforms;
    private materialCombine;
    private convolutionUniforms;
    private materialConvolution;
    private fsQuad;
    static blurX: Vector2;
    static blurY: Vector2;
    constructor(strength?: number, kernelSize?: number, sigma?: number);
    render(renderer: any, writeBuffer: any, readBuffer: any, deltaTime: number, maskActive: boolean): void;
    setSize(width: number, height: number): void;
    dispose(): void;
}
export { BloomPass };
