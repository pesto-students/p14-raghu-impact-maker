
function divideArray(numberArray){
    let evenArray = [];
    let oddArray= [];
    for (let i = 0; i<numberArray.length; i++) {
        if (numberArray[i] % 2 != 0) {
            oddArray.push(numberArray[i]);
        } else {
            evenArray.push (numberArray[i]);
        }
    }

    // Sort the even numbers array in ascending order using a comparison function.
        evenArray.sort(function(a, b) {
            return a - b;
        });

        // Sort the odd numbers array in ascending order using a comparison function.
        oddArray.sort(function(a, b) {
            return a - b;
        });

        // Print the sorted even and odd numbers with appropriate formatting.
        console.log("Even numbers:" + (evenArray.length > 0 ? evenArray.join("\n") : "None"));
        console.log("Odd numbers:" + (oddArray.length > 0 ? oddArray.join("\n") : "None"));

}

let arr = [4, 2, 9, 1, 8];
divideArray(arr)