// //Write a JavaScript program that accepts an array of numbers and identifies the values that appear more than once.
// // Example: For the array [10, 20, 10, 30, 20, 40, 10], the duplicate values are 10 and 20.

// Declare and initialize the array
let numbers = [10, 20, 10, 30, 20, 40, 10];

// Iterate through the array using the outer loop.
for (let i = 0; i < numbers.length; i++) {

    // Iterate through the remaining elements using the inner loop.
    for (let j = i + 1; j < numbers.length; j++) {

        // Check whether the current elements are equal.
        if (numbers[i] === numbers[j]) {

            // Check whether the duplicate was already printed earlier.
            if (numbers.indexOf(numbers[i]) === i) {

                // Print the duplicate value.
                console.log("Duplicate number:", numbers[i]);

            }

            // Stop checking further occurrences of this value.
            break;
        }
    }
}