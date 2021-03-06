import axios from "axios";
import { loadRobotsAction, createRobotAction } from "../actions/actionCreator";

const urlApi = "https://robots-decolorblau.herokuapp.com/robots";
const urlApiCreate =
  urlApi + "/create?token=" + process.env.REACT_APP_ROBOT_TOKEN;

export const loadRobotsThunk = () => {
  return async (dispatch) => {
    const { token } = JSON.parse(
      localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE)
    );
    const { data: robots } = await axios.get(urlApi + "/", {
      headers: { Authorization: "Bearer " + token },
    });
    dispatch(loadRobotsAction(robots));
  };
};
export const createRobotThunk = (robot) => {
  return async (dispatch) => {
    const { data: newRobot } = await axios.post(urlApiCreate, robot);
    dispatch(createRobotAction(newRobot));
  };
};
