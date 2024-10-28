radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    
    i2 = receivedNumber
})
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    i += 1
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    for (let index = 0; index < 2; index++) {
        radio.sendNumber(i)
        basic.pause(1000)
    }
    basic.showLeds(`
        . # . # .
        # # . # #
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.pause(200)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    i += -1
})
let i = 0
let i2 = 0
radio.setGroup(1)
basic.forever(function on_forever() {
    if (i2 == 1) {
        basic.showIcon(IconNames.Heart)
    }
    
    if (i2 == 2) {
        basic.showIcon(IconNames.SmallHeart)
    }
    
    if (i2 == 3) {
        basic.showIcon(IconNames.Yes)
    }
    
    if (i2 == 4) {
        basic.showIcon(IconNames.No)
    }
    
    if (i2 == 5) {
        basic.showIcon(IconNames.Happy)
    }
    
    if (i2 == 6) {
        basic.showIcon(IconNames.Sad)
    }
    
    if (i2 == 7) {
        basic.showIcon(IconNames.Confused)
    }
    
    if (i2 == 8) {
        basic.showIcon(IconNames.Angry)
    }
    
    if (i2 == 9) {
        basic.showIcon(IconNames.Asleep)
    }
    
    if (i2 == 10) {
        basic.showIcon(IconNames.Surprised)
    }
    
    if (i2 == 11) {
        basic.showIcon(IconNames.Silly)
    }
    
    if (i2 == 12) {
        basic.showIcon(IconNames.Fabulous)
    }
    
    if (i2 == 13) {
        basic.showIcon(IconNames.Meh)
    }
    
    if (i2 == 14) {
        basic.showIcon(IconNames.TShirt)
    }
    
    if (i2 == 15) {
        basic.showIcon(IconNames.Rollerskate)
    }
    
    if (i2 == 16) {
        basic.showIcon(IconNames.Duck)
    }
    
})
basic.forever(function on_forever2() {
    if (i == 1) {
        basic.showIcon(IconNames.Heart)
    }
    
    if (i == 2) {
        basic.showIcon(IconNames.SmallHeart)
    }
    
    if (i == 3) {
        basic.showIcon(IconNames.Yes)
    }
    
    if (i == 4) {
        basic.showIcon(IconNames.No)
    }
    
    if (i == 5) {
        basic.showIcon(IconNames.Happy)
    }
    
    if (i == 6) {
        basic.showIcon(IconNames.Sad)
    }
    
    if (i == 7) {
        basic.showIcon(IconNames.Confused)
    }
    
    if (i == 8) {
        basic.showIcon(IconNames.Angry)
    }
    
    if (i == 9) {
        basic.showIcon(IconNames.Asleep)
    }
    
    if (i == 10) {
        basic.showIcon(IconNames.Surprised)
    }
    
    if (i == 11) {
        basic.showIcon(IconNames.Silly)
    }
    
    if (i == 12) {
        basic.showIcon(IconNames.Fabulous)
    }
    
    if (i == 13) {
        basic.showIcon(IconNames.Meh)
    }
    
    if (i == 14) {
        basic.showIcon(IconNames.TShirt)
    }
    
    if (i == 15) {
        basic.showIcon(IconNames.Rollerskate)
    }
    
    if (i == 16) {
        basic.showIcon(IconNames.Duck)
    }
    
})
