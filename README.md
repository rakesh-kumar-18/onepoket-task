# onepoket-task

This repository contains a simple Node.js server and functions for data manipulation and asynchronous file handling.

## Task 1: Basic Node.js Server

The server listens on port 3000 and responds with "Hello, World!" for all incoming HTTP requests.

### How to Run

1. Make sure you have Node.js and npm (Node Package Manager) installed on your system.
2. Clone this repository.
3. Install dependencies: `npm install`
4. Start the server: `npm start`

Once the server is running, you can visit http://localhost:3000 in your web browser to see the response "Hello, World!".

## Task 2: Data Manipulation

The function `sumArray` takes an array of integers as input and returns the sum of all the numbers.

### How to Use

```js
const { sumArray } = require('./task2/index');

const numbers = [1, 2, 3, 4, 5];
const result = sumArray(numbers);
console.log('Sum:', result); // Output: 15
```

## Task 3: Asynchronous File Handling

The script `index.js` reads a text file named "data.txt" and counts the number of words in it.

### How to Use

1. Create a text file named "data.txt" in the same directory as `index.js`.
2. Add the text content you want to count the words from.
3. Run the script: `node index.js`
   
The script will read the file, count the number of words, and print the total word count to the console.
