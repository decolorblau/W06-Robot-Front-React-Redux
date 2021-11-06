import { datatype } from "faker";
import { lorem } from "faker/locale/es";
import { Factory } from "fishery";

const factory = Factory.define(({ sequence }) => ({
  id: sequence,
  name: lorem.word(),
  imageUrl: datatype.string(1),
  features: {
    speed: datatype.number(0, 10),
    resistance: datatype.number(0, 10),
    yearCreation: datatype.number(2000, 2021),
  },
}));

export const getRandomRobot = () => factory.build();
export const getRandomRobots = (count = 3) => factory.buildList(count);
