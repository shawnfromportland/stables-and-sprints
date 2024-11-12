# HorseApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**horseControllerCreate**](HorseApi.md#horseControllerCreate) | **POST** /horse |  |
| [**horseControllerEnterRace**](HorseApi.md#horseControllerEnterRace) | **POST** /horse/{horseId}/enter-race/{raceId} |  |
| [**horseControllerFindAll**](HorseApi.md#horseControllerFindAll) | **GET** /horse |  |
| [**horseControllerFindOne**](HorseApi.md#horseControllerFindOne) | **GET** /horse/{id} |  |
| [**horseControllerRemove**](HorseApi.md#horseControllerRemove) | **DELETE** /horse/{id} |  |
| [**horseControllerUpdate**](HorseApi.md#horseControllerUpdate) | **PATCH** /horse/{id} |  |


<a name="horseControllerCreate"></a>
# **horseControllerCreate**
> Horse horseControllerCreate(CreateHorseDto)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **CreateHorseDto** | [**CreateHorseDto**](../Models/CreateHorseDto.md)|  | |

### Return type

[**Horse**](../Models/Horse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="horseControllerEnterRace"></a>
# **horseControllerEnterRace**
> Race horseControllerEnterRace(horseId, raceId)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **horseId** | **BigDecimal**|  | [default to null] |
| **raceId** | **BigDecimal**|  | [default to null] |

### Return type

[**Race**](../Models/Race.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="horseControllerFindAll"></a>
# **horseControllerFindAll**
> List horseControllerFindAll()



### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](../Models/Horse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="horseControllerFindOne"></a>
# **horseControllerFindOne**
> Horse horseControllerFindOne(id)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**|  | [default to null] |

### Return type

[**Horse**](../Models/Horse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="horseControllerRemove"></a>
# **horseControllerRemove**
> horseControllerRemove(id)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**|  | [default to null] |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="horseControllerUpdate"></a>
# **horseControllerUpdate**
> Horse horseControllerUpdate(id, body)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**|  | [default to null] |
| **body** | **Object**|  | |

### Return type

[**Horse**](../Models/Horse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

