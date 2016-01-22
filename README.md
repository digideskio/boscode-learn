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
[18 Scope](#18-scope)  


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

The above javascript code in pseudocode (see [also](https://github.com/Quobject/boscode/blob/master/docs/pseudocode.md#binary-selection):
```
IF n > 1 THEN
  Display "the variable n is greater than 1."
ELSE
  Display "the variable n is less than or equal to 1."
ENDIF
```

#### The challenge:

1. In your cloud 9 workspace edit the file  `/home/ubuntu/workspace/code/tasks/08/app.js`.


In that file, declare a variable named `fruit`.

Make the `fruit` variable reference the value **orange** with the type of **String**.

Then use `boscode.display()` to print "**The fruit name has more than five characters."** if the length of the value of `fruit` is greater than five.
Otherwise, print "**The fruit name has five characters or less.**"

Check to see if your program is correct.

2. In your cloud 9 workspace edit the file  `/home/ubuntu/workspace/code/tasks/08/pseudocode.txt`.

In this file write your javascript solution as pseudocode.
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

#### The challenge:

In your cloud 9 workspace edit the file  `/home/ubuntu/workspace/code/tasks/09/app.js`.


In that file define a variable named `total` and make it equal the number `0`.

Define a second variable named `limit` and make it equal the number `10`.

Create a for loop with a variable `i` starting at 0 and increasing by 1 each time through the loop. The loop should run as long as `i` is less than `limit`.

On each iteration of the loop, add the number `i` to the `total` variable. To do this, you can use this statement:

```js
total += i;
```

After the for loop, use `boscode.display()` to print the `total` variable to the terminal.

Check to see if your program is correct.


___

### 10 Arrays

An array is a list of values. Here's an example:

```js
var pets = ['cat', 'dog', 'rat'];
```

##### The challenge:

In your cloud 9 workspace edit the file  `/home/ubuntu/workspace/code/tasks/10/app.js`.


In that file define a variable named `pizzaToppings` that references an array that contains three strings in this order: `tomato sauce, cheese, pepperoni`.

Use `boscode.display()` to print the `pizzaToppings` array to the terminal.

Check to see if your program is correct.


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

Array elements must be accessed through only using bracket notation.

Dot notation is invalid.

Valid notation:

```js
boscode.display(pets[0]);
```

Invalid notation:
```
boscode.display(pets.1);
```

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

Use `boscode.display()` to print the `pizza` object to the terminal.

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
function example (x) {
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
function example (firstArg, secondArg) {
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

### 18 Scope

`Scope` is the set of variables, objects, and functions you have access to.

JavaScript has two scopes: `global` and `local`. A variable that is declared outside a function definition is a `global` variable, and its value is accessible and modifiable throughout your program. A variable that is declared inside a function definition is `local`. It is created and destroyed every time the function is executed, and it cannot be accessed by any code outside the function.

Functions defined inside other functions, known as nested functions, have access to their parent function's scope. 

Pay attention to the comments in the code below:

```js
var a = 4;	// a is a global variable, it can be accessed by the functions below

function foo() {
	var b = a * 3;	// b cannot be accessed outside foo function, but can be accessed by functions
					// defined inside foo
	function bar(c) {
	var b = 2;  // another `b` variable is created inside bar function scope
				// the changes to this new `b` variable don't affect the old `b` variable
	boscode.display( a, b, c );
	}

	bar(b * 4);
}

foo(); // 4, 2, 48
```
IIFE, Immediately Invoked Function Expression, is a common pattern for creating local scopes
example:
```js
	(function(){ // the function expression is surrounded by parenthesis
		// variables defined here
		// can't be accessed outside
	})(); // the function is immediately invoked
```
#### The challenge:

In your cloud 9 workspace edit the file  `/home/ubuntu/workspace/code/tasks/18/app.js`.

In that file, copy the following code:
```js
var a = 1, b = 2, c = 3;

(function firstFunction(){
	var b = 5, c = 6;

	(function secondFunction(){
		var b = 8;
		
		(function thirdFunction(){
			var a = 7, c = 9;

			(function fourthFunction(){
				var a = 1, c = 8;

			})();
		})();
	})();
})();
```

Use your knowledge of the variables' `scope` and place the following code inside one of the functions in `scope.js`
so the output is `a: 1, b: 8,c: 6`
```js
boscode.display("a: "+a+", b: "+b+", c: "+c);
```

Check to see if your program is correct.

___