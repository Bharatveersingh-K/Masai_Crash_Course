const fs = require('fs');


function readFileAsync(filename, callback) {
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            callback(err);
            return;
        }
        callback(null, data);
    });
}


function aggregateDataCallback(fileList, callback) {
    let aggregatedData = [];
    let count = 0;

    fileList.forEach((file) => {
        readFileAsync(file, (err, data) => {
            if (err) {
                callback(err);
                return;
            }
            aggregatedData.push(data);
            count++;

            if (count === fileList.length) {
                callback(null, aggregatedData);
            }
        });
    });
}


const files = ['file1.txt', 'file2.txt', 'file3.txt'];
aggregateDataCallback(files, (err, data) => {
    if (err) {
        console.error('Error:', err);
        return;
    }
    console.log('Aggregated Data:', data);
});
