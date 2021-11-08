import "./App.css";
import RobotsList from "./components/RobotsList/RobotsList";
import FormRobot from "./components/FormRobot/FormRobot";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";
import useUsers from "./hooks/useUsers";
/* import { useEffect } from "react";
import { useDispatch } from "react-redux";
import jwtDecode from "jwt-decode";
 */
function App() {
  const {
    user: { isAuthenticated },
  } = useUsers();

  /*  const dispatch = useDispatch();
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("user"));
    if (token) {
      dispatch(userLoginAction(jwtDecode(token.token)));
    }
  }, [dispatch]); */

  return (
    <div className="container">
      <div className="mt-4 ">
        <h1>ROBOTS</h1>
      </div>
      <main>
        {isAuthenticated ? (
          <>
            <section className="row justify-content-end">
              <Logout />
            </section>
            <section className="row">
              <FormRobot />
            </section>
            <section className="row">
              <RobotsList />
            </section>
          </>
        ) : (
          <Login />
        )}
      </main>
    </div>
  );
}

export default App;
