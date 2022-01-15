import { historyTypes } from "../../../actionTypes/historyTypes";
import { HistoryActions, HistoryState } from "../../../types/types";

const initialState: HistoryState = {
  status: 0,
  services: [],
  loading: false,
  error: null,
};

const postHistoryreducer = (state = initialState, action: HistoryActions) => {
  switch (action.type) {
    case historyTypes.POST_HISTORY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case historyTypes.POST_HISTORY_SUCCESS:
      return {
        ...state,
        status: action.payload.status,
        loading: false,
        error: null,
      };
    case historyTypes.POST_HISTORY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};

export default postHistoryreducer;
