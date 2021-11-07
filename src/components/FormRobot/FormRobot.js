const FormRobot = () => {
  return (
    <>
      <h2 className="mt-4">CREATE YOUR ROBOT</h2>
      <form onSubmit={() => {}} autoComplete="off" noValidate>
        <label htmlFor="validationCustom01" className="form-label">
          NAME
        </label>
        <input
          type="text"
          className="form-control"
          id="validationCustom01"
          placeholder="Name ex: R2-D2"
          required
        />

        <div className="mt-5">
          <p>FEATURES:</p>
          <label htmlFor="customRange2" className="form-label">
            Speed:
          </label>
          <input
            type="range"
            className="form-range"
            min="0"
            max="10"
            id="customRange2"
            list="ticks"
          ></input>
          <label htmlFor="customRange2" className="form-label">
            Resistance:
          </label>
          <datalist id="ticks">
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </datalist>

          <input
            type="range"
            className="form-range"
            min="0"
            max="10"
            id="customRange2"
            list="ticks"
          />
        </div>
        <button className="btn btn-primary mb-5" type="submit">
          CREATE ROBOT
        </button>
      </form>
    </>
  );
};

export default FormRobot;
