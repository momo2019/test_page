export type UpdateParams = {
    order?: number;
    fps?: number;
    handler?: (deltaTime: number, duration: number) => void;
};
export declare class Updater {
    private _order;
    private _fps?;
    private _handler?;
    private _isRunning;
    private _startTime;
    private _duration;
    private _updaterManager;
    constructor(params?: UpdateParams);
    private _setEnd;
    get isRunning(): boolean;
    get order(): number;
    set order(newOrder: number);
    get fps(): number | undefined;
    set fps(newFps: number | undefined);
    getDFps(): number;
    setDFps(newFps: number | undefined): void;
    get startTime(): number;
    get duration(): number;
    update(deltaTime: number): void;
    static start(params?: UpdateParams): Updater;
    start(): void;
    stop(): void;
}
