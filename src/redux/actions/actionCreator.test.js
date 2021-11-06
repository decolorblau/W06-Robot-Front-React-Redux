import actionTypes from "./actionTypes";
import { getRandomRobots } from "../../factories/robotsFactory";
import { loadRobotsAction } from "./actionCreator";

describe("Given a load actionCreator", () => {
  describe("When it receives a list of Robots", () => {
    test("Then it should return a load type action with the Robots received", () => {
      const robotsList = getRandomRobots();
      const expectedAction = {
        type: actionTypes.loadRobots,
        robots: robotsList,
      };

      const actionResult = loadRobotsAction(robotsList);

      expect(actionResult).toEqual(expectedAction);
    });
  });
});
