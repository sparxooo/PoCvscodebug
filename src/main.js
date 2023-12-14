const fs = require('fs');

// Get the filename
const filename = __filename.split('/').pop();
const multiLineAscii = `
Lets
Make
Some
More
Lines
Of
Code
`;

// Output the messages
for (let i = 0; i < 25; i+=2) {
console.log(`There was an error! Check out the code here: ${filename}:${i}.`);
}