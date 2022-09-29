import { HalResource } from '../hal/models/HalResource';
import { EmbeddedCollection } from './EmbeddedCollection';
import { PageMetadata } from './PageMetadata';
/**
 * Paginated Result
 */
export declare abstract class Page<T extends HalResource> extends EmbeddedCollection<T> {
    /**
     * Pagination Metadata
     */
    page?: PageMetadata;
}
