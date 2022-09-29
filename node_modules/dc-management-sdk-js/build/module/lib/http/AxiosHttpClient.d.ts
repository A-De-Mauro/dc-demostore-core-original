import { AxiosInstance, AxiosRequestConfig } from 'axios';
import { HttpClient } from './HttpClient';
import { HttpRequest } from './HttpRequest';
import { HttpResponse } from './HttpResponse';
/**
 * @hidden
 */
export declare class AxiosHttpClient implements HttpClient {
    private config;
    client: AxiosInstance;
    constructor(config: AxiosRequestConfig);
    request(config: HttpRequest): Promise<HttpResponse>;
}
