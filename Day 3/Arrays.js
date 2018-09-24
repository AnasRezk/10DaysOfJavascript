/**
 *   Return the second largest number in the array.
 *   @param {Number[]} nums - An array of numbers.
 *   @return {Number} The second largest number in the array.
 **/
function getSecondLargest(nums) {
    // Complete the function
    const sorted_array = nums.sort((a, b) => a - b);
    const unique_sorted_array = sorted_array.filter((elem, index, self) => index === self.indexOf(elem));
    return unique_sorted_array[unique_sorted_array.length - 2];
}