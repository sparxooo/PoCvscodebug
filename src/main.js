const fs = require('fs');

// Get the filename, change the path delimiter if you are on windows (to \\).
// const filename = __filename.split('\\').pop(); // Example if on windows
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
for (let i = 1; i < 19; i+=1) {
    console.log(`There was an error! Check out the code here: ${filename}:${i}.`);
}
    // Output the messages sans period
for (let i = 1; i < 19; i+=1) {
    console.log(`There was an error! Check out the code here: ${filename}:${i}`);
}