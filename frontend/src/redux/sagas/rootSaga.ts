import { all, takeLatest } from "redux-saga/effects";
import { usersTypes } from "../actionTypes/usersTypes";
import { fetchUsersSaga, postUserSaga } from "./usersSaga/UserSaga";
import { vehicleTypes } from "../actionTypes/vehiclesTypes";
import { fetchVehiclesSaga } from "./vehiclesSaga/VehicleSaga";
import { fetchHistorySaga, postHistorySaga } from "./historySaga/HistorySaga";
import { historyTypes } from "../actionTypes/historyTypes";
import { postVehicleSaga } from "./vehiclesSaga/VehicleSaga";

export default function* rootSaga() {
  yield all([
    takeLatest(usersTypes.FETCH_USERS_REQUEST, fetchUsersSaga),
    takeLatest(vehicleTypes.FETCH_VEHICLES_REQUEST, fetchVehiclesSaga),
    takeLatest(historyTypes.POST_HISTORY_REQUEST, postHistorySaga),
    takeLatest(historyTypes.FETCH_HISTORY_REQUEST, fetchHistorySaga),
    takeLatest(usersTypes.POST_ONEUSER_REQUEST, postUserSaga),
    takeLatest(vehicleTypes.POSTONE_VEHICLE_REQUEST, postVehicleSaga),
  ]);
}
