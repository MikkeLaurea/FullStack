const fs = require('fs');
const filePath = 'watch.txt';

console.log(`Watching for changes in ${filePath}...`);

fs.watch(filePath, (eventType, filename) => {
    if (filename) {
        console.log(`File ${filename} has been modified. Event type: ${eventType}`);
    }
});