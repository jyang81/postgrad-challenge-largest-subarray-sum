// input: let array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4]
// output: 16

// Run time is O(n). 
// I don't think it can run faster than this, as it iterates 
// through the array just once, while keeping track of the maximum 
// value as it goes. #dynamicprogramming

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
    return maxSum
}

// largestSubarraySum(array)
