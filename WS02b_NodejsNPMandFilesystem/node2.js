const fs = require('fs');
const filePath = 'output.txt';
const textToWrite = 'This is the initial text.\n';
const textToAppend = 'This is the appended text.\n';


fs.writeFile(filePath, textToWrite, (err) => {
    if (err) {
        console.error('Error writing to file:', err);
        return;
    }
    console.log('File has been written successfully.');

    // Append to file
    fs.appendFile(filePath, textToAppend, (err) => {
        if (err) {
            console.error('Error appending to file:', err);
            return;
        }
        console.log('Additional text has been appended successfully.');
    });
});
