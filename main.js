const sumOfDigits = (number, sum) => {
  if (number <= 0) return sum;
  sum += number % 10;
  number = Math.floor(number / 10);
  return sumOfDigits(number, sum);
};

console.log(sumOfDigits(148, 0));

const min = (arr, currentMin) => {
  if (!arr.length) return currentMin;
  const currentNumber = arr.shift();
  if (currentMin > currentNumber) {
    currentMin = currentNumber;
  }
  return min(arr, currentMin);
};

const findMinArray = [2, 4, 5, 0, 12, -3, 90, -43];
console.log(min(findMinArray, findMinArray[0]));

const getInput = (arr) => {
    if(arr.length === 3) return arr;
    const input = Number(prompt("Please enter a number"));
    if (input) {
        arr.push(input);
    }
    return getInput(arr);
}

// console.log(getInput([]));
