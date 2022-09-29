/**
 * @hidden
 */
export declare type JsonVisitor = (value: any) => void;
/**
 * @hidden
 */
export declare class JsonTree {
    static visit(data: any, visitor: JsonVisitor, depth?: number): void;
}
