// Exercise #1: For Each Function

function forEach(array, operation) {
  // Start coding here
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(operation(array[i]));
  }
  return result;
}

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = forEach(employeeSalaries, addSalaries);

// Using `forEach` function here
function addSalaries(num) {
  return num + 5000;
}

console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]
