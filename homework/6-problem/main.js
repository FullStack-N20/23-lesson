import {
    objectToArray,
    arrayToObject,
    stringToBoolean
  } from './converts/index.js';
  
  const args = process.argv.slice(2);
  
  if (args.length < 2) {
    console.log("❌ Usage: node main.js <command> <value>");
    process.exit(1);
  }
  
  const [command, value] = args;
  
  switch (command) {
    case 'string-to-boolean':
      console.log(`✅ Result: ${stringToBoolean(value)}`);
      break;
  
    case 'array-to-object':
      try {
        const arr = JSON.parse(value);
        console.log("✅ Result:", arrayToObject(arr));
      } catch (err) {
        console.log("❌ Please provide a valid JSON array");
      }
      break;
  
    case 'object-to-array':
      try {
        const obj = JSON.parse(value);
        console.log("✅ Result:", objectToArray(obj));
      } catch (err) {
        console.log("❌ Please provide a valid JSON object");
      }
      break;
  
    default:
      console.log("❌ Unknown command");
  }
  