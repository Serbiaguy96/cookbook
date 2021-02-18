import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { eraseErrorAction } from "./actionCreators";

export const useEraseError = () => {
  const dispatch = useDispatch();
  return useCallback(() => dispatch(eraseErrorAction()), [dispatch]);
};
