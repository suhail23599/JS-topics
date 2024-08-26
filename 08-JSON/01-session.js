const jsonString1 = '{"name": "John", "age": 30}';
const obj1 = JSON.parse(jsonString1);
console.log(obj1.name); // Output: John

const obj2 = { name: "John", age: 30 };
const jsonString2 = JSON.stringify(obj2);
console.log(jsonString2); // Output: {"name":"John","age": 30}

