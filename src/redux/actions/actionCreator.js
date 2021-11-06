import actionTypes from "./actionTypes";

export const loadRobotsAction = (Robots) => ({
  type: actionTypes.loadRobots,
  Robots,
});
