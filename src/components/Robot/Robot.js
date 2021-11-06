const Robot = ({ robot }) => {
  return (
    <div className="card" style="width: 18rem;">
      <img src={robot.imageUrl} className="card-img-top" alt="robot" />
      <div className="card-body">
        <h3 className="card-title">{robot.name}</h3>
        <p className="card-text">Speed: {robot.features.speed}</p>
        <p className="card-text">Resistance: {robot.features.resistance}</p>
        <p className="card-text">
          Year of Creation: {robot.features.yearCreation}
        </p>
        <button className="btn btn-primary">Update</button>
        <button className="btn btn-primary">Delete</button>
      </div>
    </div>
  );
};

export default Robot;
