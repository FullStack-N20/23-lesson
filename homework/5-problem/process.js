export const getProcessInfo = () => {
    return {
        pid: process.pid,
        platform: process.platform,
        nodeVersion: process.version,
        currentDir: process.cwd(),
    };
};
