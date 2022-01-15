import axios, { AxiosResponse } from "axios";
import { call, put } from "redux-saga/effects";
import {
  postHistoryFailure,
  postHistorySuccess,
  fetchHistoryFailure,
  fetchHistorySuccess,
} from "../../actions/historyActions/historyActions";

const apiUrl = "http://127.0.0.1:5000/agregarHistorial";
const apigetHistory = "http://127.0.0.1:5000/cargarHistoriales";

const setHistorial = (data: any) => axios.post(apiUrl, data);
const getHistorial = (data: any) => axios.post(apigetHistory, data);

//POSTEAR UN HISTORIAL
export function* postHistorySaga(data: any) {
  try {
    const response: AxiosResponse<any> = yield call(setHistorial, data.payload);
    yield put(
      postHistorySuccess({
        status: response.status,
      })
    );
  } catch (e: any) {
    yield put(
      postHistoryFailure({
        error: e.message,
      })
    );
  }
}

//OBTENER HISTORIALES
export function* fetchHistorySaga(data: any) {
  try {
    const response: AxiosResponse<any> = yield call(getHistorial, data.payload);
    yield put(
      fetchHistorySuccess({
        services: response.data,
      })
    );
  } catch (e: any) {
    yield put(
      fetchHistoryFailure({
        error: e.message,
      })
    );
  }
}
