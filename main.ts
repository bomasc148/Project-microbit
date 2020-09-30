input.onButtonPressed(Button.A, function () {
    tinkercademy.crashSensorSetup(DigitalPin.P0)
    OLED.clear()
    OLED.writeStringNewLine("    Moisture value")
    OLED.writeStringNewLine("")
    OLED.writeNumNewLine(tinkercademy.MoistureSensor(AnalogPin.P0))
})
OLED.clear()
OLED.init(128, 64)
OLED.drawLoading(3)
OLED.drawLoading(15)
OLED.drawLoading(18)
OLED.drawLoading(23)
OLED.drawLoading(31)
OLED.drawLoading(42)
for (let index = 0; index < 4; index++) {
    OLED.drawLoading(59)
}
OLED.drawLoading(62)
OLED.drawLoading(87)
for (let index = 0; index < 30; index++) {
    OLED.drawLoading(97)
}
for (let index = 0; index < 25; index++) {
    OLED.drawLoading(98)
}
for (let index = 0; index < 20; index++) {
    OLED.drawLoading(99)
}
OLED.drawLoading(99)
OLED.drawLoading(99)
OLED.drawLoading(100)
OLED.clear()
OLED.writeStringNewLine("wellcom to microbit................................................................................................................. 100%")
