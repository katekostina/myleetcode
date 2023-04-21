// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
//
// Return the running sum of nums.
//
//
//
//   Example 1:
//
// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
//   Example 2:
//
// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
//   Example 3:
//
// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]
//
//
// Constraints:
//
//   1 <= nums.length <= 1000
//   -10^6 <= nums[i] <= 10^6


// my solution:
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSumMy = function(nums) {
  let arr = [];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
    arr.push(sum);
  }
  return arr;
};

// short solution:
const runningSumShort = nums => {
  nums.reduce((a,c,i,arr) => arr[i] += a)
  return nums
}

// best explained solution:
// Time Complexity : O(n)
// Space Complexity : O(n)
const runningSumBest = function(nums) {
  // Create an output array of size equal to given nums size...
  let output = new Array(nums.length)
  // Set output[0] = nums[0]...
  output[0] = nums[0];
  // Traverse all elements through the for loop...
  for(let idx = 1; idx < nums.length; idx++) {
    // Storing the running sum...
    output[idx] = output[idx-1] + nums[idx];
  }
  return output;      // Return the running sum of nums...
};
