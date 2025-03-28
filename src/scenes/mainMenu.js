import { CreateSonic } from "../entities/sonic";
import k from "../kaplayCtx"

export default function LoadMenu() {
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


  let player = CreateSonic(64,370);

  let paralax_speed = 3;

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
    
  })

  k.add([
    k.anchor("center"),
    k.text("Sonic Runner",
      {
        size: 48,
        font: "mania",
        align: "center",
      }),
    k.pos(k.center().add(0, -128))
  ]);


  k.add([
    k.anchor("center"),
    k.text("By Joel",
      {
        size: 24,
        font: "mania",
        align: "center",
      }),
    k.pos(k.center().add(0, -80) )
  ]);

  const playText = k.add([
    k.anchor("center"),
    k.text("Click or Press Space to Play",
      {
        size: 24,
        font: "mania",
        align: "center",
      }),
    k.pos(k.center().add(0, 160) ),
    k.outline(4),
    k.animate(),
    k.color(255,255,255),
  ]);

  playText.animate("opacity", [1, 0.5], {
    duration: 0.35,
    direction: "ping-pong",
    loops: 0,
  })

  k.onKeyPress(["space"], () => {
    k.go("game");
  })

  k.onMousePress(["left"], () => {
    k.go("game");
  })
}


