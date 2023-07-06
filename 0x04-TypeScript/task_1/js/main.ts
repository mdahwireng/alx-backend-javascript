// firstName(string) and lastName(string). These two attributes should only be modifiable when a Teacher is first initialized
// fullTimeEmployee(boolean) this attribute should always be defined
// yearsOfExperience(number) this attribute should always be defined
// location(string) this attribute should always be defined
// Add the possibility to add any attribute to the Object like contract(boolean) without specifying the name of the attribute

interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
};

const teacher3: Teacher = {
  firstName: "James",
  lastName: "Amoabeng",
  fullTimeEmployee: true,
  location: "Ghana",
  contract: true
};

console.log(teacher3);

// Write an interface named Directors that extends Teacher. It requires an attribute named numberOfReports(number)

interface Directors extends Teacher {
  numberOfReports: number;
};

const director1: Directors = {
  firstName: "James",
  lastName: "Amoabeng",
  fullTimeEmployee: true,
  location: "Ghana",
  numberOfReports: 10
};

console.log(director1);

// Write a function named printTeacherFunction. 
// It accepts two arguments firstName and lastName
// It returns a string with the format “firstName lastName”

function printTeacherFunction(firstName: string, lastName: string): string {
  return `${firstName} ${lastName}`;
}

console.log(printTeacherFunction("James", "Amoabeng"));

// Write a class named StudentClass.
// It accepts two arguments firstName(string) and lastName(string). These two attributes should only be modifiable when a StudentClass is first initialized
// It includes a method named workOnHomework. It accepts no arguments and returns void. When invoked, it prints out “Currently working”
// It includes a method named displayName. It returns firstName of the student
// The constructor class should be described through an Interface
// The class should be described through an Interface

interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
};

class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  };
  workOnHomework(): string {
    return "Currently working";
  };
  displayName(): string {
    return this.firstName;
  };
}

const studentClass1 = new StudentClass("James", "Amoabeng");
console.log(studentClass1);
