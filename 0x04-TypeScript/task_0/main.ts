interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "James",
  lastName: "Amoabeng",
  age: 23,
  location: "Ghana"
}

const student2: Student = {
  firstName: "Nhyira",
  lastName: "Ahwireng",
  age: 21,
  location: "Ghana"
}

let studentList: Student[] = Array(student1, student2)

function createStudentTable (students: Student[]): string {
  let table: string = "<table><tr><th>firstName</th><th>location</th></tr>"
  for (const student of students) {
    table += `<tr><td>${student.firstName}</td><td>${student.location}</td></tr>`
  }
  table += "</table>"
  return table
}

const table = createStudentTable(studentList)
