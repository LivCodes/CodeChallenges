let splitMdn = "Split method Documentation";
let result = splitMdn.link("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split");
console.log(result);

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
reverseString("hello"); // returns "olleh"
/*
Steps to solve reverseString:
Step 1: split the string by each character using the .split() method.
        "The split() method divides a String into an ordered list of substrings, 
        puts these substrings into an array, and returns the array." -MDN website
Step 2: Now that the string is split into an array, use the .reverse() method 
        to reverse the elements in the array.
Step 3: Your new array has every element in an reversed order. Use the .join() method
        to rejoin the characters into a string
Step 4: Invoke the function
*/
