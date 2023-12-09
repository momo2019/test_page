import { Color, Scene, Texture, WebGLRenderTarget, WebGLRenderer } from 'three';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';
export declare const EPSILON = 0.001;
export declare const PI = 3.1415;
export declare const A_90 = 1.5707;
export declare const A_360 = 6.2831;
export declare const initModel: (url: string, callback?: ((obj: GLTF) => void) | undefined, errorCallback?: () => void) => Promise<GLTF>;
export declare const initHDR: (url: string, scene: Scene, renderer: WebGLRenderer, background?: Color | Texture | null, cb?: ((texture: Texture) => void) | undefined) => void;
export declare const setRange: (r: [number, number], m: readonly [number, number]) => [number, number];
export declare const initWebGLRenderTarget: (width: number, height: number, needDepthTexture?: boolean) => WebGLRenderTarget<Texture>;
export declare const initShaderPass: (shaders: {
    vertexShader: string;
    fragmentShader: string;
}) => ShaderPass;
