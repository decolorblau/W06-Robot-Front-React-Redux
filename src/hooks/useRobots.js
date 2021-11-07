import { useDispatch, useSelector } from "react-redux";
import {
  loadRobotsThunk,
  createRobotThunk,
} from "../redux/thunks/robotsThunks";
import { useCallback } from "react";

const useRobots = () => {
  const robots = useSelector(({ robots }) => robots);
  const dispatch = useDispatch();

  const loadRobots = useCallback(() => {
    dispatch(loadRobotsThunk());
  }, [dispatch]);

  const createRobot = useCallback(
    (robot) => {
      dispatch(createRobotThunk(robot));
    },
    [dispatch]
  );

  return {
    robots,
    loadRobots,
    createRobot,
  };
};

export default useRobots;
