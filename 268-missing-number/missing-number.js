
var missingNumber = function(nums) {
    let n = nums.length;
    let total_sum = (n * (n+1)) / 2;
    let sum_of_array = 0;

    for(let num of nums){
        sum_of_array += num;
    }
    return total_sum - sum_of_array;
};