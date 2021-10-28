Mood = 0
action = 0
Pitch = 0
def Intro():
    global Mood, action
    Mood = 1
    action = 0
    music.set_tempo(79)
    music.start_melody(music.built_in_melody(Melodies.ENTERTAINER),
        MelodyOptions.ONCE)
    basic.show_leds("""
        . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
    """)
    basic.show_leds("""
        . . . . .
                . . # . .
                . # . # .
                . . # . .
                . . . . .
    """)
    for index in range(2):
        basic.show_leds("""
            . . # . .
                        . # . # .
                        # . # . #
                        . # . # .
                        . . # . .
        """)
        basic.show_leds("""
            # . . . #
                        . . # . .
                        . # . # .
                        . . # . .
                        # . . . #
        """)
    basic.show_leds("""
        . . # . .
                . # . # .
                # . . . #
                . # . # .
                . . # . .
    """)
    basic.show_leds("""
        . # . # .
                # . . . #
                . . . . .
                # . . . #
                . # . # .
    """)
    basic.clear_screen()
    basic.show_leds("""
        . # . # .
                . # . # .
                . . . . .
                # # # # #
                . # # # .
    """)
    basic.show_leds("""
        . . . . .
                # # . # #
                . . . . .
                # # # # #
                . # # # .
    """)
    basic.show_leds("""
        . # . # .
                . # . # .
                . . . . .
                # . . . #
                . # # # .
    """)
    basic.show_leds("""
        . . . # .
                # # . # .
                . . . . .
                # . . . .
                . # # # .
    """)
    basic.show_leds("""
        . # . # .
                . # . # .
                . . . . .
                # . . . #
                . # # # .
    """)

def on_logo_touched():
    global action, Pitch
    action = 1
    Pitch = 0
    while input.logo_is_pressed():
        Pitch += 3
        music.ring_tone(131 + Pitch)
        basic.show_leds("""
            . . . . .
                        # # . # #
                        . . . . .
                        # . . . #
                        . # # # .
        """)
    music.stop_all_sounds()
    if Pitch < 140:
        basic.show_leds("""
            . # . # .
                        . # . # .
                        . . . . .
                        . . . . .
                        . # # # .
        """)
        basic.pause(500)
        music.play_tone(587, music.beat(BeatFraction.QUARTER))
        basic.show_leds("""
            . . . . .
                        # # . # #
                        . . . . .
                        . . . . .
                        . # # # .
        """)
        basic.show_leds("""
            . # . # .
                        . # . # .
                        . . . . .
                        . . . . .
                        . # # # .
        """)
        basic.pause(200)
        music.play_tone(587, music.beat(BeatFraction.QUARTER))
        basic.show_leds("""
            . . . . .
                        # # . # #
                        . . . . .
                        . . . . .
                        . # # # .
        """)
        basic.show_leds("""
            . # . # .
                        . # . # .
                        . . . . .
                        . . . . .
                        . # # # .
        """)
    action = 0
input.on_logo_event(TouchButtonEvent.TOUCHED, on_logo_touched)

def idleAnim(Mood2: number):
    basic.show_leds("""
        . # . # .
                . # . # .
                . . . . .
                # . . . #
                . # # # .
    """)
    basic.pause(2000)
    basic.show_leds("""
        . . . . .
                # # . # #
                . . . . .
                # . . . #
                . # # # .
    """)

def on_forever():
    if action == 0:
        idleAnim(1)
    else:
        pass
basic.forever(on_forever)
