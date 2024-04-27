namespace SpriteKind {
    export const Supercolect = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Supercolect, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    Charechter.startEffect(effects.trail)
    Superon = true
    pause(5000)
    Superon = false
    effects.clearParticles(Charechter)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    Collectable.setPosition(randint(0, 160), randint(0, 120))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (Superon) {
        "ingnore damage"
    } else {
        Bad_guy.setPosition(randint(0, 160), randint(0, 120))
        info.changeLifeBy(-1)
    }
})
let Super: Sprite = null
let Superon = false
let Bad_guy: Sprite = null
let Collectable: Sprite = null
let Charechter: Sprite = null
Charechter = sprites.create(img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, SpriteKind.Player)
scene.setBackgroundColor(5)
controller.moveSprite(Charechter, 100, 100)
Collectable = sprites.create(img`
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    `, SpriteKind.Food)
Collectable.setPosition(randint(0, 160), randint(0, 120))
info.setScore(0)
Bad_guy = sprites.create(img`
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 f f f 8 8 8 8 8 8 8 8 8 f f 
    8 8 8 a f f f 8 8 8 8 8 8 f f a 
    8 8 a a a a f f 8 8 8 f f f a a 
    8 a a a a a a f 8 8 8 8 a a a a 
    8 a a a a a a a 8 8 8 8 a a a a 
    8 a a a f a a a 8 8 8 8 a a a f 
    8 a a a a a a a 8 8 8 8 a a a a 
    8 a a a a a a a 8 8 8 8 a a a a 
    8 8 a a a a a 8 8 8 8 8 8 a a a 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 2 2 2 8 8 8 8 8 8 8 8 8 
    8 8 8 8 2 2 2 2 2 2 2 2 2 2 8 8 
    8 8 8 8 2 2 2 2 2 2 2 2 2 2 8 8 
    8 8 8 8 2 2 2 2 2 2 2 2 2 2 8 8 
    `, SpriteKind.Enemy)
Bad_guy.setPosition(randint(0, 160), randint(0, 120))
Bad_guy.follow(Charechter, 50)
info.setLife(3)
Superon = false
game.onUpdateInterval(10000, function () {
    Super = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . 6 6 6 5 5 6 6 6 . . . . 
        . . . 7 7 7 7 6 6 6 6 6 6 . . . 
        . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
        . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
        . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
        . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
        . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
        . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
        . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
        . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
        . . . 6 8 8 8 8 8 8 8 8 6 . . . 
        . . . . 6 6 8 8 8 8 6 6 . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Supercolect)
    Super.setPosition(randint(0, 160), randint(0, 120))
})
