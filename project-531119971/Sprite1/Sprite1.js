import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Run1", "./Sprite1/costumes/Run1.svg", { x: 48, y: 50 }),
      new Costume("Run2", "./Sprite1/costumes/Run2.svg", { x: 46, y: 53 }),
      new Costume("Jump1", "./Sprite1/costumes/Jump1.svg", { x: 44, y: 46 }),
      new Costume("Jump2", "./Sprite1/costumes/Jump2.svg", {
        x: 47.67898252524472,
        y: 49.49923017660271
      }),
      new Costume("Die1", "./Sprite1/costumes/Die1.svg", {
        x: 47.67898252524472,
        y: 49.49923017660271
      }),
      new Costume("Die2", "./Sprite1/costumes/Die2.svg", {
        x: 47.678985050489445,
        y: 49.499230353205405
      })
    ];

    this.sounds = [new Sound("Meow", "./Sprite1/sounds/Meow.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(Trigger.BROADCAST, { name: "Dead" }, this.whenIReceiveDead),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked5),
      new Trigger(Trigger.BROADCAST, { name: "Dead" }, this.whenIReceiveDead2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked6)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(-166, -107);
    this.size = 75;
  }

  *jump() {
    this.costume = "Jump1";
    yield* this.glide(0.2, -166, this.y + 150);
    this.costume = "Jump2";
    yield* this.glide(0.35, -166, this.y - 150);
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.mouse.down) {
        yield* this.jump();
        while (!!this.mouse.down) {
          yield;
        }
      }
      yield;
    }
  }

  *run() {
    this.costume = "Run1";
    yield* this.wait(0.0001);
    this.costume = "Run2";
  }

  *whenGreenFlagClicked3() {
    while (true) {
      while (!this.mouse.down) {
        yield* this.run();
        yield;
      }
      while (!!this.mouse.down) {
        yield;
      }
      yield;
    }
  }

  *whenGreenFlagClicked4() {
    while (true) {
      if (this.touching(this.sprites["Dot"].andClones())) {
        this.broadcast("Dead");
      }
      yield;
    }
  }

  *whenIReceiveDead() {
    for (let i = 0; i < 10; i++) {
      this.costume = "Die1";
      this.costume = "Die2";
      yield;
    }
    /* TODO: Implement stop all */ null;
  }

  *whenGreenFlagClicked5() {
    while (true) {
      if (this.stage.vars.score > this.stage.vars.WorldHighscore) {
        this.stage.vars.WorldHighscore = this.stage.vars.score;
      }
      yield;
    }
  }

  *whenIReceiveDead2() {
    this.stage.vars.myVariable = 1;
  }

  *whenGreenFlagClicked6() {
    this.stage.vars.myVariable = 0;
  }
}
