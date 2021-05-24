controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    Dancer.setPosition(60, 100)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Dancer.setPosition(30, 100)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Dancer.setPosition(130, 100)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    Dancer.setPosition(100, 100)
})
let Right: Sprite = null
let Left: Sprite = null
let Down: Sprite = null
let Up: Sprite = null
let Lane = 0
let Dancer: Sprite = null
tiles.setTilemap(tilemap`level1`)
effects.confetti.startScreenEffect()
Dancer = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . f f f . . . . . . 
    . . . . . . f . . . f . . . . . 
    . . . . . . f . . . f . . f . . 
    . . . . . . . f f f . . f . . . 
    . . . . . . . . f . . f . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . f . . f . . . . . . . 
    . . . . f . . . f . . . . . . . 
    . . . . . . . . f . . . . . . . 
    . . . . . . . f . f . . . . . . 
    . . . . . . f . . . f . . . . . 
    . . . . . f . . . f . . . . . . 
    . . . . f . . . f . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
Dancer.setPosition(80, 100)
let Speed = 40
game.onUpdateInterval(2000, function () {
    Speed += 1
})
game.onUpdateInterval(500, function () {
    Lane = randint(1, 4)
    if (Lane == 1) {
        Up = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . a a . . . . . . . 
            . . . . . . a 5 5 a . . . . . . 
            . . . . . a 5 7 7 5 a . . . . . 
            . . . . a 5 7 5 5 7 5 a . . . . 
            . . . a 5 7 5 a a 5 7 5 a . . . 
            . . a 5 7 5 a 5 5 a 5 7 5 a . . 
            . a 5 7 5 a 5 7 7 5 a 5 7 5 a . 
            . . a 5 a . a 7 7 a . a 5 a . . 
            . . . a . . a 7 7 a . . a . . . 
            . . . . . . a 7 7 a . . . . . . 
            . . . . . . a 7 7 a . . . . . . 
            . . . . . . a 5 5 a . . . . . . 
            . . . . . . . a a . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Projectile)
        Up.setVelocity(0, Speed)
        Up.setPosition(60, 8)
    } else if (Lane == 2) {
        Down = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . a a . . . . . . . 
            . . . . . . a 5 5 a . . . . . . 
            . . . . . . a 7 7 a . . . . . . 
            . . . . . . a 7 7 a . . . . . . 
            . . . a . . a 7 7 a . . a . . . 
            . . a 5 a . a 7 7 a . a 5 a . . 
            . a 5 7 5 a 5 7 7 5 a 5 7 5 a . 
            . . a 5 7 5 a 5 5 a 5 7 5 a . . 
            . . . a 5 7 5 a a 5 7 5 a . . . 
            . . . . a 5 7 5 5 7 5 a . . . . 
            . . . . . a 5 7 7 5 a . . . . . 
            . . . . . . a 5 5 a . . . . . . 
            . . . . . . . a a . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Projectile)
        Down.setVelocity(0, Speed)
        Down.setPosition(100, 8)
    } else if (Lane == 3) {
        Left = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . a . . . . . . . . 
            . . . . . . a 5 a . . . . . . . 
            . . . . . a 5 7 5 a . . . . . . 
            . . . . a 5 7 5 a . . . . . . . 
            . . . a 5 7 5 a . . . . . . . . 
            . . a 5 7 5 a 5 a a a a a . . . 
            . a 5 7 5 a 5 7 7 7 7 7 5 a . . 
            . a 5 7 5 a 5 7 7 7 7 7 5 a . . 
            . . a 5 7 5 a 5 a a a a a . . . 
            . . . a 5 7 5 a . . . . . . . . 
            . . . . a 5 7 5 a . . . . . . . 
            . . . . . a 5 7 5 a . . . . . . 
            . . . . . . a 5 a . . . . . . . 
            . . . . . . . a . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Projectile)
        Left.setVelocity(0, Speed)
        Left.setPosition(30, 8)
    } else {
        Right = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . a . . . . . . . 
            . . . . . . . a 5 a . . . . . . 
            . . . . . . a 5 7 5 a . . . . . 
            . . . . . . . a 5 7 5 a . . . . 
            . . . . . . . . a 5 7 5 a . . . 
            . . . a a a a a 5 a 5 7 5 a . . 
            . . a 5 7 7 7 7 7 5 a 5 7 5 a . 
            . . a 5 7 7 7 7 7 5 a 5 7 5 a . 
            . . . a a a a a 5 a 5 7 5 a . . 
            . . . . . . . . a 5 7 5 a . . . 
            . . . . . . . a 5 7 5 a . . . . 
            . . . . . . a 5 7 5 a . . . . . 
            . . . . . . . a 5 a . . . . . . 
            . . . . . . . . a . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Projectile)
        Right.setVelocity(0, Speed)
        Right.setPosition(130, 8)
    }
})
