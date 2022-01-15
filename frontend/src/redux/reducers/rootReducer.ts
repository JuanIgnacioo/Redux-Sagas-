import { combineReducers } from "redux";
import userReducer from "./usersReducer/getAllUsers/usersReducer";
import vehicleReducer from "./vehiclesReducer/getAllVehicles/vehiclesReducer";
import historyreducer from "./historyReducer/getAllHistory/historyReducer";
import postHistoryreducer from "./historyReducer/postHistoryReducer/postHistoryReducer";
import postUserReducer from "./usersReducer/postUserReducer/postUserReducer";
import postVehicleReducer from "./vehiclesReducer/postVehicle/postVehiceReducer";

const rootReducer = combineReducers({
  users: userReducer,
  cars: vehicleReducer,
  services: historyreducer,
  postStatus: postHistoryreducer,
  postUserStatus: postUserReducer,
  postVehicleStatus: postVehicleReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
