import { getRandomRobots } from "../../factories/robotsFactory";
import actionTypes from "../actions/actionTypes";
import robotsReducer from "./robotsReducer";

describe("Given a robotsReducer reducer", () => {
  describe("When it receives an empty robots list and a load action with five robots", () => {
    test("Then it should return a new robots list with the three robots received", () => {
      const initialRobots = [];
      const robotsList = getRandomRobots(5);
      const action = {
        type: actionTypes.loadRobots,
        robots: robotsList,
      };

      const newRobotsList = robotsReducer(initialRobots, action);
      expect(newRobotsList).toEqual(robotsList);
    });
  });
});
