import { useEffect } from "react";
import useRobots from "../../hooks/useRobots";
import Robot from "../Robot/Robot";

const RobotsList = () => {
  const { robots, loadRobots } = useRobots();

  useEffect(() => {
    loadRobots();
  }, [loadRobots]);

  return (
    <>
      <h2>List of Robots</h2>
      <ul className="list-unstyled row">
        {robots.map((robot) => (
          <li
            className="col-lg-4 col-md-6 col-sm-12 mb-2 d-flex align-items-stretch"
            key={robot._id}
          >
            <Robot robot={robot} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default RobotsList;
