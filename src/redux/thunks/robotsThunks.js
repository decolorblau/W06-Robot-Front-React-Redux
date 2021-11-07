import axios from "axios";
import { loadRobotsAction } from "../actions/actionCreator";

const urlApi = "https://robots-decolorblau.herokuapp.com/robots";

export const loadRobotsThunk = () => {
  return async (dispatch) => {
    const { data: robots } = await axios.get(urlApi);
    dispatch(loadRobotsAction(robots));
  };
};
