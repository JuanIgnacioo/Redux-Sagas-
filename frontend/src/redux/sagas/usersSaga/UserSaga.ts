import axios, { AxiosResponse } from "axios";
import { call, put } from "redux-saga/effects";
import {
  fetchUsersFailure,
  fetchUsersSuccess,
  postOneUserFailure,
  postOneUserSuccess,
} from "../../actions/usersActions/usersActions";

const apiUrlGet = "http://127.0.0.1:5000/getAllClients";
const apiUrlPost = "http://127.0.0.1:5000/cargarUsuario";

const getUsers = () => axios.get(apiUrlGet);
const postUser = (user: any) => axios.post(apiUrlPost, user);

export function* fetchUsersSaga() {
  try {
    const response: AxiosResponse<any> = yield call(getUsers);
    yield put(
      fetchUsersSuccess({
        users: response.data,
      })
    );
  } catch (e: any) {
    yield put(
      fetchUsersFailure({
        error: e.message,
      })
    );
  }
}

export function* postUserSaga(data: any) {
  try {
    const response: AxiosResponse<any> = yield call(postUser, data.payload);
    yield put(
      postOneUserSuccess({
        status: response.status,
      })
    );
  } catch (e: any) {
    yield put(
      postOneUserFailure({
        error: e.message,
      })
    );
  }
}

// function* usersSaga() {
//   yield all([
//     takeLatest(usersTypes.FETCH_USERS_REQUEST, fetchUsersSaga),
//     takeLatest(usersTypes.POST_ONEUSER_REQUEST, postUserSaga),
//   ]);
// }
