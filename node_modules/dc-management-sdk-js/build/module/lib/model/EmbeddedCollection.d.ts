import { HalResource, HalResourceConstructor } from '../hal/models/HalResource';
/**
 * @hidden
 */
export declare abstract class EmbeddedCollection<T extends HalResource> extends HalResource {
    private key;
    private resourceType;
    private items;
    constructor(key: string, resourceType: HalResourceConstructor<T>, data?: any);
    getItems(): T[];
    toJSON(): any;
}
