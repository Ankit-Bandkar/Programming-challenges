/*
Write a recursive function, sum(arr, n), that returns the sum of the
 elements from 0 to n inclusive in an array arr.
*/

function sum(arr, n) {
  if (n <= 0) {
    return arr[0];
  } else {
    return sum(arr, n - 1) + arr[n];
  }
}

/*We have defined a function called countdown with one parameter (n).
 The function should use recursion to return an array containing the
  integers n through 1 based on the n parameter. If the function 
  is called with a number less than 1, the function should return an
   empty array. For example, calling this function with n = 5 should
    return the array [5, 4, 3, 2, 1]. Your function must use recursion 
    by calling itself and must not use loops of any kind. */

function countdown(n) {
  if (n <= 0) {
    return [];
  } else {
    var arr = countdown(n - 1);
    arr.unshift(n);
    return arr;
  }
}

/*
We have defined a function named rangeOfNumbers with two parameters. The function should return an array of integers which begins with a number represented by the startNum parameter and ends with a number represented by the endNum parameter. The starting number will always be less than or equal to the ending number. 
Your function must use recursion by calling itself and not use
 loops of any kind. It should also work for cases where both 
 startNum and endNum are the same. 
*/

function rangeOfNumbers(startNum, endNum) {
  if (startNum > endNum) {
    return [];
  } else {
    var arry = rangeOfNumbers(startNum + 1, endNum);
    arry.unshift(startNum);
    return arry;
  }
}
