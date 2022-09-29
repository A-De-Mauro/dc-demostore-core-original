import { HttpRequest } from './HttpRequest';
import { HttpResponse } from './HttpResponse';
export declare class HttpError extends Error {
    readonly request?: HttpRequest;
    readonly response?: HttpResponse;
    constructor(message: string, request?: HttpRequest, response?: HttpResponse);
}
