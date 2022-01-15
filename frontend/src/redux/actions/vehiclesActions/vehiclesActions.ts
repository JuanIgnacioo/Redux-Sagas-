import { vehicleTypes } from "../../actionTypes/vehiclesTypes";
import {
  FetchVehiclesFailure,
  FetchVehiclesFailurePayload,
  FetchVehiclesRequest,
  FetchVehiclesSuccess,
  FetchVehiclesSuccessPayload,
} from "../../types/types";

export const fetchVehiclesRequest = (data: object): FetchVehiclesRequest => ({
  type: vehicleTypes.FETCH_VEHICLES_REQUEST,
  payload: data,
});

export const fetchVehiclesSuccess = (
  payload: FetchVehiclesSuccessPayload
): FetchVehiclesSuccess => ({
  type: vehicleTypes.FETCH_VEHICLES_SUCCESS,
  payload,
});

export const fetchVehiclesFailure = (
  payload: FetchVehiclesFailurePayload
): FetchVehiclesFailure => ({
  type: vehicleTypes.FETCH_VEHICLES_FAILURE,
  payload,
});

export const postOneVehicleRequest = (data: object): PostOneVehicleRequest => ({
  type: vehicleTypes.POSTONE_VEHICLE_REQUEST,
  payload: data,
});

export interface PostOneVehicleRequest {
  type: typeof vehicleTypes.POSTONE_VEHICLE_REQUEST;
  payload: any;
}

export const postOneVehicleSuccess = (
  payload: PostOneVehicleSuccessPayload
): PostOneVehicleSuccess => ({
  type: vehicleTypes.POSTONE_VEHICLE_SUCCESS,
  payload,
});

export interface PostOneVehicleSuccessPayload {
  status: number;
}

export type PostOneVehicleSuccess = {
  type: typeof vehicleTypes.POSTONE_VEHICLE_SUCCESS;
  payload: PostOneVehicleSuccessPayload;
};

export interface PostOneVehicleSuccessPayload {
  status: number;
}

export const postOneVehicleFailure = (
  payload: PostOneVehicleFailurePayload
): PostOneVehicleFailure => ({
  type: vehicleTypes.POSTONE_VEHICLE_FAILURE,
  payload,
});

export interface PostOneVehicleFailurePayload {
  error: string;
}

export type PostOneVehicleFailure = {
  type: vehicleTypes.POSTONE_VEHICLE_FAILURE;
  payload: PostOneVehicleFailurePayload;
};

export interface PostOneVehicleFailurePayload {
  error: string;
}
