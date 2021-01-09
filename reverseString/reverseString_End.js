/* Challenge #1 : reversestring
 Write a function called reverseString where given a string as a parameter 
 will reverse the characters of the string and return the reversed string
 Example:
 input: "hello"  -> output: "olleh"
*/

// Solution 1: Built in Methods (.split, .reverse, .join)
function reverseString(str) {
  return str.split('').reverse().join('')
}
console.log(reverseString("hello")); // returns "olleh"
    
            /* Steps to solve:
            Step 1: split the string by each character using the .split() method.
                    "The split() method divides a String into an ordered list of substrings, 
                    puts these substrings into an array, and returns the array." -MDN website
            Step 2: Now that the string is split into an array, use the .reverse() method 
                    to reverse the elements in the array.
            Step 3: Your new array has every element in an reversed order. Use the .join() method
                    to rejoin the characters into a string
            Step 4: Invoke the function
            */
    
// Solution 2: Decrementing For Loop 
function reverseString2(str) {
  let revString = '';
  for(let i = str.length - 1; i >= 0; i -= 1) {
    revString += str[i];
  }
  return revString;
}
console.log(reverseString2("friend")); // returns "dneirf"
    
            /* Steps to solve:
            Step 1: Declare a variable called revString and initialize it to an empty string
            Step 2: For the first expression in the for loop declare a counter variable 
                    and set it equal to the length of the string minus 1.   
            Step 3: The for loop should run as long as the counter variable is greater than or equal to zero, 
                    (zero is the index of the 1st letter in the string) so the second expression should be the counter variable >= 0.
            Step 4: The last expression decrements the counter variable in this case by 1.
            Step 5: Inside the body of the For Loop add each element to revString on each iteration
                    by using the += operator.
            Step 6: Invoke the function
            */
    
// Solution 3: Incrementing For Loop 
function reverseString3(str) {
  let revString = '';
  for(let i = 0; i < str.length; i += 1) {
    revString =  str[i] + revString ;
  }
  return revString;
}
console.log(reverseString3("Let's Go!")); // returns "!oG s'teL"
            /* Steps to solve:
            Step 1: split the string by each character using the .split() method.
                    "The split() method divides a String into an ordered list of substrings, 
                    puts these substrings into an array, and returns the array." -MDN website
            Step 2: Now that the string is split into an array, use the .reverse() method 
                    to reverse the elements in the array.
            Step 3: Your new array has every element in an reversed order. Use the .join() method
                    to rejoin the characters into a string
            Step 4: Invoke the function
            */
    
// Solution 4: For of Loop 
function reverseString4(str) {
  let revString = '';
  for(let char of str) {
    revString =  char + revString ;
  }
  return revString;
}
console.log(reverseString4("Game on")); // returns "no emaG"
            /* Steps to solve:
            Step 1: split the string by each character using the .split() method.
                    "The split() method divides a String into an ordered list of substrings, 
                    puts these substrings into an array, and returns the array." -MDN website
            Step 2: Now that the string is split into an array, use the .reverse() method 
                    to reverse the elements in the array.
            Step 3: Your new array has every element in an reversed order. Use the .join() method
                    to rejoin the characters into a string
            Step 4: Invoke the function
            */


// Solution 5: High Order Array Method -> ForEach() 
function reverseString5(str) {
        let revString = '';
        str.split('').forEach(function(char) {         // Arrow function refactor: str.split('').forEach(char => revString = char + revString);
          revString =  char + revString ;
        });
        return revString;
      }
      console.log(reverseString5("For Each Letter")); // returns "retteL hcaE roF"
                  /* Steps to solve:
                  Step 1: split the string by each character using the .split() method.
                          "The split() method divides a String into an ordered list of substrings, 
                          puts these substrings into an array, and returns the array." -MDN website
                  Step 2: Now that the string is split into an array, use the .reverse() method 
                          to reverse the elements in the array.
                  Step 3: Your new array has every element in an reversed order. Use the .join() method
                          to rejoin the characters into a string
                  Step 4: Invoke the function
                  */


// Solution 6: High Order Array Method -> reduce() 
function reverseString6(str) {
        return str.split('').reduce(function(revString, char) {         // Arrow function refactor: return str.split('').reduce((revString, char) => char + revString, '');
          return char + revString ;
        }, '');
      }
      console.log(reverseString6("Another One")); // returns "enO rehtonA"
                  /* Steps to solve:
                  Step 1: split the string by each character using the .split() method.
                          "The split() method divides a String into an ordered list of substrings, 
                          puts these substrings into an array, and returns the array." -MDN website
                  Step 2: Now that the string is split into an array, use the .reverse() method 
                          to reverse the elements in the array.
                  Step 3: Your new array has every element in an reversed order. Use the .join() method
                          to rejoin the characters into a string
                  Step 4: Invoke the function
                  */