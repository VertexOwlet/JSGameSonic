import k from "../kaplayCtx"

export function MakeMotobug(xPos, yPos) {
    return k.add([
        k.sprite("motobug", {anim: "default"}),
        k.area(),
        k.pos(xPos, yPos),
        k.offscreen(),
        "enemy",
    ]);
}