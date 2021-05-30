import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Button2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("button2-a", "./Button2/costumes/button2-a.svg", {
        x: 58.982000000000056,
        y: 29.212999999999994
      }),
      new Costume(
        "48CC5BC7-1838-466E-BCF1-F97D65E0E132",
        "./Button2/costumes/48CC5BC7-1838-466E-BCF1-F97D65E0E132.svg",
        { x: 60.38653082612811, y: 29.388906501809714 }
      )
    ];

    this.sounds = [new Sound("pop", "./Button2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart),
      new Trigger(Trigger.BROADCAST, { name: "H2P" }, this.whenIReceiveH2p),
      new Trigger(Trigger.BROADCAST, { name: "Back" }, this.whenIReceiveBack),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.moveAhead();
    this.moveBehind(1);
    this.visible = true;
    this.goto(0, -100);
  }

  *whenIReceiveStart() {
    this.goto(500, 500);
  }

  *whenIReceiveH2p() {
    this.visible = false;
  }

  *whenIReceiveBack() {
    this.visible = true;
  }

  *whenthisspriteclicked() {
    this.broadcast("H2P");
  }
}
