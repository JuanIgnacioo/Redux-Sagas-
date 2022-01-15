import { usersTypes } from "../../actionTypes/usersTypes";
import {
  FetchUsersFailure,
  FetchUsersFailurePayload,
  FetchUsersRequest,
  FetchUsersSuccess,
  FetchUsersSuccessPayload,
  PostOneUserRequest,
  PostOneUserFailurePayload,
  PostOneUserFailure,
} from "../../types/types";

export const fetchUsersRequest = (): FetchUsersRequest => ({
  type: usersTypes.FETCH_USERS_REQUEST,
});

export const fetchUsersSuccess = (
  payload: FetchUsersSuccessPayload
): FetchUsersSuccess => ({
  type: usersTypes.FETCH_USERS_SUCCESS,
  payload,
});

export const fetchUsersFailure = (
  payload: FetchUsersFailurePayload
): FetchUsersFailure => ({
  type: usersTypes.FETCH_USERS_FAILURE,
  payload,
});

export const postOneUserRequest = (user: any): PostOneUserRequest => ({
  type: usersTypes.POST_ONEUSER_REQUEST,
  payload: user,
});

export const postOneUserSuccess = (
  payload: PostOneUserSuccessPayload
): PostOneUserSuccess => ({
  type: usersTypes.POST_ONEUSER_SUCCESS,
  payload,
});

export interface PostOneUserSuccessPayload {
  status: number;
}

export type PostOneUserSuccess = {
  type: typeof usersTypes.POST_ONEUSER_SUCCESS;
  payload: PostOneSuccessPayload;
};

export interface PostOneSuccessPayload {
  status: number;
}

export const postOneUserFailure = (
  payload: PostOneUserFailurePayload
): PostOneUserFailure => ({
  type: usersTypes.POST_ONEUSER_FAILURE,
  payload,
});
