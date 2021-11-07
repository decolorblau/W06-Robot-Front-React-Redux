import axios from "axios";
import { loadRobotsAction, createRobotAction } from "../actions/actionCreator";

const urlApi = "https://robots-decolorblau.herokuapp.com/robots";

export const loadRobotsThunk = () => {
  return async (dispatch) => {
    const { data: robots } = await axios.get(urlApi);
    dispatch(loadRobotsAction(robots));
  };
};
export const createRobotThunk = (robot) => {
  return async (dispatch) => {
    const { data: newRobot } = await axios.post(urlApi, robot);
    dispatch(createRobotAction(newRobot));
  };
};
