import "./Robot.css";

const Robot = ({ robot }) => {
  return (
    <div className="card">
      <div className="card-img-top image-container">
        <img
          src={robot.imageUrl}
          className="card-img-top image-robot"
          alt="robot"
        />
      </div>
      <div className="card-body">
        <h3 className="card-title">{robot.name}</h3>
        <p className="card-text">Speed: {robot.features.speed}</p>
        <p className="card-text">Resistance: {robot.features.resistance}</p>
        <p className="card-text">
          Year of Creation: {robot.features.yearCreation}
        </p>
        <button className="btn btn-outline-primary">Update</button>
        <button className="btn btn-outline-danger m-1">Delete</button>
      </div>
    </div>
  );
};

export default Robot;
