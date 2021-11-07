import { rest } from "msw";
import { getRandomRobots } from "../factories/robotsFactory";

const urlApi = process.env.REACT_APP_API_URL;

const handlers = [
  rest.get(urlApi, (req, res, ctx) => {
    return res(ctx.json(getRandomRobots()));
  }),
];

export default handlers;
