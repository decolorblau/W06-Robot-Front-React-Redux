import { useState, useEffect } from "react";
import useUsers from "../../hooks/useUsers";

const Login = () => {
  const initialUser = {
    userName: "",
    password: "",
  };
  const [loginUser, setLoginUser] = useState(initialUser);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const { login } = useUsers();

  const changeUser = (event) => {
    setLoginUser({
      ...loginUser,
      [event.target.id]: event.target.value,
    });
  };

  const sendLogin = (event) => {
    event.preventDefault();
    login(loginUser);
    resetLogin();
  };

  useEffect(() => {
    setButtonDisabled(loginUser.userName === "" || loginUser.password === "");
  }, [loginUser.userName, loginUser.password]);

  const resetLogin = () => {
    setLoginUser(initialUser);
  };

  return (
    <form
      onSubmit={sendLogin}
      className="row mt-4 mb-4"
      noValidate
      autoComplete="off"
    >
      <div className="col-md-offset-5 col-md-3">
        <div className="form-login">
          <h4>Welcome</h4>
          <input
            type="text"
            id="userName"
            className="form-control input-sm mt-1 mb-2"
            placeholder="userName"
            onChange={changeUser}
            value={loginUser.userName}
          />

          <input
            type="password"
            id="password"
            className="form-control input-sm  mb-3"
            placeholder="password"
            onChange={changeUser}
            value={loginUser.password}
          />
          <div className="wrapper">
            <span className="group-btn">
              <button
                disabled={buttonDisabled}
                className="btn btn-primary btn-md"
              >
                Login
              </button>
            </span>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
