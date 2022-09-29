import { HalResource } from '../hal/models/HalResource';
/**
 * Class representing a LocalizationRoot.
 * A Localization Job tracks the status of the process that creates locale-variants of content items.
 */
export declare class LocalizationRoot extends HalResource {
    /**
     * Unique id generated on creation
     */
    id?: string;
    /**
     * Root content item label
     */
    label?: string;
    /**
     * Root content item locale
     */
    locale?: string;
}
