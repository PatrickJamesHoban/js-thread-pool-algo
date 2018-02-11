// PSEUDOCODE
// if customer array is empty return 0

// Things to remember...
  // Creating too many threads wastes resources and costs time creating the unused threads.
  // Destroying too many threads requires more time later when creating them again.
  // Creating threads too slowly might result in poor client performance (long wait times).
  // Destroying threads too slowly may starve other processes of resources.

// if the number of threads is greater that the length of the array, return the largest number from the array.

// else create a new array length of n
// add the first n items from customers to the new array n.

// add the next number in customers to the smallest number in array n.

// repeat until all numbers in customers array have been added to array n.

// return largest number in array n.



// CODE

// REFACTORED FIRST PASS
function queueTime(customers, n) {
  // takes care of the case where array is empty
  if (customers.length === 0) return 0;

  // 
  // ... is a short way to write .apply, should not be used for very large arrays.
  if (n >= customers.length) return Math.max(...customers);
  
  // takes care of the case where there are NOT multiple threads
  if (n === 1) return customers.reduce(function(a,b) { return a+b}, 0);
}

// First Pass
// function queueTime(customers, n) {
//   if (customers.length == 0) return 0
//   var chk_out_time = 0

//   ... is a short way to write .apply, should not be used for very large arrays.
//   if (n >= customers.length) {
//     chk_out_time += Math.max(...customers);  
//   } 

//   return chk_out_time;
// }



// DRIVER CODE

queueTime([], 1);             // returns 0

queueTime([1,2,3,4,5], 100);  // returns 5

queueTime([1,2,3,4], 1);      // returns 10

queueTime([2,2,3,3,4,4], 2);  // returns 9

//queueTime([3,18,12,2,5,6,8,13,5,3,1,8], 3); // returns... 31

// 16,18,12
// 16,18,20
// 29,18,20
// 29,23,20
// 29,23,23
// 29,24,23
// 29,24,31