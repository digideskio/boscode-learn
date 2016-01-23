# Arduino tasks

## Table of Content

[Installation]( #Installation )    
[01 Arduino Experimenter's Guide for NodeJS](#01-arduino-experimenters-guide-for-nodejs)  

___

## Installation

1. Download and install the arduino software https://www.arduino.cc/en/Main/Software

2. Open the Arduino IDE and select your board: Tools > Board > Arduino Genuino Uno

3. (windows) Select the port: Tools > Port. This is likely to be com3 or higher (Max Os 10) /dev/tty.usbmodem

4. Launch Arduino IDE and open the Firmata sketch via the menu: File > Examples > Firmata > StandardFirmataPlus
  * Select your Arduino board type (e.g. Arduino Uno) via Tools > Board
  * Select the port for your board via Tools > Serial Port > (the comm port of your Arduino)
  * Upload the program by selecting File > Upload  

5. Install johnny five:
  * Install Node.js https://nodejs.org/en/download/
  * OSX: Install Xcode
  * Windows: Install Python 2.7.3 https://www.python.org/
  * Install node-gyp `npm install -g node-gyp`
  * Follow Hello World steps: https://github.com/rwaldron/johnny-five/wiki/Getting-Started#hello-world

___

## 01 Arduino Experimenter's Guide for NodeJS

Complete Exercises 1-14 at http://node-ardx.org/

___


