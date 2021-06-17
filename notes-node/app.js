/*
Using FS module to creating file and writing data
Using OS module to get the syster user information
then using string concatenation to write username in file.
*/


console.log('Starting App!!');

const fs = require('fs');
const os = require('os');

var user = os.userInfo();
console.log(user);
fs.appendFile('greetings.txt', `Hello ${user.username} !!`, function(err){
    if(err){
        console.log('Unable to write file!!');
    }
});