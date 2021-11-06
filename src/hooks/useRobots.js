import { useDispatch, useSelector } from "react-redux";
import { loadRobotsThunk } from "../redux/thunks/robotsThunks";
import { useCallback } from "react";

const useRobots = () => {
  const robots = useSelector(({ robots }) => robots);
  const dispatch = useDispatch();

  const loadRobots = useCallback(() => {
    dispatch(loadRobotsThunk());
  }, [dispatch]);

  return {
    robots,
    loadRobots,
  };
};

export default useRobots;
