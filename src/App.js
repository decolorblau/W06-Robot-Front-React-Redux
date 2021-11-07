import "./App.css";
import RobotsList from "./components/RobotsList/RobotsList";

function App() {
  return (
    <div className="container">
      <div className="">
        <h1>ROBOTS</h1>
      </div>
      <main>
        <section className="row">
          <RobotsList />
        </section>
      </main>
    </div>
  );
}

export default App;
