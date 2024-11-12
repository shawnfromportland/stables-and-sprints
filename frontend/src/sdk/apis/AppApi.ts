/* tslint:disable */
/* eslint-disable */
/**
 * Horse Races
 * Horse Races api
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';

/**
 * 
 */
export class AppApi extends runtime.BaseAPI {

    /**
     */
    async appControllerGetHelloRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<string>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     */
    async appControllerGetHello(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.appControllerGetHelloRaw(initOverrides);
        return await response.value();
    }

}
