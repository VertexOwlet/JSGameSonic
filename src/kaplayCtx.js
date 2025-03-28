import kaplay from "kaplay"

/** @type {ReturnType<typeof kaplay>} */
const k = kaplay({
  width: 640,
  height: 480,
  global: false,
  touchToMouse: true,
  buttons: {
    jump: {
        keyboard: ["space"],
        mouse: ["left"],
    },
  },
  background: [0,0,0],
  letterbox: true
})



export default k;