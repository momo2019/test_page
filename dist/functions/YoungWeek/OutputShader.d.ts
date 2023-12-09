declare const OutputShader: {
    uniforms: {
        tDiffuse: {
            value: null;
        };
        toneMappingExposure: {
            value: number;
        };
    };
    vertexShader: string;
    fragmentShader: string;
};
export { OutputShader };
