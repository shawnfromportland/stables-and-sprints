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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface CreateHorseDto
 */
export interface CreateHorseDto {
    /**
     * 
     * @type {string}
     * @memberof CreateHorseDto
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof CreateHorseDto
     */
    speedRating: number;
    /**
     * 
     * @type {string}
     * @memberof CreateHorseDto
     */
    color?: string;
    /**
     * 
     * @type {number}
     * @memberof CreateHorseDto
     */
    ownerId: number;
}

/**
 * Check if a given object implements the CreateHorseDto interface.
 */
export function instanceOfCreateHorseDto(value: object): value is CreateHorseDto {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('speedRating' in value) || value['speedRating'] === undefined) return false;
    if (!('ownerId' in value) || value['ownerId'] === undefined) return false;
    return true;
}

export function CreateHorseDtoFromJSON(json: any): CreateHorseDto {
    return CreateHorseDtoFromJSONTyped(json, false);
}

export function CreateHorseDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateHorseDto {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'speedRating': json['speedRating'],
        'color': json['color'] == null ? undefined : json['color'],
        'ownerId': json['ownerId'],
    };
}

  export function CreateHorseDtoToJSON(json: any): CreateHorseDto {
      return CreateHorseDtoToJSONTyped(json, false);
  }

  export function CreateHorseDtoToJSONTyped(value?: CreateHorseDto | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'speedRating': value['speedRating'],
        'color': value['color'],
        'ownerId': value['ownerId'],
    };
}

