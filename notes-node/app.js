/*
Using FS module to creating file and writing data
Using OS module to get the syster user information
then using string concatenation to write username in file.
*/


console.log('Starting app.js!!');

const fs = require('fs');
const _  = require('lodash');

//Requiring your own file
const notes = require('./notes.js');
