import axios from "axios";
import { loadRobotsAction } from "../actions/actionCreator";

const urlApi = process.env.REACT_APP_API_URL;

export const loadRobotsThunk = () => {
  return async (dispatch) => {
    const { data: robots } = await axios.get(urlApi);
    dispatch(loadRobotsAction(robots));
  };
};
