import { usersTypes } from "../../../actionTypes/usersTypes";
import { UsersActions, UsersSate } from "../../../types/types";

const initialState: UsersSate = {
  users: [],
  loading: false,
  error: null,
  status: 0,
};

const postUserReducer = (state = initialState, action: UsersActions) => {
  switch (action.type) {
    case usersTypes.POST_ONEUSER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case usersTypes.POST_ONEUSER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case usersTypes.POST_ONEUSER_FAILURE:
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

export default postUserReducer;
