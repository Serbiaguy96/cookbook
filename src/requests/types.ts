import {AxiosResponse} from "axios";

export interface AxiosError {
  message: string | null;
  error: string;
  stack: string | null;
}

export type AError = AxiosError[] | any;

export interface ResponseWithError<T> extends AxiosResponse<T> {
  errors?: AError;
};
