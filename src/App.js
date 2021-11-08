import "./App.css";
import RobotsList from "./components/RobotsList/RobotsList";
import FormRobot from "./components/FormRobot/FormRobot";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="container">
      <div className="">
        <h1>ROBOTS</h1>
      </div>
      <main>
        <Login />
        <section className="row">
          <FormRobot />
        </section>
        <section className="row">
          <RobotsList />
        </section>
      </main>
    </div>
  );
}

export default App;
