import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Dot extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("dot-a", "./Dot/costumes/dot-a.svg", {
        x: 34.52659123219448,
        y: -73.13111714338712
      })
    ];

    this.sounds = [new Sound("bark", "./Dot/sounds/bark.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(222, -27);
    this.visible = true;
  }

  *startAsClone() {
    yield* this.glide();
    this.deleteThisClone();
  }

  *glide() {
    this.goto(222, -27);
    yield* this.glide(1, -231, -27);
  }

  *whenGreenFlagClicked2() {
    this.stage.vars.wait = [];
    this.stage.vars.wait.push(0.8);
    this.stage.vars.wait.push(1);
    this.stage.vars.wait.push(1.25);
    this.stage.vars.wait.push(1.4);
    this.stage.vars.wait.push(1.5);
    this.stage.vars.wait.push(1.75);
    this.stage.vars.wait.push(2);
  }

  *whenIReceiveStart() {
    yield* this.wait(5);
    while (true) {
      this.createClone();
      yield* this.wait(this.stage.vars.wait[this.random(1, 7) - 1]);
      yield;
    }
  }
}
