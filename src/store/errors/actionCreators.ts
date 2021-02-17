import { EraseErrorAction, ErrorMessage, ReceiveErrorAction } from "./types";
import { ERASE_ERROR, RECEIVE_ERROR } from "./actionTypes";

export const receiveErrorAction = (
  error: ErrorMessage
): ReceiveErrorAction => ({
  type: RECEIVE_ERROR,
  payload: { error },
});

export const eraseErrorAction = (): EraseErrorAction => ({
  type: ERASE_ERROR,
});
