import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import Dot from "./Dot/Dot.js";
import Sprite2 from "./Sprite2/Sprite2.js";
import Start from "./Start/Start.js";
import Button2 from "./Button2/Button2.js";
import Sprite from "./Sprite/Sprite.js";
import Sprite3 from "./Sprite3/Sprite3.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Sprite1: new Sprite1({
    x: -166,
    y: -107,
    direction: 90,
    costumeNumber: 2,
    size: 75,
    visible: true,
    layerOrder: 1
  }),
  Dot: new Dot({
    x: -247,
    y: -27,
    direction: 90,
    costumeNumber: 1,
    size: 80,
    visible: true,
    layerOrder: 2
  }),
  Sprite2: new Sprite2({
    x: 22.352941176470594,
    y: -16.470588235294116,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 3
  }),
  Start: new Start({
    x: 419,
    y: 242,
    direction: 90,
    costumeNumber: 1,
    size: 325,
    visible: true,
    layerOrder: 7
  }),
  Button2: new Button2({
    x: 421,
    y: 260,
    direction: 90,
    costumeNumber: 2,
    size: 325,
    visible: true,
    layerOrder: 6
  }),
  Sprite: new Sprite({
    x: 32.4705882352941,
    y: -37.88235294117647,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 5
  }),
  Sprite3: new Sprite3({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 4
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
