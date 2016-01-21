Learn pseudocode with javascript compliant with Board of studies, New South Wales, Australia, Software Design and Development Stage 6, Software and Course Specifications Higher School Certificiate 2012


[![NPM](https://nodei.co/npm/boscode-learn.png?downloads=true&downloadRank=true)](https://nodei.co/npm/boscode-learn/)
[![NPM](https://nodei.co/npm-dl/boscode-learn.png?months=6&height=3)](https://nodei.co/npm/boscode-learn/)

## Table of Content
[Installation](#installation)  
[Useful bash terminal commands]  
(#useful-bash-terminal-commands)  
*Example code*  
[01 Console output: Display](#01-console-output-display)  
[02 Console input: Get](02-console-input-get)  
[03 Creating a sequential file](03-creating-a-sequential-file)  
[04 Printing the contents of a file using sentinel value](#04-printing-the-contents-of-a-file-using-sentinel-value)  
[05 Printing the contents of a file using EOF (end of file)](#05-printing-the-contents-of-a-file-using-eof-end-of-file)  
[06 Appending rows to an existing sequential file](#06-appending-rows-to-an-existing-sequential-file)  
[07 Creating a relative file](#07-creating-a-relative-file)  
[08 Reading from a relative file](#08-reading-from-a-relative-file)  
[09 Updating records in a relative file](#09-updating-records-in-a-relative-file)  

## Installation

1. Create a github account: https://github.com/
2. In google chrome open cloud 9 https://c9.io/ and sign in with your github account.
3. In c9.io: Create a new workspace: 
  * Workspace name: boscode-learn
  * Description: Learning javascript
  * Hosted workspace: Public
  * Clone from Git or Mercurial URL: `https://github.com/Quobject/boscode-learn.git`
  * Choose a template: `Custom`
  * Hit 'Create workspace' button
4. Inside your workspace on the left side right click the folder name 'boscode-learn' and select 'Open Terminal Here'
5. In your terminal type the commant `npm install`

## Useful bash terminal commands

* `pwd`: 
```
{yourname}:~/workspace (master) $ pwd
/home/ubuntu/workspace
```
print working directory

* `ll`:
```
{yourname}:~/workspace (master) $ ll
total 64
drwxr-xr-x  7 ubuntu ubuntu 4096 Jan 21 01:57 ./
drwxr-xr-x 21 ubuntu ubuntu 4096 Jan 21 01:57 ../
drwxr-xr-x  3 ubuntu ubuntu 4096 Jan 21 01:56 .c9/
-rw-r--r--  1 ubuntu ubuntu  208 Jan 21 01:56 .editorconfig
drwxr-xr-x  8 ubuntu ubuntu 4096 Jan 21 01:56 .git/
-rw-r--r--  1 ubuntu ubuntu 4290 Jan 21 01:56 .gitignore
-rw-r--r--  1 ubuntu ubuntu  249 Jan 21 01:56 .jshintrc
drwxr-xr-x  4 ubuntu ubuntu 4096 Jan 21 01:56 .vs/
-rw-r--r--  1 ubuntu ubuntu 1075 Jan 21 01:56 LICENSE
-rw-r--r--  1 ubuntu ubuntu 2284 Jan 21 01:56 README.md
-rw-r--r--  1 ubuntu ubuntu 3850 Jan 21 01:56 boscode-learn.njsproj
-rw-r--r--  1 ubuntu ubuntu  971 Jan 21 01:56 boscode-learn.sln
drwxr-xr-x  3 ubuntu ubuntu 4096 Jan 21 01:56 code/
drwxr-xr-x  3 ubuntu ubuntu 4096 Jan 21 01:57 node_modules/
-rw-r--r--  1 ubuntu ubuntu  621 Jan 21 01:56 package.json
```
list files

* `cd`:
```
{yourname}:~/workspace (master) $ cd code
{yourname}:~/workspace/code (master) $ 
```

## Example code

### 01 Console output: Display
1. Open your cloud 9 workspace (see above). In the file tree open the folder: `~/workspace/code/examples/01`
2. Double click the file `app.js` inside this folder. Observe the code:

```    
var boscode = require('boscode');

boscode.display('Hello world');

boscode.display('The answer is ', 4, 'km');
```
3. Double click the file `app.js` and choose `Open Terminal Here`.
4. Type `ll` to see the content of the current directory:
```
{yourname}:~/workspace/code/examples/01 (master) $ ll
total 12
drwxr-xr-x  2 ubuntu ubuntu 4096 Jan 21 01:56 ./
drwxr-xr-x 11 ubuntu ubuntu 4096 Jan 21 01:56 ../
-rw-r--r--  1 ubuntu ubuntu  115 Jan 21 01:56 app.js
```
5. Type `node app.js` to run this code:
```
{yourname}:~/workspace/code/examples/01 (master) $ node app.js 
Hello world
The answer is 4km
```
6. Follow similar procedure to see/run the other code examples.

See also: https://github.com/Quobject/boscode#display


### 02 Console input: Get
In your cloud 9 workspace run the file 
[app.js](https://github.com/Quobject/boscode-learn/blob/master/code/examples/02/app.js) `code/examples/02/app.js`. 

See also: https://github.com/Quobject/boscode#get

### 03 Creating a sequential file
In your cloud 9 workspace run the file  
[app.js](https://github.com/Quobject/boscode-learn/blob/master/code/examples/03/app.js) `code/examples/03/app.js`.

See also: https://github.com/Quobject/boscode#creating-a-sequential-file


### 04 Printing the contents of a file using sentinel value
In your cloud 9 workspace run the file  
[app.js](https://github.com/Quobject/boscode-learn/blob/master/code/examples/04/app.js) `code/examples/04/app.js`.

See also: https://github.com/Quobject/boscode#printing-the-contents-of-a-file-using-sentinel-value


### 05 Printing the contents of a file using EOF (end of file)
In your cloud 9 workspace run the file  
[app.js](https://github.com/Quobject/boscode-learn/blob/master/code/examples/05/app.js) `code/examples/05/app.js`.

See also: https://github.com/Quobject/boscode#printing-the-contents-of-a-file-using-eof-end-of-file


### 06 Appending rows to an existing sequential file
In your cloud 9 workspace run the file  
[app.js](https://github.com/Quobject/boscode-learn/blob/master/code/examples/06/app.js) `code/examples/06/app.js`.

See also: https://github.com/Quobject/boscode#appending-rows-to-an-existing-sequential-file


### 07 Creating a relative file
In your cloud 9 workspace run the file  
[app.js](https://github.com/Quobject/boscode-learn/blob/master/code/examples/07/app.js) `code/examples/07/app.js`.

See also: https://github.com/Quobject/boscode#creating-a-relative-file


### 08 Reading from a relative file
In your cloud 9 workspace run the file  
[app.js](https://github.com/Quobject/boscode-learn/blob/master/code/examples/08/app.js) `code/examples/08/app.js`.

See also: https://github.com/Quobject/boscode#reading-from-a-relative-file


### 09 Updating records in a relative file
In your cloud 9 workspace run the file  
[app.js](https://github.com/Quobject/boscode-learn/blob/master/code/examples/09/app.js) `code/examples/09/app.js`.

See also: https://github.com/Quobject/boscode#updating-records-in-a-relative-file

## Tasks

### 01 Variables

A variable is a name that can reference a specific value. Variables are declared using `var` followed by the variable's name.

Here's an example:

```js
var example;
```

The above variable is **declared**, but it isn't defined (it does not yet reference a specific value).

Here's an example of defining a variable, making it reference a specific value:

```js
var example = 'some string';
```

#### NOTE 

A variable is **declared** using `var` and uses the equals sign to **define** the value that it references. This is colloquially known as "Making a variable equal a value".

#### The challenge:

Create a file named `variables.js`.

In your cloud 9 workspace edit the file  `/home/ubuntu/workspace/code/tasks/01/app.js`.

In that file declare a variable named `example`.

**Make the variable `example` equal to the value `'some string'`.**

Then use `boscode.display()` to print the `example` variable to the console.

Check to see if your program is correct.

In your cloud 9 workspace edit the file  `/home/ubuntu/workspace/code/tasks/01/pseudocode.txt`. Convert your javascript file `app.js` into the [bos pseudocode](https://github.com/Quobject/boscode/blob/master/docs/pseudocode.md) equivalent.


### 02 Strings
### 03 String length
### 04 Revising strings
### 05 Numbers
### 06 Rounding numbers
### 07 Number to string
### 08 If statement
### 09 For loop
### 10 Arrays
### 11 Array filtering
### 12 Accessing array values
### 13 Looping through arrays
### 14 Objects
### 15 Object properties
### 16 Functions
### 17 Function arguments
### 18 Scope