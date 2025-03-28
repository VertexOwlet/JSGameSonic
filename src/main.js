import k from "../src/kaplayCtx"

import LoadMenu from "/src/scenes/mainMenu"
import LoadGame from "/src/scenes/game"
import LoadHiscore from "./scenes/hiscore"
import LoadDeath from "./scenes/death"

const MAX_RINGS = 64
const RINGS = Array(MAX_RINGS)


k.loadSprite("chemical-bg", "graphics/chemical-bg.png");
k.loadSprite("platform", "graphics/platforms.png");
k.loadSprite("sonic", "graphics/sonic.png", {
  sliceX: 8,
  sliceY: 2,
  anims: {
    run: {from: 0, to: 7, loop: true, speed: 30},
    jump: {from: 8, to: 15, loop: true, speed: 30},
  },
});

k.loadSprite("motobug", "graphics/motobug.png", {
  sliceX: 5,
  sliceY: 1,
  anims: {
    default: {from: 0, to: 4, loop: true, speed: 30},
  },
});

k.loadSprite("ring", "graphics/ring.png", {
  sliceX: 16,
  sliceY: 1,
  anims: {
    default: {from: 0, to: 15, loop: true, speed: 30},
  },
});

k.loadFont("mania", "fonts/mania.ttf");

k.loadSound("destroy", "sounds/Destroy.wav");
k.loadSound("hurt", "sounds/Hurt.wav");
k.loadSound("hyper-ring", "sounds/HyperRing.wav");
k.loadSound("jump", "sounds/Jump.wav");
k.loadSound("ring", "sounds/Ring.wav");
k.loadSound("city", "sounds/city.mp3");

k.scene("main-menu", LoadMenu);
k.scene("game", LoadGame);
k.scene("hiscore", LoadHiscore)
k.scene("death", LoadDeath)


k.go("main-menu");
