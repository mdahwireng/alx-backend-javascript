# Project 0x01. ES6 Promises

## Description
The goal of this project is to learn about promises in ES6.

## Learning Objectives
- Promises (how, why, and what)
- How to use the then, resolve, catch methods
- How to use every method of the Promise object
- Throw / Try
- The await operator
- How to use an async function

## Tasks

1. [ Keep every promise you make and only make promises you can keep](./0-promise.js) </br>
Return a Promise using this prototype function ```getResponseFromAPI()```
```
bob@dylan:~$ cat 0-main.js
import getResponseFromAPI from "./0-promise.js";

const response = getResponseFromAPI();
console.log(response instanceof Promise);

bob@dylan:~$ 
bob@dylan:~$ npm run dev 0-main.js 
true
bob@dylan:~$ 
```

