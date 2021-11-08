import { render, screen, userEvent } from "@testing-library/react";
import FormRobot from "./FormRobot";
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

describe("Given the component FormRobot", () => {
  describe("When the user has typed all fields required", () => {
    test("Then the button should not be disable", async () => {
      const store = configureStore();

      render(
        <Provider store={store}>
          <FormRobot />
        </Provider>
      );

      const name = screen.getByLabelText("NAME");
      const yearCreation = screen.getByPlaceholderText("year");
      const button = screen.getByRole("button", { name: "CREATE ROBOT" });

      userEvent.type(name, "hola");
      userEvent.type(yearCreation, "2021");

      expect(button).not.toBeDisabled();
    });
  });
});
