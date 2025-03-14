import { data, str } from './index.js';

const args = process.argv.slice(2);

const command = args[0];
const input = args[1];
const extra = args[2];

switch (command) {
  case 'filter': {
    const array = JSON.parse(input);
    console.log('✅ Filtered:', data.filteredArray(array, extra));
    break;
  }

  case 'sort': {
    const array = JSON.parse(input);
    console.log('✅ Sorted:', data.sortedArray(array));
    break;
  }

  case 'ascii': {
    console.log('✅ ASCII:', str.convertedString(input));
    break;
  }

  case 'uppercase': {
    console.log('🔠 Uppercase:', str.upper(input));
    break;
  }

  case 'lowercase': {
    console.log('🔡 Lowercase:', str.lower(input));
    break;
  }

  default:
    console.log('❌ Unknown command!');
}
