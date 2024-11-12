# UserApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**userControllerCreate**](UserApi.md#userControllerCreate) | **POST** /user |  |
| [**userControllerFindAll**](UserApi.md#userControllerFindAll) | **GET** /user |  |
| [**userControllerFindOne**](UserApi.md#userControllerFindOne) | **GET** /user/{id} |  |
| [**userControllerRemove**](UserApi.md#userControllerRemove) | **DELETE** /user/{id} |  |
| [**userControllerUpdate**](UserApi.md#userControllerUpdate) | **PATCH** /user/{id} |  |


<a name="userControllerCreate"></a>
# **userControllerCreate**
> User userControllerCreate(CreateUserDto)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **CreateUserDto** | [**CreateUserDto**](../Models/CreateUserDto.md)|  | |

### Return type

[**User**](../Models/User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="userControllerFindAll"></a>
# **userControllerFindAll**
> List userControllerFindAll()



### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](../Models/User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="userControllerFindOne"></a>
# **userControllerFindOne**
> User userControllerFindOne(id)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**|  | [default to null] |

### Return type

[**User**](../Models/User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="userControllerRemove"></a>
# **userControllerRemove**
> userControllerRemove(id)



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

<a name="userControllerUpdate"></a>
# **userControllerUpdate**
> User userControllerUpdate(id, body)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**|  | [default to null] |
| **body** | **Object**|  | |

### Return type

[**User**](../Models/User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

