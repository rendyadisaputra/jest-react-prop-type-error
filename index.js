const error = console.error;

console.error = (message, ...args) => {
    if (/(Invalid %s|Failed %s type)/gi.test(message)) {
        expect({'yourError': args}).toBe("Please fix below error");
    }
};