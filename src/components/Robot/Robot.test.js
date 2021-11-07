import { Provider } from "react-redux";
import Robot from "./Robot";
import ReactTestRenderer from "react-test-renderer";
import configureStore from "../../redux/store";

describe("Given a Task component", () => {
  describe("When it receives and object with task", () => {
    test("then it should render a snapshot of task", () => {
      const robot = {
        id: 1,
        name: "robot",
        imageUrl:
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hobbyconsolas.com%2Fnoticias%2Fsorprendente-nueva-patente-sony-robot-nos-acompana-jugar-ps5-623609&psig=AOvVaw2Q1mBWnM8eXuUvp8J6IhSV&ust=1636372563694000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIDEg_-YhvQCFQAAAAAdAAAAABAD",
        features: {
          speed: 9,
          resistance: 4,
          yearCreation: 2020,
        },
      };

      const store = configureStore();

      const renderRobot = ReactTestRenderer.create(
        <Provider store={store}>
          <Robot robot={robot} />
        </Provider>
      );

      expect(renderRobot.toJSON()).toMatchSnapshot();
    });
  });
});
