
const fs = require('fs');
const dirPath = 'testDir';

// Create directory
fs.mkdir(dirPath, { recursive: true }, (err) => {
    if (err) {
        console.error('Error creating directory:', err);
        return;
    }
    console.log('Directory created successfully.');

    // Remove directory
    fs.rmdir(dirPath, (err) => {
        if (err) {
            console.error('Error removing directory:', err);
            return;
        }
        console.log('Directory removed successfully.');
    });
});