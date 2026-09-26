/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left =0 , right = nums.length-1;
    while(left < right){
        console.log(left,"left");
        console.log(right,"right");
       let mid = Math.floor((left+right)/2);
        console.log(mid,"mid");
        console.log(nums[left],"checkleft");
        console.log(nums[right],"checkright");
        console.log(nums[mid],"checkmid");
        console.log("-----------------------------------")
      
     if(nums[right]<nums[mid]){
            left = mid+1;
        }else{
            right = mid ;
        }
    }
    return nums[left];
};