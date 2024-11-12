# RaceApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**raceControllerCreate**](RaceApi.md#raceControllerCreate) | **POST** /race |  |
| [**raceControllerFindAll**](RaceApi.md#raceControllerFindAll) | **GET** /race |  |
| [**raceControllerFindOne**](RaceApi.md#raceControllerFindOne) | **GET** /race/{id} |  |
| [**raceControllerRemove**](RaceApi.md#raceControllerRemove) | **DELETE** /race/{id} |  |
| [**raceControllerStartRace**](RaceApi.md#raceControllerStartRace) | **POST** /race/{id}/start |  |
| [**raceControllerUpdate**](RaceApi.md#raceControllerUpdate) | **PATCH** /race/{id} |  |


<a name="raceControllerCreate"></a>
# **raceControllerCreate**
> Race raceControllerCreate(CreateRaceDto)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **CreateRaceDto** | [**CreateRaceDto**](../Models/CreateRaceDto.md)|  | |

### Return type

[**Race**](../Models/Race.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="raceControllerFindAll"></a>
# **raceControllerFindAll**
> List raceControllerFindAll()



### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](../Models/Race.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="raceControllerFindOne"></a>
# **raceControllerFindOne**
> Race raceControllerFindOne(id)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**|  | [default to null] |

### Return type

[**Race**](../Models/Race.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="raceControllerRemove"></a>
# **raceControllerRemove**
> raceControllerRemove(id)



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

<a name="raceControllerStartRace"></a>
# **raceControllerStartRace**
> raceControllerStartRace(id)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **BigDecimal**|  | [default to null] |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="raceControllerUpdate"></a>
# **raceControllerUpdate**
> Race raceControllerUpdate(id, body)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**|  | [default to null] |
| **body** | **Object**|  | |

### Return type

[**Race**](../Models/Race.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

