const readline = require('readline-sync');

// Question 1: Get number of hours, minutes and seconds from number of seconds.

// Approach: check if the number of seconds is greater then 3600, if yes increase the time by 1 hour and subtract 3600 seconds from total time since we already counter the 3600 seconds. If the number of seconds is less then 3600 seconds but greater then 60 seconds, then increase the time by 1 minute and subtract 60 seconds from total time. At the end we will only be left with seconds which will be less than 60.

function timeConvertor(seconds) {
  let hour = 0, minute = 0, second = 0;
  let i = seconds;
  while (i > 0)
  {
    if(i >= 3600)
    {
      hour++;
      i -= 3600;
    }
    else if (i >= 60)
    {
      minute++;
      i -= 60;
    }
    else
    {
      second = i;
      i = 0;
    }
  }
  return [hour, minute, second];
}


const seconds = readline.question("How many seconds: ");
const time = timeConvertor(seconds);

console.log("\nOutput\n");
console.log(`Hours = ${time[0]}, minutes = ${time[1]} , seconds = ${time[2]}`);










// Question 2: You are given  two numbers L and R, you have to find if XOR of all the numbers in range L to R (L,R both inclusive) is odd or even.

// Approach: Read the number of test cases. Run a for loop, and store the test cases in an array of array. Expand the test case from L to R (inclusive L and R) in a new array and then perform XOR operation. If result is Even, return Even else Odd.


console.log('\n\n');

// function to check if a number is even or not
const isEven = num => num % 2 === 0;

// gets input from user
let numberOfCases = readline.question("How many test cases: ");

// empty array in which we will store our test cases
let testCasesTemp = [];


// for loop for storing the test cases, 
for (let i = 0; i < numberOfCases; i++) {
  let input = readline.question();

  // splits the string wherever it encounters whitespace ' ' => 1 6 = ['1', '6']
  let array = input.split(' ');

  // pushes the current test case in our array
  testCasesTemp.push(array);
}


// converts each element of the array to int with the help of parseInt function
const testCases = testCasesTemp.map(item => item.map(item => parseInt(item)));

// expands the values in the array from L to R (inclusive L to R)
const expandedCases = testCases.map(item => {
  let temp = [];
  for (let i = item[0]; i <= item[1]; i++) {
    temp.push(i);
  }
  return temp;
})

// runs reduce function on our resultant array and performs XOR operation on all value, returns Even if even, Odd if Odd
const result = expandedCases.map(item => isEven(item.reduce((accumulaor, current) => accumulaor ^ current)) ? "Even" : "Odd");

console.log("\nOutput\n");

for (let output of result)
{
  console.log(output);
}









// You are given with T number of strings. You need to sort the strings according to their first character.

console.log('\n\n');
const numberofStrings = readline.question("How many strings: ");

let strings = [];

for(let i = 0; i < numberofStrings; i++)
{
  let string = readline.question();
  strings.push(string);
}

strings.sort();

console.log("\nOutput\n");

for(let string of strings)
{
  console.log(string);
}