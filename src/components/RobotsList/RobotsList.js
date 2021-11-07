import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { loadRobotsThunk } from "../../redux/thunks/robotsThunks";
import Robot from "../Robot/Robot";

const RobotsList = () => {
  const robots = useSelector(({ robots }) => robots);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRobotsThunk());
  }, [dispatch]);

  return (
    <>
      <h2>List of Robots</h2>
      <ul className="list-unstyled row">
        {robots.map((robot) => (
          <li className="col-4" key={robot._id}>
            <Robot robot={robot} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default RobotsList;
