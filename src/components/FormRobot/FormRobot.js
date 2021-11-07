import useRobots from "../../hooks/useRobots";
import { useState, useEffect } from "react";

const FormRobot = () => {
  const initialRobot = {
    name: "",
    imageUrl: "",
    speed: "",
    resistance: "",
    yearCreation: "",
  };

  const [robot, setRobot] = useState(initialRobot);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const { createRobot } = useRobots();

  const changeRobot = (event) => {
    setRobot({
      ...robot,
      [event.target.id]: event.target.value,
    });
  };

  const sendForm = (event) => {
    event.preventDefault();
    const newRobot = {
      name: robot.name,
      imageUrl:
        robot.imageUrl !== ""
          ? robot.imageUrl
          : "https://robots.ieee.org/robots/alberthubo/Interactive%201/Media%20Player/SD-Q3-M360/alberthubo-int1-01.jpg",
      features: {
        speed: robot.speed,
        resistance: robot.resistance,
        yearCreation: robot.yearCreation,
      },
    };

    createRobot(newRobot);
    resetForm();
  };

  useEffect(() => {
    setButtonDisabled(robot.name === "" || robot.yearCreation === "");
  }, [robot.name, robot.yearCreation]);

  const resetForm = () => {
    setRobot(initialRobot);
  };

  return (
    <>
      <h2 className="mt-4">CREATE YOUR ROBOT</h2>
      <form onSubmit={sendForm} autoComplete="off" noValidate>
        <label htmlFor="name" className="form-label">
          NAME
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Name ex: R2-D2"
          value={robot.name}
          onChange={changeRobot}
          required
        />
        <label htmlFor="imageUrl" className="form-label">
          IMAGE:
        </label>
        <input
          type="text"
          className="form-control"
          id="imageUrl"
          placeholder="url"
          value={robot.imageUrl}
          onChange={changeRobot}
        />

        <div className="mt-5">
          <p>FEATURES:</p>
          <label htmlFor="speed" className="form-label">
            Speed:
          </label>
          <input
            type="range"
            className="form-range"
            min="0"
            max="10"
            id="speed"
            value={robot.speed}
            onChange={changeRobot}
          ></input>
          <label htmlFor="resistance" className="form-label">
            Resistance:
          </label>

          <input
            type="range"
            className="form-range"
            min="0"
            max="10"
            id="resistance"
            value={robot.resistance}
            onChange={changeRobot}
          />
          <label htmlFor="yearCreation" className="form-label">
            Year Creation:
          </label>
          <input
            type="text"
            className="form-control"
            id="yearCreation"
            placeholder="year"
            value={robot.yearCreation}
            onChange={changeRobot}
            required
          />
        </div>
        <button
          disabled={buttonDisabled}
          className="btn btn-primary mt-3 mb-5"
          type="submit"
        >
          CREATE ROBOT
        </button>
      </form>
    </>
  );
};

export default FormRobot;
