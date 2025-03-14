import os from "node:os";

export const getMemoryInfo = () => {
    const total = (os.totalmem() / 1024 / 1024).toFixed(2);
    const free = (os.freemem() / 1024 / 1024).toFixed(2);
    return { total, free };
};
