interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
};

var student1: Student = {
  firstName: "James",
  lastName: "Amoabeng",
  age: 23,
  location: "Ghana"
};

var student2: Student = {
  firstName: "Nhyira",
  lastName: "Ahwireng",
  age: 21,
  location: "Ghana"
};

var studentList: Student[] = Array(student1, student2);

function createStudentTable (students: Student[]): string {
  var table: string = "";
  if (students.length > 0) {
    table = "<table><tr><th>firstName</th><th>location</th></tr>"
    for (const student of students) {
      table += `<tr><td>${student.firstName}</td><td>${student.location}</td></tr>`
    };
    table += "</table>";
  };
  return table;
}

const table = createStudentTable(studentList)
document.body.innerHTML = table;
