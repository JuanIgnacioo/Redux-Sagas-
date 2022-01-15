import axios, { AxiosResponse } from "axios";
import { call, put } from "redux-saga/effects";
import {
  fetchVehiclesFailure,
  fetchVehiclesSuccess,
  postOneVehicleSuccess,
  postOneVehicleFailure,
} from "../../actions/vehiclesActions/vehiclesActions";

const apiUrl = "http://127.0.0.1:5000/obtenerVehiculo";
const apiPost = "http://127.0.0.1:5000/cargarVehiculo";

const getVehicles = (data: any) => axios.post(apiUrl, data);
const postVehicle = (data: any) => axios.post(apiPost, data);

export function* fetchVehiclesSaga(data: any) {
  try {
    const response: AxiosResponse<any> = yield call(getVehicles, data.payload);
    yield put(
      fetchVehiclesSuccess({
        cars: response.data,
      })
    );
  } catch (e: any) {
    yield put(
      fetchVehiclesFailure({
        error: e.message,
      })
    );
  }
}

export function* postVehicleSaga(data: any) {
  try {
    const response: AxiosResponse<any> = yield call(postVehicle, data.payload);
    yield put(
      postOneVehicleSuccess({
        status: response.status,
      })
    );
  } catch (e: any) {
    yield put(
      postOneVehicleFailure({
        error: e.message,
      })
    );
  }
}
