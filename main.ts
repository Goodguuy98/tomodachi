let action = 0
let Mood = 0
let Pitch = 0
input.onButtonPressed(Button.A, function () {
    action = 1
    while (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            # . # . .
            # . # . .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
    action = 0
})
function Intro () {
    Mood = 1
    action = 0
    music.setTempo(79)
    music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # . # .
        . . # . .
        . . . . .
        `)
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # . # . #
            . # . # .
            . . # . .
            `)
        basic.showLeds(`
            # . . . #
            . . # . .
            . # . # .
            . . # . .
            # . . . #
            `)
    }
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        . # . # .
        . . # . .
        `)
    basic.showLeds(`
        . # . # .
        # . . . #
        . . . . .
        # . . . #
        . # . # .
        `)
    basic.clearScreen()
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # # # # #
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        # # # # #
        . # # # .
        `)
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . . . # .
        # # . # .
        . . . . .
        # . . . .
        . # # # .
        `)
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
}
input.onButtonPressed(Button.B, function () {
    action = 1
    while (input.buttonIsPressed(Button.B)) {
        basic.showLeds(`
            . . # . #
            . . # . #
            . . . . .
            # . . . #
            . # # # .
            `)
    }
    action = 1
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    action = 1
    Pitch = 0
    while (input.logoIsPressed()) {
        Pitch += 3
        music.ringTone(131 + Pitch)
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            # . . . #
            . # # # .
            `)
    }
    music.stopAllSounds()
    if (Pitch < 18) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            . . . . .
            . # # # .
            `)
        basic.pause(300)
        music.playTone(587, music.beat(BeatFraction.Quarter))
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            . . . . .
            . # # # .
            `)
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            . . . . .
            . # # # .
            `)
        basic.pause(200)
        music.playTone(587, music.beat(BeatFraction.Quarter))
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            . . . . .
            . # # # .
            `)
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            . . . . .
            . # # # .
            `)
    } else {
        soundExpression.giggle.play()
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # # # # #
            . # # # .
            `)
        basic.pause(500)
        basic.showLeds(`
            . # . . .
            . # . # #
            . . . . .
            # . . . .
            . # # # .
            `)
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # . . . .
            . # # # .
            `)
        basic.pause(100)
    }
    action = 0
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_EVT_ANY, function () {
	
})
function idleAnim (Mood: number) {
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.pause(2000)
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        # . . . #
        . # # # .
        `)
}
basic.forever(function () {
    if (action == 0) {
        idleAnim(1)
    } else {
    	
    }
})
