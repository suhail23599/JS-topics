// Initial data
const students = [
  { name: "Alice", age: 20, grade: 85 },
  { name: "Bob", age: 22, grade: 90 },
  { name: "Charlie", age: 19, grade: 78 },
  { name: "John", age: 21, grade: 82 }
];

// 1. Add two new students to the beginning of the array
students.unshift({ name: "Eve", age: 23, grade: 88 }, { name: "Frank", age: 18, grade: 91 });

// 2. Remove the last student from the array
students.pop(); // Removes Frank

// 3. Create a new array of students older than 18
const olderStudents = students.filter(student => student.age > 18);

// 4. Create a new array containing only the grades of the students
const grades = students.map(student => student.grade);

// 5. Calculate the average grade of the students
const totalGrade = students.reduce((acc, student) => acc + student.grade, 0);
const averageGrade = totalGrade / students.length;

// 6. Sort students by their grades in descending order
students.sort((a, b) => b.grade - a.grade);

// 7. Extract a subset of the first 3 students
const firstThreeStudents = students.slice(0, 3);

console.log("Updated Students Array:", students);
console.log("Older Students:", olderStudents);
console.log("Grades Array:", grades);
console.log("Average Grade:", averageGrade);
console.log("First 3 Students:", firstThreeStudents);
