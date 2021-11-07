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
          <li className="col-4" key={robot._id}>
            <Robot robot={robot} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default RobotsList;
