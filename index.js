function removeDuplicates(array) {
    return Array.from(new Set(array));
  }
  
  // Main function to use the helper function
  function main() {
    // Example: Remove duplicates from an array
    let numbersWithDuplicates = [1, 2, 3, 2, 4, 5, 1, 6];
    let uniqueNumbers = removeDuplicates(numbersWithDuplicates);
  
    console.log("Original Array: " + numbersWithDuplicates);
    console.log("Array with Duplicates Removed: " + uniqueNumbers);
  }
  
  // Call the main function to execute the code
  main();