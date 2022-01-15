import { usersTypes } from "../../../actionTypes/usersTypes";
import { UsersActions, UsersSate } from "../../../types/types";

const initialState: UsersSate = {
  users: [],
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action: UsersActions) => {
  switch (action.type) {
    case usersTypes.FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case usersTypes.FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload.users,
        error: null,
      };
    case usersTypes.FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload.error,
      };
    case usersTypes.POST_ONEUSER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case usersTypes.POST_ONEUSER_SUCCESS:
      return {
        ...state,
        loading: false,
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

export default userReducer;
