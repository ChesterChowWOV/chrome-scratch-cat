import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 307.5555555555559,
        y: -154.40540540540536
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart)
    ];

    this.vars.myVariable = 1;
    this.vars.score = 200;
    this.vars.WorldHighscore = 729;
    this.vars.wait = [0.8, 1, 1.25, 1.4, 1.5, 1.75, 2];

    this.watchers.score = new Watcher({
      label: "Score",
      style: "normal",
      visible: true,
      value: () => this.vars.score,
      x: 240,
      y: 180
    });
    this.watchers.WorldHighscore = new Watcher({
      label: "☁ World Highscore",
      style: "normal",
      visible: true,
      value: () => this.vars.WorldHighscore,
      x: 350,
      y: 180
    });
  }

  *whenIReceiveStart() {
    this.vars.score = 0;
    while (!(this.vars.myVariable == 1)) {
      this.vars.score += 1;
      yield* this.wait(0.0025);
      yield;
    }
  }
}
