# Arduino tasks

## Table of Content

[Installation](#installation)    
[01 Arduino Experimenter's Guide for NodeJS](#01-arduino-experimenters-guide-for-nodejs)  
[02 Arduino with Electron UI Getting Started](#02-arduino-with-electron-ui-getting-started)  
[03 Arduino with Electron UI Button Pressing](#03-arduino-with-electron-ui-button-pressing)  
[04 Arduino with Electron UI Twisting](#04-arduino-with-electron-ui-twisting)  


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
  * Follow the steps outlined in [Electron tasks Installation](https://github.com/Quobject/boscode-learn/blob/master/electron-tasks.md#installation)
  * Follow Hello World steps: https://github.com/rwaldron/johnny-five/wiki/Getting-Started#hello-world

___

## 01 Arduino Experimenter's Guide for NodeJS

* In terminal/powershell `cd c:\code\boscode-learn\code\arduino\01`.
* `npm install johnny-five`
* `git clone https://github.com/AnnaGerber/node-ardx.git && cd node-ardx`
* In visual studio code: File > Open Folder... `C:\code\boscode-learn\code\arduino\01\`.
* Setup circuit 1 http://node-ardx.org/exercises/1
* Run code examples from the terminal e.g. `node code/CIRC01-code-led-a-strobe.js`

Complete Exercises 1-14 at http://node-ardx.org/

___

## 02 Arduino with Electron UI Getting Started

* Setup arduino board with one LED [as described here](http://node-ardx.org/exercises/1)
* If not done already, with your Arduino software upload `File > Examples > Firmata > StandardFirmataPlus`
* In your first terminal `cd c:\code\boscode-learn\code\arduino\02`.
* `npm install`
* `npm run server`
* Open a second terminal `cd c:\code\boscode-learn\code\arduino\02`.
* `npm run client`
* In visual studio code: File > Open Folder... `c:\code\boscode-learn\code\arduino\02`.
* Inspect files:
```bash
 client
   index.html
   main.js
   program.js
 server
   index.js
```
___

## 03 Arduino with Electron UI Button Pressing

* Setup arduino board with one LED and two buttons [as described here](http://node-ardx.org/exercises/7)
* If not done already, with your Arduino software upload `File > Examples > Firmata > StandardFirmataPlus`
* In your first terminal `cd c:\code\boscode-learn\code\arduino\03`.
* `npm install`
* `npm run server`
* Open a second terminal `cd c:\code\boscode-learn\code\arduino\03`.
* `npm run client`
* In visual studio code: File > Open Folder... `c:\code\boscode-learn\code\arduino\03`.
* Inspect files:
```bash
 client
   index.html
   main.js
   program.js
 server
   index.js
```
___

## 04 Arduino with Electron UI Twisting

* Setup arduino board with one LED and one potentiometer [as described here](http://node-ardx.org/exercises/8)
* If not done already, with your Arduino software upload `File > Examples > Firmata > StandardFirmataPlus`
* In your first terminal `cd c:\code\boscode-learn\code\arduino\04`.
* `npm install`
* `npm run server`
* Open a second terminal `cd c:\code\boscode-learn\code\arduino\04`.
* `npm run client`
* In visual studio code: File > Open Folder... `c:\code\boscode-learn\code\arduino\04`.
* Inspect files:
```bash
 client
   index.html
   main.js
   program.js
 server
   index.js
```
___


