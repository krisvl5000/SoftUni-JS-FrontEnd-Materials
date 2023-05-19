function isNumPalindrome (arr){
    for (let num of arr) {
        // Convert the number to a string for comparison
        let numStr = String(num);
    
        // Reverse the string
        let reversedStr = numStr.split("").reverse().join("");
    
        // Check if the reversed string is equal to the original string
        if (numStr === reversedStr) {
          console.log("true");
        } else {
          console.log("false");
        }
      }
}

isNumPalindrome([123,323,421,121]);