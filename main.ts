radio.onReceivedNumber(function (receivedNumber) {
    if (alternativ > -1 && receivedNumber > -1) {
        status = -1
        if (alternativ == 0 && receivedNumber == 1) {
            status = 1
        }
        if (alternativ == 1 && receivedNumber == 2) {
            status = 1
        }
        if (alternativ == 2 && receivedNumber == 0) {
            status = 1
        }
        if (alternativ == receivedNumber) {
            status = 0
        }
        if (status == -1) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                `)
        }
        if (status == 1) {
            basic.showLeds(`
                . # . # .
                . . . . .
                # . . . #
                # . . . #
                . # # # .
                `)
        }
        if (status == 0) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                # # # # #
                . . . . .
                `)
        }
    }
})
function skriv (num: number) {
    if (num == 0) {
        basic.showString(" sten !")
    }
    if (num == 1) {
        basic.showString(" sax !")
    }
}
// function skriv(var name)
// {
// 
// }
input.onButtonPressed(Button.A, function () {
    basic.showString("nice!")
    music.playTone(262, music.beat(BeatFraction.Whole))
})
function ledlights () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
input.onButtonPressed(Button.B, function () {
    music.playMelody("- F E F - F F - ", 120)
    pick()
    skriv(alternativ)
})
function pick () {
    status = 0
    alternativ = randint(0, 2)
}
let status = 0
let alternativ = 0
alternativ = 2
radio.setGroup(222)
basic.forever(function () {
    radio.sendNumber(alternativ)
    ledlights()
})
