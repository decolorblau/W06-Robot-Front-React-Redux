import actionTypes from "./actionTypes";
import { getRandomRobot, getRandomRobots } from "../../factories/robotsFactory";
import { loadRobotsAction, createRobotAction } from "./actionCreator";

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

describe("Given a create actionCreator", () => {
  describe("When it receives a robot", () => {
    test("Then it should return a create type action with the robot received", () => {
      const newRobot = getRandomRobot();
      const expectedAction = {
        type: actionTypes.createRobot,
        robot: newRobot,
      };

      const actionResult = createRobotAction(newRobot);

      expect(actionResult).toEqual(expectedAction);
    });
  });
});
