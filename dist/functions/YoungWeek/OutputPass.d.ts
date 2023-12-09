import { Pass } from 'three/examples/jsm/postprocessing/Pass.js';
declare class OutputPass extends Pass {
    private uniforms;
    private material;
    private _toneMapping;
    private fsQuad;
    private _outputColorSpace;
    constructor();
    render(renderer: any, writeBuffer: any, readBuffer: any): void;
    dispose(): void;
}
export { OutputPass };
