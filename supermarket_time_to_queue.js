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
// FINAL REFACTOR
function queueTime(customers, n) {
  var arr_n = customers.splice(0,n);
  for (let i = 0; i < customers.length; i++) {
    let smallest_n = arr_n.indexOf(Math.min(...arr_n));
    arr_n[smallest_n] += customers[i];
  }
  return Math.max(...arr_n);
}


// DRIVER CODE

// queueTime([], 1);             // returns 0

// queueTime([1,2,3,4,5], 100);  // returns 5

// queueTime([1,2,3,4], 1);      // returns 10

// queueTime([2,2,3,3,4,4], 2);  // returns 9

// queueTime([2,2,3,10] , 2 );   // returns 12

queueTime([3,18,12,2,5,6,8,13,5,3,1,8], 3); // 3,18,12 // 5,18,12 // 10,18,12 // 16,18,12 // 16,18,20 // 29,18,20 // 29,23,20 // 29,23,23 // 29,24,23 // 29,24,31 // RETURN 31


// ORIGINAL CODE - THOUGHT PROCESS...


// REFACTORED THIRD PASS - I THINK THIS ONE MIGHT BE THE OPTIMAL SOLUTION FROM A BIG O PERSPECTIVE.  MINUS THE FACT I'D STILL HAVE TO CALL .apply() AND USE .reduce() FOR THE .min AND .max FUNCTIONS FOR VERY LARGE ARRAYS.

// function queueTime(customers, n) {
//   // takes care of the case where array is empty
//   if (customers.length === 0) return 0;

//   // takes care of the case where there are more registers than customers in line.
//   // ... is a short way to write .apply, should not be used for very large arrays.
//   if (n >= customers.length) return Math.max(...customers);
  
//   // takes care of the case where there are NOT multiple threads
//   if (n === 1) return customers.reduce(function(a,b) { return a+b}, 0);
  
//   // cases where there is more than one register, but fewer registers than the number of customers in line.
//   if ( n > 1 && n < customers.length ) {
//     var arr_n = customers.splice(0,n);
  
//     for (let i = 0; i < customers.length; i++) {
//       let smallest_n = arr_n.indexOf(Math.min(...arr_n));
//       arr_n[smallest_n] += customers[i];
//     }
//     return Math.max(...arr_n);
//   }
// }


// REFACTORED SECOND PASS - SOLVES FOR ALL POSSIBILITIES
// function queueTime(customers, n) {
//   // takes care of the case where array is empty
//   if (customers.length === 0) return 0;

//   // takes care of the case where there are more registers than customers in line.
//   // ... is a short way to write .apply, should not be used for very large arrays.
//   if (n >= customers.length) return Math.max(...customers);
  
//   // takes care of the case where there are NOT multiple threads
//   if (n === 1) return customers.reduce(function(a,b) { return a+b}, 0);
  
//   // cases where there is more than one register, but fewer registers than the number of customers in line.
//   var arr_n = customers.splice(0,n);
//   console.log("arr_n " + arr_n);
//   console.log("customers " + customers);
  
//   for (let i = 0; i < customers.length; i++) {
//     console.log("i is " + i);
//     // arr_n.sort();
//     // let small_n = smallestNum(arr_n); // 0
//     let small_n = arr_n.indexOf(Math.min(...arr_n));
//     console.log("small n is " + small_n);
//     console.log("arr_n i before " + arr_n[i]);
//     arr_n[small_n] += customers[i];
//     console.log("arr_n i after " + arr_n[i]);
//     console.log("arr_n is " + arr_n);
//   }
//   console.log(Math.max(...arr_n));
//   return Math.max(...arr_n);
// }

// function smallestNum(arr) {
//   return arr.indexOf(Math.min(...arr));
// }


// REFACTORED FIRST PASS - SOLVES FIRST THREE CASES
// function queueTime(customers, n) {
//   // takes care of the case where array is empty
//   if (customers.length === 0) return 0;

//   // takes care of the case where there are more registers than customers in line.
//   // ... is a short way to write .apply, should not be used for very large arrays.
//   if (n >= customers.length) return Math.max(...customers);
  
//   // takes care of the case where there are NOT multiple threads
//   if (n === 1) return customers.reduce(function(a,b) { return a+b}, 0);
// }


// FIRST PASS - COVERS FIRST TWO CASES
// function queueTime(customers, n) {
//   if (customers.length == 0) return 0
//   var chk_out_time = 0

//   ... is a short way to write .apply, should not be used for very large arrays.
//   if (n >= customers.length) {
//     chk_out_time += Math.max(...customers);  
//   } 

//   return chk_out_time;
// }


// OTHER SOLUTIONS
// function queueTime(customers, n) {
//   var w = new Array(n).fill(0);
//   for (let t of customers) {
//     let idx = w.indexOf(Math.min(...w));
//     w[idx] += t;
//   }
//   return Math.max(...w);
// }
