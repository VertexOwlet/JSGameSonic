import { MakeMotobug as CreateMotobug } from "../entities/motobug";
import { CreateSonic } from "../entities/sonic";
import k from "../kaplayCtx"

var score = 0;
var currentCombo = 0;
var scoreText;

export function IncreaseScore(amount) {
  score += amount;
  scoreText.text = "Score: " + score;
}

export function GetCombo() {
  currentCombo += 1;
  return 10 * currentCombo;
}

export function GetScore() {
  return score;
}


function ResetCombo() {
  currentCombo = 0;
}


export default function LoadGame() {

  const MAX_PARALAX_SPEED = 12;
  


  k.setGravity(2000);
    
  k.add([k.text("Gameplay", {
    font: "mania"
  })]);
  
  const paralax_bg = [
    k.add([
      k.sprite("chemical-bg"),
      k.pos(0,-120),
    ]),
    k.add([
      k.sprite("chemical-bg"),
      k.pos(1920,-120)
    ]),
  ]
  

  const paralax_platforms = [
    k.add([k.sprite("platform"), k.pos(k.vec2(0,320)), k.area({offset: k.vec2(0,100)}), k.body({isStatic: true})]),
    k.add([k.sprite("platform"), k.pos(k.vec2(1280,320)), k.area({offset: k.vec2(0,100)}), k.body({isStatic: true})]),
  ];


  const player = CreateSonic(64,380);


  // Score UI
  score = 0;
  scoreText = k.add([
    k.text("Score: " + score, {
      font: "mania"
    }),
    k.pos(k.width() / 2, 8),
    k.anchor("top")
  ])


  let paralax_speed = 3;

  

  k.onButtonPress("jump", () => {
    console.log("HELLO WORLD?!?!?");
    if (player.isGrounded()) {
      player.jump();
      player.play("jump");
      k.play("jump")
      ResetCombo();
    }
  })

  player.onGround(() => {
    player.play("run");
  })

  let bugs = [];

  // MOBS
  k.onUpdate((delta) => {


    for (let index = 0; index < paralax_platforms.length; index++) {
      const element = paralax_platforms[index];
      
      element.pos.x = element.pos.x - paralax_speed;
      if (element.pos.x < -1280) {
          element.pos.x += 1280 * 2;
      }
    }

    for (let index = 0; index < paralax_bg.length; index++) {
      const element = paralax_bg[index];
      
      element.pos.x = element.pos.x - (paralax_speed * 0.1);
      if (element.pos.x < -1920) {
          element.pos.x += 1920 * 2;
      }
    }

    for (let index = bugs.length - 1; index >= 0 ; index--) {
      const element = bugs[index];
      element.pos.x -= paralax_speed;
      if (element.isOffScreen()) {
        element.destroy();
        bugs.splice(index, 1);
        console.log("Deleted Bug!");
        console.log(bugs.length);
      }
    }

  })

  k.loop(0.7, () => {
    let randomX = Math.random() * 300;
    bugs.push(CreateMotobug(900 + (-randomX), 385));
    console.log(randomX);
    
    paralax_speed += 0.25;
    if (paralax_speed > MAX_PARALAX_SPEED) {
      paralax_speed = MAX_PARALAX_SPEED;
    }
  })
}