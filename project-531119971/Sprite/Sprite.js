import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite/costumes/costume1.svg", {
        x: 328.57983648769454,
        y: 243.24324324324323
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "H2P" }, this.whenIReceiveH2p),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.BROADCAST, { name: "Back" }, this.whenIReceiveBack)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveH2p() {
    this.visible = true;
  }

  *whenthisspriteclicked() {
    this.broadcast("Back");
  }

  *whenIReceiveBack() {
    this.visible = false;
  }
}
