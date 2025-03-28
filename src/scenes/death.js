import k from "../kaplayCtx"

export default function LoadDeath() {
    let canSwitch = false;
    const text = k.add([
        k.text("Current HiScore: " + k.getData("hiscore", 0), {font: "mania"}),
        k.anchor("center"),
        k.pos(k.center()),
        k.rotate(0),
        k.animate(),
        k.opacity(255),
        k.color(255,255,255)
    ])
    
    text.animate("opacity", [1, 0.75], {
        duration: 0.25,
        direction: "ping-pong",
        loops: 0
    })

    k.onButtonPress("jump", () => {
        if (canSwitch === true) {
            k.go("main-menu");
        }
    })

    k.wait(0.5, () => {
        canSwitch = true;
    })
    
}