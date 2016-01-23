Learn pseudocode with javascript compliant with Board of studies, New South Wales, Australia, Software Design and Development Stage 6, Software and Course Specifications Higher School Certificiate 2012


[![NPM](https://nodei.co/npm/boscode-learn.png?downloads=true&downloadRank=true)](https://nodei.co/npm/boscode-learn/)
[![NPM](https://nodei.co/npm-dl/boscode-learn.png?months=6&height=3)](https://nodei.co/npm/boscode-learn/)

## Table of Content
[Installation](#installation)  
[Useful bash terminal commands](#useful-bash-terminal-commands)  

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

*Tasks*  
[01 Variables](#01-variables)  
[02 Strings](#02-strings)  
[03 String length](#03-string-length)  
[04 Revising strings](#04-revising-strings)  
[05 Numbers](#05-numbers)  
[06 Rounding numbers](#06-rounding-numbers)  
[07 Number to string](#07-number-to-string)  
[08 If statement](#08-if-statement)  
[09 For loop](#09-for-loop)  
[10 Arrays](#10-arrays)  
[11 Array filtering](#11-array-filtering)  
[12 Accessing array values](#12-accessing-array-values)  
[13 Looping through arrays](#13-looping-through-arrays)  
[14 Objects](#14-objects)  
[15 Object properties](#15-object-properties)  
[16 Functions](#16-functions)  
[17 Function arguments](#17-function-arguments)  

*Codecademy Tasks*  
[codecademy tasks](codecademy-tasks.md)

*Arduino Tasks*  
[arduino tasks](arduino-tasks.md)

## Installation

1. Create a github account: https://github.com/. Use your school email address and set username to stlukes-{first part of school email}. Sign into github.
2. In google chrome open cloud 9 https://c9.io/ and choose sign in with your github account.
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
```bash
{yourname}:~/workspace (master) $ pwd
/home/ubuntu/workspace
```
print working directory

* `ll`:
```bash
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
```bash
{yourname}:~/workspace (master) $ cd code
{yourname}:~/workspace/code (master) $ 
```
change directory

## Example code

### 01 Console output: Display
1. Open your cloud 9 workspace (see above). In the file tree open the folder: `~/workspace/code/examples/01`
2. Double click the file `app.js` inside this folder. Observe the code:

```js    
var boscode = require('boscode');

boscode.display('Hello world');

boscode.display('The answer is ', 4, 'km');
```
3. Double click the file `app.js` and choose `Open Terminal Here`.
4. Type `ll` to see the content of the current directory:
```js
{yourname}:~/workspace/code/examples/01 (master) $ ll
total 12
drwxr-xr-x  2 ubuntu ubuntu 4096 Jan 21 01:56 ./
drwxr-xr-x 11 ubuntu ubuntu 4096 Jan 21 01:56 ../
-rw-r--r--  1 ubuntu ubuntu  115 Jan 21 01:56 app.js
```
5. Type `node app.js` to run this code:
```bash
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

###### NOTE 

A variable is **declared** using `var` and uses the equals sign to **define** the value that it references. This is colloquially known as "Making a variable equal a value".

###### The challenge:


In your cloud 9 workspace edit the file  `/home/ubuntu/workspace/code/tasks/01/app.js`.

In that file declare a variable named `example`.

Make the variable `example` equal to the value `'some string'`.

Then use `boscode.display()` to print the `example` variable to the console.

Check to see if your program is correct.


___

### 02 Strings

A **string** is any value surrounded by quotes.

It can be single or double quotes:

```js
'this is a string'

"this is also a string"
```

###### NOTE

Try to stay consistent. In this workshop we'll only use single quotes.

###### The challenge:

In your cloud 9 workspace edit the file  `/home/ubuntu/workspace/code/tasks/02/app.js`.

In that file declare a variable named `someString`:

```js
var someString = 'this is a string';
```

Use `boscode.display()` to print the variable **someString** to the terminal.

Check to see if your program is correct.



___

### 03 String length

You will often need to know how many characters are in a string.

For this you will use the `.length` property. Here's an example:

```js
var example = 'example string';
example.length
```

#### NOTE

Make sure there is a period between `example` and `length`.

The above code will return a **number** for the total number of characters in the string.


#### The challenge:

In your cloud 9 workspace edit the file  `/home/ubuntu/workspace/code/tasks/03/app.js`.

In that file, create a variable named `example`.

**Assign the string `'example string'` to the variable `example`.**

Use `boscode.display()` to print the **length** of the string to the terminal.

Check to see if your program is correct.



___


### 04 Revising strings

You will often need to change the contents of a string.

Strings have built-in functionality that allow you to inspect and manipulate their contents.

Here is an example using the `.replace()` method:

```js
var example = 'this example exists';
example = example.replace('exists', 'is awesome');
boscode.display(example);
```

Note that to change the value that the `example` variable references, we need  
to use the equals sign again, this time with the `example.replace()` method to  
the right of the equals sign.

#### The challenge:

In your cloud 9 workspace edit the file  `/home/ubuntu/workspace/code/tasks/04/app.js`.

Define a variable named `pizza` that references this string: `'pizza is alright'`

Use the `.replace()` method to change `alright` to `wonderful`.

Use `boscode.display()` to print the results of the `.replace()` method to the terminal.

Check to see if your program is correct.



___


### 05 Numbers

Numbers can be integers, like `2`, `14`, or `4353`, or they can be decimals,  
also known as floats, like `3.14`, `1.5`, or `100.7893423`.
Unlike Strings, Numbers do not need to have quotes.

#### The challenge:

In your cloud 9 workspace edit the file  `/home/ubuntu/workspace/code/tasks/05/app.js`.


In that file define a variable named `example` that references the integer `123456789`.

Use `boscode.display()` to print that number to the terminal.

Check to see if your program is correct.



___
### 06 Rounding numbers

We can do basic math using familiar operators like `+`, `-`, `*`, `/`, and `%`.

For more complex math, we can use the `Math` object.

In this challenge we'll use the `Math` object to round numbers.

#### The challenge:

In your cloud 9 workspace edit the file  `/home/ubuntu/workspace/code/tasks/06/app.js`.


In that file define a variable named `roundUp` that references the float `1.5`.

We will use the `Math.round()` method to round the number up. This method rounds either up or down to the nearest integer.

An example of using `Math.round()`:

```js
Math.round(0.5);
```

Define a second variable named `rounded` that references the output of the `Math.round()` method, passing in the `roundUp` variable as the argument.

Use `boscode.display()` to print that number to the terminal.

Check to see if your program is correct.



___

### 07 Number to string

Sometimes you will need to turn a number into a string.

In those instances you will use the `.toString()` method. Here's an example:

```js
var n = 256;
n = n.toString();
```

#### The challenge:

In your cloud 9 workspace edit the file  `/home/ubuntu/workspace/code/tasks/07/app.js`.


In that file define a variable named `n` that references the number `128`;

Call the `.toString()` method on the `n` variable.

Use `boscode.display()` to print the results of the `.toString()` method to the terminal.

Check to see if your program is correct.


___

### 08 If statement

Conditional statements are used to alter the control flow of a program, based on a specified boolean condition.

A conditional statement looks like this:

```js
if (n > 1) {
  boscode.display('the variable n is greater than 1.');
} else {
  boscode.display('the variable n is less than or equal to 1.');
}
```

Inside parentheses you must enter a logic statement, meaning that the result of the statement is either true or false. 

The else block is optional and contains the code that will be executed if the statement is false.

The above javascript code in pseudocode (see [also](https://github.com/Quobject/boscode/blob/master/docs/pseudocode.md#binary-selection)):
```
IF n > 1 THEN
  Display "the variable n is greater than 1."
ELSE
  Display "the variable n is less than or equal to 1."
ENDIF
```

#### The challenge:

1) In your cloud 9 workspace edit the file  `/home/ubuntu/workspace/code/tasks/08/app.js`.


In that file, declare a variable named `fruit`.

Make the `fruit` variable reference the value **orange** with the type of **String**.

Then use `boscode.display()` to print "**The fruit name has more than five characters."** if the length of the value of `fruit` is greater than five.
Otherwise, print "**The fruit name has five characters or less.**"

Check to see if your program is correct.

2) In your cloud 9 workspace edit the file  `/home/ubuntu/workspace/code/tasks/08/pseudocode.txt`.

In this file write your javascript solution as pseudocode. 
Note: Assume LENGTH( varName ) exists that returns the number of characters of a string variable.
___

### 09 For loop

For loops allow you to repeatedly run a block of code a certain number of times. This for loop logs to the console ten times:

```js
for (var i = 0; i < 10; i++) {
  // log the numbers 0 through 9
  boscode.display(i)
}
```

The first part, `var i = 0`, is run once at the beginning of the loop. The variable `i` is used to track how many times the loop has run.

The second part, `i < 10`, is checked at the beginning of every loop iteration before running the code inside the loop. If the statement is true, the code inside the loop is executed. If it is false, then the loop is complete. The statement `i < 10;` indicates that the loop will continue as long as `i` is less than `10`.

The final part, `i++`, is executed at the end of every loop. This increases the variable `i` by 1 after each loop. Once `i` reaches `10`, the loop will exit.

The above javascript code in pseudocode (see [also](https://github.com/Quobject/boscode/blob/master/docs/pseudocode.md#fornext-or-counted-loop)):
```
FOR i = 1 TO 9 STEP 1
  Display i 
NEXT i
```

#### The challenge:

1) In your cloud 9 workspace edit the file  `/home/ubuntu/workspace/code/tasks/09/app.js`.

In that file define a variable named `total` and make it equal the number `0`.

Define a second variable named `limit` and make it equal the number `10`.

Create a for loop with a variable `i` starting at 0 and increasing by 1 each time through the loop. The loop should run as long as `i` is less than `limit`.

On each iteration of the loop, add the number `i` to the `total` variable. To do this, you can use this statement (equivalent to total = total + i):

```js
total += i;
```

After the for loop, use `boscode.display()` to print the `total` variable to the terminal.

Check to see if your program is correct.

2) In your cloud 9 workspace edit the file  `/home/ubuntu/workspace/code/tasks/09/pseudocode.txt`.

In this file write your javascript solution as pseudocode. 

___

### 10 Arrays

An array is a list of values. Here's an example:

```js
var pets = ['cat', 'dog', 'rat'];

//or

var pets = [];

pets[0] = 'cat';
pets[1] = 'dog';
pets[2] = 'rat';

```

The above javascript code in pseudocode (see [also](https://github.com/Quobject/boscode/blob/master/docs/pseudocode.md#print-array-contents)):
```
pets(0) = "cat"
pets(1) = "dog"
pets(2) = "rat"

```

##### The challenge:

1) In your cloud 9 workspace edit the file  `/home/ubuntu/workspace/code/tasks/10/app.js`.


In that file define a variable named `pizzaToppings` that references an array that contains three strings in this order: `tomato sauce, cheese, pepperoni`.

Use `boscode.display()` to print the `pizzaToppings` array to the terminal.

Check to see if your program is correct.

2) In your cloud 9 workspace edit the file  `/home/ubuntu/workspace/code/tasks/10/pseudocode.txt`.

In this file write your javascript solution as pseudocode. 

___

### 11 Array filtering

There are many ways to manipulate arrays.

One common task is filtering arrays to only contain certain values.

For this we can use the `.filter()` method.

Here is an example:

```js
var pets = ['cat', 'dog', 'elephant'];

var filtered = pets.filter(function (pet) {
  return (pet !== 'elephant');
});
```

The `filtered` variable will now only contain `cat` and `dog`.

!== is a comparison operator (see [w3schools](http://www.w3schools.com/js/js_comparisons.asp)).

#### The challenge:

In your cloud 9 workspace edit the file  `/home/ubuntu/workspace/code/tasks/11/app.js`.


In that file, define a variable named `numbers` that references this array:

```js
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
```

Like above, define a variable named `filtered` that references the result of `numbers.filter()`.

The function that you pass to the `.filter()` method will look something like this:

```js
function evenNumbers (number) {
  return number % 2 === 0;
}
```

Use `boscode.display()` to print the `filtered` array to the terminal.

Check to see if your program is correct.
___

### 12 Accessing array values

Array elements can be accessed through index number.

Index number starts from zero to array's property length minus one.

Here is an example:


```js
var pets = ['cat', 'dog', 'rat'];

boscode.display(pets[0]);
```

The above code will print the first element of `pets` array - string `cat`.

#### The challenge:

In your cloud 9 workspace edit the file  `/home/ubuntu/workspace/code/tasks/12/app.js`.


In that file, define array `food` :
```js
var food = ['apple', 'pizza', 'pear'];
```


Use `boscode.display()` to print the `second` value of array to the terminal.

Check to see if your program is correct.


___

### 13 Looping through arrays

For this challenge we will use a **for loop** to access and manipulate a list of values in an array.

Accessing array values can be done using an integer.

Each item in an array is identified by a number, starting at `0`.

So in this array `hi` is identified by the number `1`:

```js
var greetings = ['hello', 'hi', 'good morning'];
```

It can be accessed like this:

```js
greetings[1];
```

So inside a **for loop** we would use the `i` variable inside the square brackets instead of directly using an integer.

#### The challenge:

In your cloud 9 workspace edit the file  `/home/ubuntu/workspace/code/tasks/13/app.js`.

In that file, define a variable named `pets` that references this array:

```js
['cat', 'dog', 'rat'];
```

Create a for loop that changes each string in the array so that they are plural.

You will use a statement like this inside the for loop:

```js
pets[i] = pets[i] + 's';
```

After the for loop, use `boscode.display()` to print the `pets` array to the terminal.

Check to see if your program is correct.

___

### 14 Objects

Objects are lists of values similar to arrays, except values are identified by keys instead of integers.

Here is an example:

```js
var foodPreferences = {
  pizza: 'yum',
  salad: 'gross'
};
```

#### The challenge:

In your cloud 9 workspace edit the file  `/home/ubuntu/workspace/code/tasks/14/app.js`.

In that file, define a variable named `pizza` like this:

```js
var pizza = {
  toppings: ['cheese', 'sauce', 'pepperoni'],
  crust: 'deep dish',
  serves: 2
};
```

Use `boscode.display(pizza)` to print the `pizza` object to the terminal.

Check to see if your program is correct.


___

### 15 Object properties

You can access and manipulate object properties –– the keys and values that an object contains –– using a method very similar to arrays.

Here's an example using **square brackets**:

```js
var example = {
  pizza: 'yummy'
};

boscode.display(example['pizza']);
```

The above code will print the string `'yummy'` to the terminal.

Alternately, you can use **dot notation** to get identical results:

```js
example.pizza;

example['pizza'];
```

The two lines of code above will both return `yummy`.

#### The challenge:

In your cloud 9 workspace edit the file  `/home/ubuntu/workspace/code/tasks/15/app.js`.

In that file, define a variable named `food` like this:

```js
var food = {
  types: 'only pizza'
};
```

Use `boscode.display()` to print the `types` property of the `food` object to the terminal.

Check to see if your program is correct.

___



### 16 Functions

A function is a block of code that takes input, processes that input, and then produces output.

Here is an example:

```js
var example = function (x) {
  return x * 2;
}
```

We can **call** that function like this to get the number 10:

```js
example(5)
```

The above example assumes that the `example` function will take a number as an argument –– as input –– and will return that number multiplied by 2.

#### The challenge:

In your cloud 9 workspace edit the file  `/home/ubuntu/workspace/code/tasks/16/app.js`.

In that file, define a function named `eat` that takes an argument named `food`  
that is expected to be a string.

Inside the function return the `food` argument like this:

```js
return food + ' tasted really good.';
```

Inside of the parentheses of `boscode.display()`, call the `eat()` function with the string `bananas` as the argument.

Check to see if your program is correct.


___

### 17 Function arguments

A function can be declared to receive any number of arguments. Arguments can be from any type. An argument could be a string, a number, an array, an object and even another function.

Here is an example:

```js
var example = function (firstArg, secondArg) {
  boscode.display(firstArg, secondArg);
}
```

We can **call** that function with two arguments like this:

```js
example('hello', 'world');
```

The above example will print to the terminal `hello world`.

#### The challenge:

In your cloud 9 workspace edit the file  `/home/ubuntu/workspace/code/tasks/17/app.js`.

In that file, define a function named `math` that takes three arguments. It's important for you to understand that arguments names are only used to reference them.

Name each argument as you like.

Within the `math` function, return the value obtained from multiplying the second and third arguments and adding that result to the first argument.

After that, inside the parentheses of `boscode.display()`, call the `math()` function with the number `53` as first argument, the number `61` as second and the number `67` as third argument.

Check to see if your program is correct.

___




























### 18 Sum

1. In your cloud 9 workspace edit the file `/home/ubuntu/workspace/code/tasks/18/app.js`. In that file, write a program that reads in two numbers from the console and adds them up. Print the result to the console.

2) In your cloud 9 workspace edit the file `/home/ubuntu/workspace/code/tasks/18/pseudocode.txt`. In this file write your javascript solution as pseudocode. 
___


### 19 Highindex

1. Review https://github.com/Quobject/boscode-learn#10-arrays.

2. In your cloud 9 workspace edit the file `/home/ubuntu/workspace/code/tasks/19/app.js`. Create a js function that takes `highIndex` as input parameter and creates an array of integers 0 - highIndex that has every value set to its index. Call the function and display the result to the console.

3. In your cloud 9 workspace edit the file `/home/ubuntu/workspace/code/tasks/19/pseudocode.txt`. In this file write your javascript solution as pseudocode. 

___


### 20 Binary sum

1. Review: https://github.com/Quobject/boscode#printing-the-contents-of-a-file-using-eof-end-of-file

2. In your cloud 9 workspace edit the file `/home/ubuntu/workspace/code/tasks/20/app.js`. In this file write a program that reads a text file containing strings made up of zeroes and ones and outputs to the console. The program counts the number of ones per line and outputs the input ` - ` result.

Hint: You might find the JavaScript String split() Method http://www.w3schools.com/jsref/jsref_split.asp useful.

Example:

| Input         | Output        | 
|---------------|---------------| 
| 0011          | 0011 - 2      | 
| 0101010       | 0101010 - 3   | 
| 01            | 01 - 1        | 
| 00000000      | 00000000 - 0  | 
| 1111          | 1111 - 4      |

 ___


### 21 Integer addition

The parseInt() function parses a string and returns an integer http://www.w3schools.com/jsref/jsref_parseint.asp.

1. Review the JavaScript String split() Method http://www.w3schools.com/jsref/jsref_split.asp.

2. In your cloud 9 workspace edit the file `/home/ubuntu/workspace/code/tasks/21/app.js`. Write a program that reads a text file containing lines of two numbers and a plus character in the middle. The program should add the two numbers (as integers not strings) and print the input, `=` and the result to the console.

Example:

| Input         | Output        | 
|---------------|---------------| 
| 1+1           | 1+1=2         | 
| 99+2          | 99+2=101      | 
| 1000+0        | 1000+0=1000   | 


___


### 22 Comparing strings

1. JavaScript Comparison and Logical Operators: read through the information provided at http://www.w3schools.com/js/js_comparisons.asp, especially `Comparing Different Types`.


2. In your cloud 9 workspace edit the file `/home/ubuntu/workspace/code/tasks/22/app.js`. In that file write a program that reads in two strings from the console and prints out the string that is alphabetically higher (e.g. B is higher than A)

Example:
<table>
  <tr>
    <th>Input</th>
    <th>Output</th>
  </tr>
  <tr>
    <td>abc</br>def</td>
    <td>def</td>
  </tr>
  <tr>
    <td>A</br>a</td>
    <td>a</td>
  </tr>
  <tr>
    <td>node</br>javascript</td>
    <td>node</td>
  </tr>
</table>

3. In your cloud 9 workspace edit the file `/home/ubuntu/workspace/code/tasks/22/pseudocode.txt`. In this file write your javascript solution as pseudocode. 

___


### 23 Digit sum

1. Review the JavaScript String split() Method http://www.w3schools.com/jsref/jsref_split.asp and also `parseInt` http://www.w3schools.com/jsref/jsref_parseint.asp

2. In your cloud 9 workspace edit the file `/home/ubuntu/workspace/code/tasks/23/app.js`. In that file write a program that reads a text file containing lines of digits. For each line the program should add up all digits and show the result to the console.

Example:
<table>
  <tr>
    <th>Input</th>
    <th>Output</th>
  </tr>
  <tr>
    <td>11</td>
    <td>2</td>
  </tr>
  <tr>
    <td>10000</td>
    <td>1</td>
  </tr>
  <tr>
    <td>123</td>
    <td>6</td>
  </tr>
</table>

___


### 24 Highest digit

1. Review [Find maximum value in an array](https://github.com/Quobject/boscode/blob/master/docs/pseudocode.md#find-maximum-value-in-an-array).

2. In your cloud 9 workspace edit the file `/home/ubuntu/workspace/code/tasks/24/app.js`. In that file write a program that reads in a line of digits from the console. The program should print out the highest digit to the console.

Example:
<table>
  <tr>
    <th>Input</th>
    <th>Output</th>
  </tr>
  <tr>
    <td>0000</td>
    <td>0</td>
  </tr>
  <tr>
    <td>10000</td>
    <td>1</td>
  </tr>
  <tr>
    <td>1230</td>
    <td>3</td>
  </tr>
  <tr>
    <td>43216</td>
    <td>6</td>
  </tr>
</table>



___


### 25 Test length

1. In your cloud 9 workspace edit the file `/home/ubuntu/workspace/code/tasks/25/app.js`. In that file write a program that reads in a two lines from the console. The first input should be an integer indicating a length `l`. The second input should be a word. If the length of the word is less or equal to `l` then the output should be `OK`. If the length of the word is greater than `l` then the output should be `TOO LONG`.

2) In your cloud 9 workspace edit the file `/home/ubuntu/workspace/code/tasks/25/pseudocode.txt`. In this file write your javascript solution as pseudocode. 

Example:
<table>
  <tr>
    <th>Input</th>
    <th>Output</th>
  </tr>
  <tr>
    <td>5<br>cat</td>
    <td>OK</td>
  </tr>
  <tr>
    <td>5<br>kangaroo</td>
    <td>TOO LONG</td>
  </tr>
</table>
___


### 26 How many e's

1. Review the JavaScript String substring() Method: http://www.w3schools.com/jsref/jsref_substring.asp

2. In your cloud 9 workspace edit the file `/home/ubuntu/workspace/code/tasks/26/app.js`. In that file write a program that reads in words from a text file, one word per line. If the word contains the letter `a`, the first part of the output should be `a-yes` otherwise is should be `a-no`. The second part of the output should count how many times the letter `e` occurs. Every word has only lowercase letters.

Example:
<table>
  <tr>
    <th>Input</th>
    <th>Output</th>
  </tr>
  <tr>
    <td>text<br>many<br>reads<br>weather</td>
    <td>a-no e-1<br>a-yes e-0<br>a-yes e-1<br>a-yes e-2</td>
  </tr>
</table>

___


### 27 Camel case

CamelCase (also camel caps or medial capitals) is the practice of writing compound words or phrases such that each word or abbreviation begins with a capital letter. Camel case may start with a capital or, especially in programming languages, with a lowercase letter.

In your cloud 9 workspace edit the file `/home/ubuntu/workspace/code/tasks/27/app.js`. In the file write a program that converts strings to camel case. Read in rows of words from a text file. Each row convert to camel case and print to the console.

Example:
<table>
  <tr>
    <th>Input</th>
    <th>Output</th>
  </tr>
  <tr>
    <td>Foo Bar</td>
    <td>fooBar</td>
  </tr>
  <tr>
    <td>convert to camel case</td>
    <td>convertToCamelCase</td>
  </tr>
</table>
 
 
___


### 28 Valid 24 hours

In your cloud 9 workspace edit the file `/home/ubuntu/workspace/code/tasks/28/app.js`. The 24-hour system of time uses four digits to represent a time to the nearest minute between midnight (0000) and one minute to midnight on the same day (2359). Write a program that reads 4-digit numbers from a text file and checks if the number is a valid time. The output should be to the console.

Example:
<table>
  <tr>
    <th>Input</th>
    <th>Output</th>
  </tr>
  <tr>
    <td>0509</td>
    <td>Valid time</td>
  </tr>
  <tr>
    <td>0661</td>
    <td>Invalid time</td>
  </tr>
  <tr>
    <td>2609</td>
    <td>Invalid time</td>
  </tr>
  <tr>
    <td>1125</td>
    <td>Valid time</td>
  </tr>
</table>

___


### 29 AM & PM

In your cloud 9 workspace edit the file `/home/ubuntu/workspace/code/tasks/29/app.js`. The 24-hour system of time uses four digits to represent a time to the nearest minute between midnight (0000) and one minute to midnight on the same day (2359). Write a program that reads 4-digit numbers from a text file and checks if the time is before or after noon. Print AM or PM to the console.

Example:
<table>
  <tr>
    <th>Input</th>
    <th>Output</th>
  </tr>
  <tr>
    <td>0509</td>
    <td>AM</td>
  </tr>
  <tr>
    <td>0621</td>
    <td>AM</td>
  </tr>
  <tr>
    <td>2309</td>
    <td>PM</td>
  </tr>
  <tr>
    <td>1259</td>
    <td>AM</td>
  </tr>
  <tr>
    <td>1300</td>
    <td>PM</td>
  </tr>
</table>



___


### 30 Word index

In your cloud 9 workspace edit the file `/home/ubuntu/workspace/code/tasks/30/app.js`. In that file write a program that generates a simple index from a list of words from a text file, one per line. The index shows each word and the position of the word in the list, counting from 1. Print the index to the console.

Example:
<table>
	<tr>
	<th>Input</th>
	<th>Output</th>
	</tr>
<tr><td><pre>Time<br>
flies<br>
like<br>
an<br>
arrow<br>
but<br>
fruit<br>
flies<br>
like<br>
a<br>
banana<br>
Groucho<br>
Marx<br>
</pre></td
><td><pre>
Time 1<br>
flies 2<br>
like 3<br>
an 4<br>
arrow 5<br>
but 6<br>
fruit 7<br>
flies 8<br>
like 9<br>
a 10<br>
banana 11<br>
Groucho 12<br>
Marx 13<br>
</pre></td></tr> 


___

### 31 Sorted index

1. Review [array sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort).

2. Same task as task 30 Word index i.e. write a program that generates a simple index from a list of words from a text file, one per line. The index shows each word and the position of the word in the list, counting from 1. 

3. In your cloud 9 workspace edit the file `/home/ubuntu/workspace/code/tasks/31/app.js`. New in this task: the index should be sorted by word (case-insensitive).
 
Example:
<table>
	<tr>
	<th>Input</th>
	<th>Output</th>
	</tr>
<tr><td><pre>Time<br>
flies<br>
like<br>
an<br>
arrow<br>
but<br>
fruit<br>
flies<br>
like<br>
a<br>
banana<br>
Groucho<br>
Marx<br>
</pre></td><td><pre>
a 10<br>
an 4<br>
arrow 5<br>
banana 11<br>
but 6<br>
flies 2<br>
flies 8<br>
fruit 7<br>
Groucho 12<br>
like 3<br>
like 9<br>
Marx 13<br>
Time 1<br>
</pre></td></tr>

</table> 


___


### 32  Formatted index

1. Same task as task 31 Sorted index i.e. write a program that generates a simple index from a list of words from a text file, one per line. The index shows each word and the position of the word in the list, counting from 1. The index should be sorted by word (case-insensitive).

2. In your cloud 9 workspace edit the file `/home/ubuntu/workspace/code/tasks/31/app.js`. New in this task: It must be formatted so the word and the position are separated by dots and the last character of the position number is in a fixed column.

Example:
<table>
	<tr>
	<th>Input</th>
	<th>Output</th>
	</tr>
<tr><td><pre>Time<br>
flies<br>
like<br>
an<br>
arrow<br>
but<br>
fruit<br>
flies<br>
like<br>
a<br>
banana<br>
Groucho<br>
Marx<br>
</pre></td><td><pre>
a............10<br>
an............4<br>
arrow.........5<br>
banana.......11<br>
but...........6<br>
flies.........2<br>
flies.........8<br>
fruit.........7<br>
Groucho......12<br>
like..........3<br>
like..........9<br>
Marx.........13<br>
Time..........1<br>
</pre></td></tr>

___


### 33 Length conversion

In your cloud 9 workspace edit the file `/home/ubuntu/workspace/code/tasks/33/app.js`. In that file write a program that converts distances given in km, mm or cm into m. The program should read from the console and output to the console and stop if -1 is the input:

Example:
<table>
  <tr>
    <th>Input</th>
    <th>Output</th>
  </tr>
<tr><td><pre>1m</pre></td><td><pre>1m</pre></td></tr>
<tr><td><pre>1km</pre></td><td><pre>1000m</pre></td></tr>
<tr><td><pre>34cm</pre></td><td><pre>0.34m</pre></td></tr>
<tr><td><pre>900mm</pre></td><td><pre>0.9m</pre></td></tr>
<tr><td><pre>33km</pre></td><td><pre>33000m</pre></td></tr> 
<tr><td><pre>-1</pre></td></tr> 
</table> 

___

