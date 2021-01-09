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
    revString = revString + str[i];
  }
  return revString;
}
console.log(reverseString2("friend")); // returns "dneirf"
    
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