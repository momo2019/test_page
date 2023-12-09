export declare class Background {
    private video;
    constructor(wrap: HTMLElement, _video: HTMLVideoElement);
    get videoDom(): HTMLVideoElement;
    setBackground(url: string): void;
    dispose(): void;
}
