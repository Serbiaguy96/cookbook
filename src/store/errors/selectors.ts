import { RootState as RS } from "../types";
import { ErrorMessage, ErrorState } from "./types";

const getErrorsSlice = (state: RS): ErrorState => state.error;

export const getErrorMessage = (state: RS): ErrorMessage | null =>
  getErrorsSlice(state).error;
