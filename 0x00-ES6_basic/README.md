# Poject 0x00.ES6 basics

## Description
The goal of this project is to learn about the new features introduced in ES6.

## Learning Objectives
- What ES6 is
- New features introduced in ES6
- The difference between a constant and a variable
- Block-scoped variables
- Arrow functions and function parameters default to them
- Rest and spread function parameters
- String templating in ES6
- Object creation and their properties in ES6
- Iterators and for-of loops

## Tasks

1. [Const or let?](./0-constants.js)
Modify
- function taskFirst to instantiate variables using const
- function taskNext to instantiate variables using let
```export function taskFirst() {
  var task = 'I prefer const when I can.';
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  var combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
```

2. [Block Scope](./1-block-scoped.js)
Given what you’ve read about ```var``` and hoisting, modify the variables inside the function ```taskBlock``` so that the variables aren’t overwritten inside the conditional block.
```export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    var task = true;
    var task2 = false;
  }

  return [task, task2];
}
```

3. [Block Scope](./2-arrow.js)
Rewrite the following standard function to use ES6’s arrow syntax of the function add (it will be an anonymous function after)
```export default function getSanFranciscoDescription() {
  const year = 2017;
  const fear = 'love';

  return 'San Francisco is the home of JavaScript. In ${year}, they ${fear} ES6.';
}
```

4. [Arrow functions](./3-default-parameter.js)
Rewrite the following standard function to use ES6’s arrow syntax of the function ```divideBy```
```export default function divideFunction(numerator, denominator = 1) {
  return numerator / denominator;
}
```

5. [Rest parameter syntax for functions](./4-rest-parameter.js)
Modify the following function to return the number of arguments passed to it using the ```rest``` parameter syntax
```export default function returnHowManyArguments(...theArgs) {
  return theArgs.length;
}
```