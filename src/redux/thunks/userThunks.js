import axios from "axios";
import { userLoginAction } from "../actions/actionCreator";
import jwtDecode from "jwt-decode";

const userLocal = process.env.REACT_APP_LOCALSTORAGE;

const urlApi = "https://robots-decolorblau.herokuapp.com/";

export const userLoginThunk = (user) => async (dispatch) => {
  const response = await axios.post(urlApi + "users/login", user);

  if (response.status === 200) {
    const token = response.data.token;
    const user = jwtDecode(token);
    dispatch(userLoginAction(user));

    localStorage.setItem(userLocal, JSON.stringify({ token: token }));
  }
};
