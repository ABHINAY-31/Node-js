// import fs from 'fs';
const fs = require('fs');
// const data = fs.readFileSync('demo.txt', 'utf-8');

const express = require('express');

const server = express();
server.listen(3001);

// console.log("demo");













fs.readFile('demo.txt', 'utf-8', (error, data) => {
    // result will be in the callback (readFile)
    // readfile have two parameter (error and result)
    console.log(data);
});

console.log("done the task");
// console.log(data);