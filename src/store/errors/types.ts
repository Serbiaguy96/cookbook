import { ERASE_ERROR, RECEIVE_ERROR } from "./actionTypes";

export interface ErrorMessage {
  statusCode: number;
  message: string;
}

export interface ErrorState {
  error: ErrorMessage | null;
}

export interface ReceiveErrorAction {
  type: typeof RECEIVE_ERROR;
  payload: { error: ErrorMessage };
}

export interface EraseErrorAction {
  type: typeof ERASE_ERROR;
}

export type ErrorActionsTypes = ReceiveErrorAction | EraseErrorAction;
