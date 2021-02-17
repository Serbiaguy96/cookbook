import { useSelector } from "react-redux";
import { getErrorMessage } from "./selectors";

export const useErrorMessage = () => useSelector(getErrorMessage);
