import k from "../kaplayCtx"
import { GetCombo, GetScore, IncreaseScore } from "../scenes/game";

export function CreateSonic(xPos, yPos) {
    let player = k.add([
        k.sprite("sonic", {anim: "run"}),
        k.pos(xPos, yPos),
        k.body({isStatic: false, mass: 1}),
        k.area(),
    ])

    player.onCollide("enemy", (obj, col) => {

        if (player.isFalling() === false) {
            player.destroy();
            
            let hiscore = k.getData("hiscore", 0);
            let wasHiscore = false;

            if (GetScore() > hiscore) {
                k.setData("hiscore", GetScore());
                wasHiscore = true;
            }

            if (wasHiscore === true) {
                k.go("hiscore");
            } else {
                k.go("death");
            }

            return;
        }
        obj.destroy();
        player.addForce(k.vec2(0,-70000));
        IncreaseScore(GetCombo());
    })

    

    return player;
}