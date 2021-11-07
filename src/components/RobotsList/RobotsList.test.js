import { render, screen, waitFor } from "@testing-library/react";
import RobotsList from "./RobotsList";
import server from "../../mocks/server";
import configureStore from "../../redux/store/index";
import { Provider } from "react-redux";

beforeAll(() => {
  server.listen();
});
beforeEach(() => {
  server.resetHandlers();
});
afterAll(() => {
  server.close();
});

describe("Given the component RobotsList", () => {
  describe("When it receives array with robots", () => {
    test("Then it should render robots how many are there", async () => {
      const store = configureStore();
      const length = 7;

      render(
        <Provider store={store}>
          <RobotsList />
        </Provider>
      );

      await waitFor(() => {
        const robotsRender = screen.getAllByRole("img");
        expect(robotsRender).toHaveLength(length);
      });
    });
  });
});
