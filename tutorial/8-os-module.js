const os = require('os')

// info about current user
const user = os.userInfo();

// method returns the system uptime in seconds
const osUptimeInSeconds = os.uptime();
const osUptimeInMinutes = osUptimeInSeconds / 60;
const osUptimeInHours = osUptimeInMinutes / 60;
console.log(`The System uptime is ${os.uptime()} seconds`)
console.log(`The System uptime is ${osUptimeInMinutes} minutes`)
console.log(`The System uptime is ${osUptimeInHours} hours`)

// info about current Operating System
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(`Info about current OS is:`);
console.log(currentOS);