import k from "../kaplayCtx"

export default function LoadHiscore() {
    const text = k.add([
        k.text("HISCORE: " + k.getData("hiscore", 0), {font: "mania"}),
        k.anchor("center"),
        k.pos(k.center()),
        k.rotate(0),
        k.animate(),
        k.opacity(255),
        k.color(255,255,0)
    ])

    text.animate("angle", [-1, 1], {
        duration: 0.35,
        direction: "ping-pong",
        loops: 0
    })    

    

    text.animate("textSize", [32, 64], {
        duration: 1,
        direction: "ping-pong",
        loops: 0
    })

    
    
    text.animate("opacity", [1, 0.75], {
        duration: 0.25,
        direction: "ping-pong",
        loops: 0
    })
    
    k.onButtonPress("jump", () => {
        k.go("main-menu");
    })
}