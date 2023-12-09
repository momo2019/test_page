import { Vector2 } from 'three';
/**
 * Convolution shader
 * ported from o3d sample to WebGL / GLSL
 */
declare const ConvolutionShader: {
    name: string;
    defines: {
        KERNEL_SIZE_FLOAT: string;
        KERNEL_SIZE_INT: string;
    };
    uniforms: {
        tDiffuse: {
            value: null;
        };
        uImageIncrement: {
            value: Vector2;
        };
        cKernel: {
            value: never[];
        };
    };
    vertexShader: string;
    fragmentShader: string;
    buildKernel: (sigma: number) => any[];
};
export { ConvolutionShader };
