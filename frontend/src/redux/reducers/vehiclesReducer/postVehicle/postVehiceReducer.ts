import { vehicleTypes } from "../../../actionTypes/vehiclesTypes";
import { VehiclesActions, VehicleState } from "../../../types/types";

const initialState: VehicleState = {
  cars: [],
  loading: false,
  error: null,
  status: 0,
};

const postVehicleReducer = (state = initialState, action: VehiclesActions) => {
  switch (action.type) {
    case vehicleTypes.POSTONE_VEHICLE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case vehicleTypes.POSTONE_VEHICLE_SUCCESS:
      return {
        ...state,
        loading: false,
        status: action.payload.status,
        error: null,
      };
    case vehicleTypes.POSTONE_VEHICLE_FAILURE:
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};

export default postVehicleReducer;
