const Login = () => {
  const initialUser = {
    username: "",
    password: "",
  };

  return (
    <div className="row mt-4 mb-4">
      <div className="col-md-offset-5 col-md-3">
        <div className="form-login">
          <h4>Welcome</h4>
          <input
            type="text"
            id="userName"
            className="form-control input-sm mt-1 mb-2"
            placeholder="username"
          />

          <input
            type="password"
            id="userPassword"
            className="form-control input-sm  mb-3"
            placeholder="password"
          />
          <div className="wrapper">
            <span className="group-btn">
              <button disabled="false" className="btn btn-primary btn-md">
                Login
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
