// js/main.ts
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "London",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Doe",
  age: 21,
  location: "Paris",
};

const studentsList = [student1, student2];

const table = document.createElement("table");
const tableHead = document.createElement("thead");
const tableBody = document.createElement("tbody");
const tableRow = document.createElement("tr");
const tableData = document.createElement("td");

tableHead.appendChild(tableRow);
tableRow.appendChild(tableData);
tableData.textContent = "First Name";
tableRow.appendChild(tableData);
tableData.textContent = "Location";

tableBody.appendChild(tableRow);
for (const student of studentsList) {
  const tableRow = document.createElement("tr");
  const tableData = document.createElement("td");
  tableRow.appendChild(tableData);
  tableData.textContent = student.firstName;
  tableRow.appendChild(tableData);
  tableData.textContent = student.location;
  tableBody.appendChild(tableRow);
}

table.appendChild(tableHead);
table.appendChild(tableBody);
document.body.appendChild(table);
