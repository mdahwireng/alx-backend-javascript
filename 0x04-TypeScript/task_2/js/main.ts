// Create the DirectorInterface interface with the 3 expected methods:
// workFromHome() returning a string
// getCoffeeBreak() returning a string
// workDirectorTasks() returning a string

interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
};

// Create the TeacherInterface interface with the 3 expected methods:
// workFromHome() returning a string
// getCoffeeBreak() returning a string
// workTeacherTasks() returning a string

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
};

// Create a class Director that will implement DirectorInterface
// workFromHome should return the string Working from home
// getToWork should return the string Getting a coffee break
// workDirectorTasks should return the string Getting to director tasks

class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  };
  getCoffeeBreak(): string {
    return "Getting a coffee break";
  };
  workDirectorTasks(): string {
    return "Getting to director tasks";
  };
}

// Create a class Teacher that will implement TeacherInterface
// workFromHome should return the string Cannot work from home
// getCoffeeBreak should return the string Cannot have a break
// workTeacherTasks should return the string Getting to work

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  };
  getCoffeeBreak(): string {
    return "Cannot have a break";
  };
  workTeacherTasks(): string {
    return "Getting to work";
  };
}

// Create a function createEmployee with the following requirements:
// It can return either a Director or a Teacher instance
// It accepts 1 arguments:
// salary(either number or string)
// if salary is a number and less than 500 - It should return a new Teacher. Otherwise it should return a Director

function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  };
}

// Create a function isDirector with the following requirements:
// It accepts 1 argument employee (Director | Teacher)
// It returns a boolean
// It returns true if the object is an instance of Director

function isDirector(employee: Director | Teacher): boolean {
  return employee instanceof Director;
}

// Create a function executeWork with the following requirements:
// It accepts 1 argument employee (Director | Teacher)
// It returns a string
// If the employee is an instance of Director, the function should call the workDirectorTasks method
// If the employee is an instance of Teacher, the function should call the workTeacherTasks method

function executeWork(employee: Director | Teacher): string {
  if (employee instanceof Director) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  };
}

// Write a String literal type named Subjects allowing a variable to have the value Math or History only. Write a function named teachClass
// it takes todayClass as an argument
// it will return the string Teaching Math if todayClass is Math
// it will return the string Teaching History if todayClass is History

type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  } else {
    return "Teaching History";
  };
}
