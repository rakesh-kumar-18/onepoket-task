function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

const numbers = [1, 18, 33, 21, 54, 6];
console.log(sumArray(numbers));