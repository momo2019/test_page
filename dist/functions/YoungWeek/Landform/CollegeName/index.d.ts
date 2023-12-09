import { Group, Object3DEventMap } from 'three';
import { CollegeOption } from '../../config';
export declare class CollegeName {
    private parent;
    private object;
    private sprite?;
    constructor(parent: Group<Object3DEventMap>, option: CollegeOption, name: Element, spriteClickCb?: () => void);
    get visible(): boolean;
    set visible(v: boolean);
    dispose(): void;
}
