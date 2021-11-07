import { rest } from "msw";
import { getRandomRobots } from "../factories/robotsFactory";

const urlApi = "https://robots-decolorblau.herokuapp.com/robots";

const handlers = [
  rest.get(urlApi, (req, res, ctx) => {
    return res(ctx.json(getRandomRobots(7)));
  }),
];

export default handlers;
