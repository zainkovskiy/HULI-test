import axios from 'axios';
import { IForm } from 'types/form-types';
import { IAuth } from "types/form-types";

export const readToken = async (form: IForm) => {
  const res = await axios.post(
    'http://localhost:4000/token',
    JSON.stringify(form),
    {
      headers: {
        "Content-Type": 'application/json',
      }
    }
  );
  if (res?.data) {
    return res.data;
  };
}

export const checkToken = async (token: string) => {
  const res = await axios.post<IAuth>('http://localhost:4000/check', {token: token});
  if (res?.data && res?.data?.auth) {
    if (res?.data?.auth)
    return res.data;
  };
}