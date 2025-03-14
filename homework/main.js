// import "./1-4-problems/2-problem.js"

// // console.log(global.message);

// // for 2-problem

import { getMemoryInfo, getProcessInfo, getUptime } from './5-problem/index.js';

const args = process.argv.slice(2);
const command = args[0];

switch (command) {
    case 'memory':
        const mem = getMemoryInfo();
        console.log(`🧠 Memory Info:\n  Total: ${mem.total} MB\n  Free: ${mem.free} MB`);
        break;

    case 'process':
        const proc = getProcessInfo();
        console.log(`⚙️ Process Info:`);
        console.log(`  PID: ${proc.pid}`);
        console.log(`  Platform: ${proc.platform}`);
        console.log(`  Node Version: ${proc.nodeVersion}`);
        console.log(`  Directory: ${proc.currentDir}`);
        break;

    case 'uptime':
        const uptime = getUptime();
        console.log(`⏱ Uptime: ${uptime} seconds`);
        break;

    default:
        console.log("❌ Unknown command. Use: memory | process | uptime");
}
