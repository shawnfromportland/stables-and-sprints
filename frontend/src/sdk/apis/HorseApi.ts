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
import type {
  CreateHorseDto,
  Horse,
  Race,
} from '../models/index';
import {
    CreateHorseDtoFromJSON,
    CreateHorseDtoToJSON,
    HorseFromJSON,
    HorseToJSON,
    RaceFromJSON,
    RaceToJSON,
} from '../models/index';

export interface HorseControllerCreateRequest {
    createHorseDto: CreateHorseDto;
}

export interface HorseControllerEnterRaceRequest {
    horseId: number;
    raceId: number;
}

export interface HorseControllerFindOneRequest {
    id: string;
}

export interface HorseControllerRemoveRequest {
    id: string;
}

export interface HorseControllerUpdateRequest {
    id: string;
    body: object;
}

/**
 * 
 */
export class HorseApi extends runtime.BaseAPI {

    /**
     */
    async horseControllerCreateRaw(requestParameters: HorseControllerCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Horse>> {
        if (requestParameters['createHorseDto'] == null) {
            throw new runtime.RequiredError(
                'createHorseDto',
                'Required parameter "createHorseDto" was null or undefined when calling horseControllerCreate().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/horse`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateHorseDtoToJSON(requestParameters['createHorseDto']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => HorseFromJSON(jsonValue));
    }

    /**
     */
    async horseControllerCreate(requestParameters: HorseControllerCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Horse> {
        const response = await this.horseControllerCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async horseControllerEnterRaceRaw(requestParameters: HorseControllerEnterRaceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Race>> {
        if (requestParameters['horseId'] == null) {
            throw new runtime.RequiredError(
                'horseId',
                'Required parameter "horseId" was null or undefined when calling horseControllerEnterRace().'
            );
        }

        if (requestParameters['raceId'] == null) {
            throw new runtime.RequiredError(
                'raceId',
                'Required parameter "raceId" was null or undefined when calling horseControllerEnterRace().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/horse/{horseId}/enter-race/{raceId}`.replace(`{${"horseId"}}`, encodeURIComponent(String(requestParameters['horseId']))).replace(`{${"raceId"}}`, encodeURIComponent(String(requestParameters['raceId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RaceFromJSON(jsonValue));
    }

    /**
     */
    async horseControllerEnterRace(requestParameters: HorseControllerEnterRaceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Race> {
        const response = await this.horseControllerEnterRaceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async horseControllerFindAllRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Horse>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/horse`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(HorseFromJSON));
    }

    /**
     */
    async horseControllerFindAll(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Horse>> {
        const response = await this.horseControllerFindAllRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async horseControllerFindOneRaw(requestParameters: HorseControllerFindOneRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Horse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling horseControllerFindOne().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/horse/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => HorseFromJSON(jsonValue));
    }

    /**
     */
    async horseControllerFindOne(requestParameters: HorseControllerFindOneRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Horse> {
        const response = await this.horseControllerFindOneRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async horseControllerRemoveRaw(requestParameters: HorseControllerRemoveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling horseControllerRemove().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/horse/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async horseControllerRemove(requestParameters: HorseControllerRemoveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.horseControllerRemoveRaw(requestParameters, initOverrides);
    }

    /**
     */
    async horseControllerUpdateRaw(requestParameters: HorseControllerUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Horse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling horseControllerUpdate().'
            );
        }

        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling horseControllerUpdate().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/horse/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['body'] as any,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => HorseFromJSON(jsonValue));
    }

    /**
     */
    async horseControllerUpdate(requestParameters: HorseControllerUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Horse> {
        const response = await this.horseControllerUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
