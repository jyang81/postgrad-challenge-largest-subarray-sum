// let array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4] // 16
// let array2 = [-3, 1, 100, 4, 15, 9, 30] // 159
// let array3 = [2, 1, -3, 4, -1, 2, 1, -5, 4] // 6

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
// console.log("----------------")
// largestSubarraySum(array2)
// console.log("----------------")
// largestSubarraySum(array3)
// console.log("----------------")




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