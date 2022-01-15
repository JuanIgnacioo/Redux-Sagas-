import { historyTypes } from "../../../actionTypes/historyTypes";
import { HistoryActions, HistoryState } from "../../../types/types";

const initialState: HistoryState = {
  services: [],
  loading: false,
  error: null,
};

const historyreducer = (state = initialState, action: HistoryActions) => {
  switch (action.type) {
    case historyTypes.FETCH_HISTORY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case historyTypes.FETCH_HISTORY_SUCCESS:
      return {
        ...state,
        loading: false,
        services: action.payload.services,
        error: null,
      };
    case historyTypes.FETCH_HISTORY_FAILURE:
      return {
        ...state,
        loading: false,
        services: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};

export default historyreducer;
