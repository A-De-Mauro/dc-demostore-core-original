import { HttpClient } from '../../http/HttpClient';
import { AccessToken } from '../models/AccessToken';
import { AccessTokenProvider } from '../models/AccessTokenProvider';
import { OAuth2ClientCredentials } from '../models/OAuth2ClientCredentials';
/**
 * @hidden
 */
export declare class OAuth2Client implements AccessTokenProvider {
    httpClient: HttpClient;
    private clientCredentials;
    private token;
    private tokenExpires;
    private inFlight;
    private authUrl;
    constructor(clientCredentials: OAuth2ClientCredentials, { authUrl }: {
        authUrl?: string;
    }, httpClient: HttpClient);
    /**
     * Requests an authentication token that can be used
     * to make requests to the Dynamic Content api.
     * Tokens are reused until they expire.
     *
     * @returns {Promise<AccessToken>}
     */
    getToken(): Promise<AccessToken>;
}
