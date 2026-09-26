/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let sortArray = nums.sort((a,b)=>a-b)
    let left =0, right = sortArray.length-1;
    while (left <= right){
        let mid = Math.floor((left+right)/2);
        if(nums[mid] === target){
            return true;
        }else if(nums[mid] > target){
            right = mid-1;
        }else{
            left = mid +1;
        }
    }
     return false;
};