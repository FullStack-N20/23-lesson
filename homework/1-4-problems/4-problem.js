import os from "node:os";

const args = process.argv.slice(2);

// Expecting exactly 1 command
if (args.length !== 1) {
    console.log("❌ Error: Please run the command like this:");
    console.log("   node app.js check-memory");
    console.log("   node app.js free-memory");
    console.log("   node app.js total-memory");
    process.exit(1);
}

const [command] = args;

switch (command) {
    case "check-memory":
        const total = (os.totalmem() / (1024 ** 2)).toFixed(2);
        const free = (os.freemem() / (1024 ** 2)).toFixed(2);
        console.log("🧠 System Memory Info (MB):");
        console.log(`✅ Total Memory: ${total} MB`);
        console.log(`✅ Free Memory:  ${free} MB`);
        break;

    case "free-memory":
        const freeOnly = (os.freemem() / (1024 ** 2)).toFixed(2);
        console.log(`✅ Free Memory: ${freeOnly} MB`);
        break;

    case "total-memory":
        const totalOnly = (os.totalmem() / (1024 ** 2)).toFixed(2);
        console.log(`✅ Total Memory: ${totalOnly} MB`);
        break;

    default:
        console.log("❌ Error: Unknown command.");
        console.log("Available commands: check-memory, free-memory, total-memory");
        process.exit(1);
}
