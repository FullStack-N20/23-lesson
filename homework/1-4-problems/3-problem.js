const args = process.argv.slice(2);

if (args.length !== 3) {
  console.log("❌ Error: Please provide two numbers and an operator. Example: node main.js 5 + 3");
  process.exit(1);
}

const [num1, operator, num2] = args;
const a = parseFloat(num1);
const b = parseFloat(num2);


if (isNaN(a) || isNaN(b)) {
  console.log("❌ Error: Both arguments must be valid numbers.");
  process.exit(1);
}

let result;

switch (operator) {
  case '+':
    result = a + b;
    break;
  case '-':
    result = a - b;
    break;
  case '*':
    result = a * b;
    break;
  case '/':
    if (b === 0) {
      console.log("❌ Error: Cannot divide by zero!");
      process.exit(1);
    }
    result = a / b;
    break;
  default:
    console.log("❌ Error: Operator must be one of +, -, *, /");
    process.exit(1);
}

console.log(`✅ Result: ${a} ${operator} ${b} = ${result}`);
