import { historyTypes } from "../../actionTypes/historyTypes";
import {
  FetchHistorySuccessPayload,
  FetchHistoryFailurePayload,
  FetchHistoryRequest,
  FetchHistorySuccess,
  FetchHistoryFailure,
  PostHistoryRequest,
  PostHistorySuccess,
  PostHistoryFailure,
  PostHistorySuccessPayload,
  PostHistoryFailurePayload,
} from "../../types/types";

//------------------TRAER TODOS LOS HISTORIALES------------------------------------
export const fetchHistoryRequest = (data: object): FetchHistoryRequest => ({
  type: historyTypes.FETCH_HISTORY_REQUEST,
  payload: data,
});

export const fetchHistorySuccess = (
  payload: FetchHistorySuccessPayload
): FetchHistorySuccess => ({
  type: historyTypes.FETCH_HISTORY_SUCCESS,
  payload,
});

export const fetchHistoryFailure = (
  payload: FetchHistoryFailurePayload
): FetchHistoryFailure => ({
  type: historyTypes.FETCH_HISTORY_FAILURE,
  payload,
});

//---------------------------POSTEAR UN HISTORIAL --------------------------------
export const postHistoryRequest = (data: object): PostHistoryRequest => ({
  type: historyTypes.POST_HISTORY_REQUEST,
  payload: data,
});

export const postHistorySuccess = (
  payload: PostHistorySuccessPayload
): PostHistorySuccess => ({
  type: historyTypes.POST_HISTORY_SUCCESS,
  payload,
});

export const postHistoryFailure = (
  payload: PostHistoryFailurePayload
): PostHistoryFailure => ({
  type: historyTypes.POST_HISTORY_FAILURE,
  payload,
});
