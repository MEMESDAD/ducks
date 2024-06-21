namespace SpriteKind {
    export const gambke = SpriteKind.create()
}
mp.onButtonEvent(mp.MultiplayerButton.A, ControllerButtonEvent.Pressed, function (player2) {
    if (Math.percentChance(20)) {
    	
    }
})
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Three))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`
    . . . . 2 . . . . . b 2 b . 2 . 
    . . . . 2 . . . . b 2 b . . 2 . 
    . . . . . 2 b b b b b b 2 2 . . 
    . . . . . b b 2 2 2 2 2 b . . . 
    . . . . b b 2 d 1 f 2 2 d f . . 
    . . . . b 2 2 1 f f 2 d 4 c . . 
    . . . . b 2 2 d f b d d 4 4 . . 
    . b b b d 2 2 2 2 2 4 4 4 4 4 b 
    b d d d b b d 2 2 4 4 4 4 4 b . 
    b b d 2 2 2 b 2 2 2 2 2 2 b . . 
    c d c 2 2 2 2 d 2 2 2 2 2 2 b . 
    c b d c d 2 2 b 2 2 2 2 2 2 b . 
    . c d d c c b d 2 2 2 2 2 d b . 
    . . c b d d d d d 2 2 2 b b . . 
    . . . c c c c c c c c b b . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img`
    . . . . . . . . . . b 8 b . . . 
    . . . . . . . . . b 8 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 8 8 8 8 8 b . . . 
    . . . . b b 8 d 1 f 8 8 d f . . 
    . . . . b 8 8 1 f f 8 d 4 c . . 
    . . . . b 8 8 d f b d d 4 4 . . 
    . b b b d 8 8 8 8 8 4 4 4 4 4 b 
    b d d d b b d 8 8 4 4 4 4 4 b . 
    b b d 8 8 8 b 8 8 8 8 8 8 b . . 
    c d c 8 8 8 8 8 8 2 5 2 8 8 b . 
    c b d c d 8 8 b 8 8 2 8 8 8 b . 
    . c d d c c b d 8 8 8 8 8 d b . 
    . . c b d d d d d 8 8 8 b b . . 
    . . . c c c c c c c c b b . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player))
tiles.setCurrentTilemap(tilemap`level2`)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three), sprites.create(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 5 d f . . 
    . . . . b 5 5 1 f f 5 d 4 c . . 
    . . . . b 5 5 d f b d d 4 4 . . 
    . b b b d 5 5 5 5 5 4 4 4 4 4 b 
    b d d d b b d 5 5 4 4 4 4 4 b . 
    b b d 5 5 5 b 5 5 5 5 5 5 b . . 
    c d c 5 5 5 5 d 5 5 5 5 5 5 b . 
    c b d c d 5 5 b 5 5 5 5 5 5 b . 
    . c d d c c b d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player))
