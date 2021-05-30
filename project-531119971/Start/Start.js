import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Start extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "D86EFCBE-63F7-40BC-8740-81145B2DA9AB",
        "./Start/costumes/D86EFCBE-63F7-40BC-8740-81145B2DA9AB.svg",
        { x: 59.98308813725072, y: 26.2096191567459 }
      )
    ];

    this.sounds = [new Sound("pop", "./Start/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart),
      new Trigger(Trigger.BROADCAST, { name: "H2P" }, this.whenIReceiveH2p),
      new Trigger(Trigger.BROADCAST, { name: "Back" }, this.whenIReceiveBack)
    ];
  }

  *whenthisspriteclicked() {
    this.broadcast("Start");
  }

  *whenGreenFlagClicked() {
    this.moveAhead();
    this.visible = true;
    this.goto(0, 75);
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
}
