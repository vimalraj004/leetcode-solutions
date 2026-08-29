/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let searchInsert =  (nums, target)=> {
 
 let left = 0 , right = nums.length -1;
let mid; 
if(target < nums[left]){
        return left; 
    } 
while (right>=left) {
     mid = Math.floor( (left + right) /2);
    if(target > nums[nums.length-1]){
        return nums.length-1 + 1;
    }
   else if(nums[mid] > target){
        right = mid-1;
    }else if(nums[mid] < target){
        left = mid +1;
    }
    else{
        return  mid ;
    }
}
    return left;

};