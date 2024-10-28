def on_received_number(receivedNumber):
    global i2
    i2 = receivedNumber
radio.on_received_number(on_received_number)

def on_button_pressed_a():
    global i
    i += 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    for index in range(2):
        radio.send_number(i)
        basic.pause(1000)
    basic.show_leds("""
        . # . # .
        # # . # #
        . . . . .
        # . . . #
        . # # # .
        """)
    basic.pause(200)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global i
    i += -1
input.on_button_pressed(Button.B, on_button_pressed_b)

i = 0
i2 = 0
radio.set_group(1)

def on_forever():
    if i2 == 1:
        basic.show_icon(IconNames.HEART)
    if i2 == 2:
        basic.show_icon(IconNames.SMALL_HEART)
    if i2 == 3:
        basic.show_icon(IconNames.YES)
    if i2 == 4:
        basic.show_icon(IconNames.NO)
    if i2 == 5:
        basic.show_icon(IconNames.HAPPY)
    if i2 == 6:
        basic.show_icon(IconNames.SAD)
    if i2 == 7:
        basic.show_icon(IconNames.CONFUSED)
    if i2 == 8:
        basic.show_icon(IconNames.ANGRY)
    if i2 == 9:
        basic.show_icon(IconNames.ASLEEP)
    if i2 == 10:
        basic.show_icon(IconNames.SURPRISED)
    if i2 == 11:
        basic.show_icon(IconNames.SILLY)
    if i2 == 12:
        basic.show_icon(IconNames.FABULOUS)
    if i2 == 13:
        basic.show_icon(IconNames.MEH)
    if i2 == 14:
        basic.show_icon(IconNames.TSHIRT)
    if i2 == 15:
        basic.show_icon(IconNames.ROLLERSKATE)
    if i2 == 16:
        basic.show_icon(IconNames.DUCK)
basic.forever(on_forever)

def on_forever2():
    if i == 1:
        basic.show_icon(IconNames.HEART)
    if i == 2:
        basic.show_icon(IconNames.SMALL_HEART)
    if i == 3:
        basic.show_icon(IconNames.YES)
    if i == 4:
        basic.show_icon(IconNames.NO)
    if i == 5:
        basic.show_icon(IconNames.HAPPY)
    if i == 6:
        basic.show_icon(IconNames.SAD)
    if i == 7:
        basic.show_icon(IconNames.CONFUSED)
    if i == 8:
        basic.show_icon(IconNames.ANGRY)
    if i == 9:
        basic.show_icon(IconNames.ASLEEP)
    if i == 10:
        basic.show_icon(IconNames.SURPRISED)
    if i == 11:
        basic.show_icon(IconNames.SILLY)
    if i == 12:
        basic.show_icon(IconNames.FABULOUS)
    if i == 13:
        basic.show_icon(IconNames.MEH)
    if i == 14:
        basic.show_icon(IconNames.TSHIRT)
    if i == 15:
        basic.show_icon(IconNames.ROLLERSKATE)
    if i == 16:
        basic.show_icon(IconNames.DUCK)
basic.forever(on_forever2)
