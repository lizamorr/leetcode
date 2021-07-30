/* Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * Example: Given nums = [2, 7, 11, 15], target = 9,
 * Because nums[0] + nums[1] = 2 + 7 = 9, return [0, 1].
 */

function twoSum(arr, target) {
  var hashMap = {};

  // Hash keys = numbers in array
  // Hash values = index of numbers in array
  for (let i = 0; i < arr.length; i++) {
    let currNum = arr[i];
    hashMap[currNum] = i;
  }
  for (var i = 0; i < arr.length; i++) {
    let numDiff = target - arr[i];
    if (hashMap.hasOwnProperty(numDiff) && hashMap[numDiff] !== i) {
      return [i, hashMap[numDiff]];
    }
  }
}
console.log(twoSum([2, 7, 11, 15], 9));

// Time complexity = O(n)
// Extra storage space for the hash map obj
