const fs = require('fs');
const filePath = 'temp.txt';

fs.unlink(filePath, (err) => {
    if (err) {
        console.error('Error deleting the file:', err);
        return;
    }
    console.log('File has been successfully deleted.');
});
