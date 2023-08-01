import { readFile } from 'fs';

readFile('data.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    const words = data.split(/\s+/).filter(Boolean);
    const wordCount = words.length;

    console.log(`Total word count: ${wordCount}`);
});