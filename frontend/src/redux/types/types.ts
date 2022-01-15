import { usersTypes } from "../actionTypes/usersTypes";
import { vehicleTypes } from "../actionTypes/vehiclesTypes";
import { historyTypes } from "../actionTypes/historyTypes";
import {
  PostOneVehicleFailure,
  PostOneVehicleRequest,
  PostOneVehicleSuccess,
} from "../actions/vehiclesActions/vehiclesActions";

export interface UsersSate {
  users: [];
  loading: boolean;
  error: string | null;
  status?: number;
}

export interface VehicleState {
  cars: [];
  loading: boolean;
  error: string | null;
  status?: number;
}

export interface HistoryState {
  services: [];
  loading: boolean;
  error: string | null;
  status?: number;
}

export interface FetchUsersSuccessPayload {
  users: [];
}

export interface FetchUsersFailurePayload {
  error: string;
}

export interface FetchUsersRequest {
  type: typeof usersTypes.FETCH_USERS_REQUEST;
}

export type FetchUsersSuccess = {
  type: typeof usersTypes.FETCH_USERS_SUCCESS;
  payload: FetchUsersSuccessPayload;
};

export type FetchUsersFailure = {
  type: typeof usersTypes.FETCH_USERS_FAILURE;
  payload: FetchUsersFailurePayload;
};

export interface PostOneUserFailurePayload {
  error: string;
}

export interface PostOneUserRequest {
  type: typeof usersTypes.POST_ONEUSER_REQUEST;
  payload: any;
}

export type PostOneUserSuccess = {
  type: typeof usersTypes.POST_ONEUSER_SUCCESS;
};

export type PostOneUserFailure = {
  type: typeof usersTypes.POST_ONEUSER_FAILURE;
  payload: PostOneUserFailurePayload;
};

//----------------------VEHICULOS-------------------------------------------------------------------
export interface FetchVehiclesSuccessPayload {
  cars: [];
}

export interface FetchVehiclesFailurePayload {
  error: string;
}

export interface FetchVehiclesRequest {
  type: typeof vehicleTypes.FETCH_VEHICLES_REQUEST;
  payload: any;
}

export type FetchVehiclesSuccess = {
  type: typeof vehicleTypes.FETCH_VEHICLES_SUCCESS;
  payload: FetchVehiclesSuccessPayload;
};

export type FetchVehiclesFailure = {
  type: typeof vehicleTypes.FETCH_VEHICLES_FAILURE;
  payload: FetchVehiclesFailurePayload;
};

//---------------------------HISTORIALES SERVICIOS-------------------------------------------------------

export interface FetchHistorySuccessPayload {
  services: [];
}

export interface FetchHistoryFailurePayload {
  error: string;
}

export interface FetchHistoryRequest {
  type: typeof historyTypes.FETCH_HISTORY_REQUEST;
  payload: any;
}

export type FetchHistorySuccess = {
  type: typeof historyTypes.FETCH_HISTORY_SUCCESS;
  payload: FetchHistorySuccessPayload;
};

export type FetchHistoryFailure = {
  type: typeof historyTypes.FETCH_HISTORY_FAILURE;
  payload: FetchHistoryFailurePayload;
};

export interface PostHistorySuccessPayload {
  status: number;
}

export interface PostistoryFailurePayload {
  error: string;
}

export interface PostHistoryRequest {
  type: typeof historyTypes.POST_HISTORY_REQUEST;
  payload: any;
}

export type PostHistorySuccess = {
  type: typeof historyTypes.POST_HISTORY_SUCCESS;
  payload: PostHistorySuccessPayload;
};

export type PostHistoryFailure = {
  type: typeof historyTypes.POST_HISTORY_FAILURE;
  payload: PostHistoryFailurePayload;
};

export interface PostHistoryFailurePayload {
  error: string;
}

export type UsersActions =
  | FetchUsersRequest
  | FetchUsersSuccess
  | FetchUsersFailure
  | PostOneUserRequest
  | PostOneUserFailure
  | PostOneUserSuccess;
export type VehiclesActions =
  | FetchVehiclesRequest
  | FetchVehiclesSuccess
  | FetchVehiclesFailure
  | PostOneVehicleRequest
  | PostOneVehicleSuccess
  | PostOneVehicleFailure;
export type HistoryActions =
  | FetchHistoryRequest
  | FetchHistorySuccess
  | FetchHistoryFailure
  | PostHistoryRequest
  | PostHistorySuccess
  | PostHistoryFailure;
