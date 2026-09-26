/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let sortArray = nums.sort((a,b)=>a-b)
    console.log(sortArray,"sortedarray");
    let left =0, right = sortArray.length-1;
    while (left <= right){
        console.log(left,"left");
        console.log(right,"right");
        let mid = Math.floor((left+right)/2);
        console.log(mid,"mid");
        console.log(nums[left],"checkleft");
        console.log(nums[right],"checkright");
        console.log(nums[mid],"checkmid");
        console.log("-----------------------------------")
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