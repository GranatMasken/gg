def on_forever():
    led.plot(0, 0)
    ledlights()
basic.forever(on_forever)

def ledlights():
    basic.show_leds("""
# . . . #
. # . . .
. . # . .
. . . # .
. . . . #
""")