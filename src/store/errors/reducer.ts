import { ErrorActionsTypes, ErrorState } from "./types";
import { ERASE_ERROR, RECEIVE_ERROR } from "./actionTypes";

const initialState: ErrorState = {
  error: null,
};

const errorReducer = (
  state = initialState,
  action: ErrorActionsTypes
): ErrorState => {
  switch (action.type) {
    case RECEIVE_ERROR:
      return {
        error: action.payload.error,
      };
    case ERASE_ERROR:
      return {
        error: null,
      };
    default:
      return state;
  }
};

export default errorReducer;
