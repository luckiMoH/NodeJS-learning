// GLOBALS - NO WINDOW !!!!

// __dirname = path to current directory
// __filename = file name
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about environment where the program is being executed

const interval = setInterval(() => {
    console.log(`Hello world`);
}, 1000);
setTimeout(() => {
    clearInterval(interval);
    console.log('stopped');
}, 5000)