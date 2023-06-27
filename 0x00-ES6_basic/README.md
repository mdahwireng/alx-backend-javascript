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
