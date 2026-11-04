
let name = "Testleaf";

// Create an empty string to store the reversed characters.
let reversedString = "";

// Iterate through the string from the last valid index to the first index.
for (let i = name.length - 1; i >= 0; i--) {

    // Append the character at the current index to reversedString.
    reversedString = reversedString + name.charAt(i);
}

// Print the reversed string to the console.
console.log(reversedString);
