import { vehicleTypes } from "../../../actionTypes/vehiclesTypes";
import { VehiclesActions, VehicleState } from "../../../types/types";

const initialState: VehicleState = {
  cars: [],
  loading: false,
  error: null,
};

const vehicleReducer = (state = initialState, action: VehiclesActions) => {
  switch (action.type) {
    case vehicleTypes.FETCH_VEHICLES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case vehicleTypes.FETCH_VEHICLES_SUCCESS:
      return {
        ...state,
        loading: false,
        cars: action.payload.cars,
        error: null,
      };
    case vehicleTypes.FETCH_VEHICLES_FAILURE:
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

export default vehicleReducer;
