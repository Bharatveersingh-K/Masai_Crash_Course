const fs = require('fs');
 
function readFileAsync(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(data);
        });
    });
}
 
async function aggregateDataAsync(fileList) {
    let aggregatedData = [];

    for (let file of fileList) {
        try {
            const data = await readFileAsync(file);
            aggregatedData.push(data);
        } catch (error) {
            throw new Error(`Error reading file ${file}: ${error.message}`);
        }
    }

    return aggregatedData;
}

// Example usage
const files = ['file1.txt', 'file2.txt', 'file3.txt'];
aggregateDataAsync(files)
    .then(data => {
        console.log('Aggregated Data:', data);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });
