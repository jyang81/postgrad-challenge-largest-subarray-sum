// let array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4]

// Run time is O(n) where n is the size of the array. I don't think it can run faster than this, as it iterates through the array one time, while keeping track of the maximum value as it goes. You can't find the answer without going through the entire array. #dynamicprogramming

function largestSubarraySum(array) {
    let currentSum = 0;
    let maxSum = 0;
    for (let i = 0; i < array.length; i++) { 

        currentSum = currentSum + array[i];
                
        if (currentSum < 0) {
            currentSum = 0;
        }
        if (maxSum < currentSum) {
            maxSum = currentSum
        }

    }  
    // console.log("current", currentSum)
    // console.log("max", maxSum)

    return maxSum

}

// largestSubarraySum(array)




// The following code passed 7 of 9 tests - This is how far I got before looking for help. I knew something was off, but I couldn't figure it out in time. Once I realized my mistake, it seemed so simple. 

// function largestSubarraySum(array) {
//     let currentSum = 0;
//     let maxSum = 0;
//     for (let i = 0; i < array.length; i++) {

//         currentSum = maxSum + array[i];

//         if (currentSum + array[i + 1] >= array[i + 1]) {
//             maxSum = currentSum;
//         }

//         console.log("current", currentSum)
//         console.log("max", maxSum)
//     }

//     return Math.max(maxSum, currentSum)

// }