function firstNonRepeatedChar(str) {
const charCount = {};  // Object to store the frequency of each character

    // Step 1: Count the frequency of each character
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Step 2: Find the first non-repeated character
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;  // Return the first non-repeated character
        }
    }

    // If no non-repeated character is found, return null
    return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
