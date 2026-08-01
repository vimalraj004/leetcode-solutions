/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
let stack=[],ans=[];
for (let i = 2*nums.length-1; i >=0; i--) {

    while (stack.length && stack[stack.length-1]<=nums[i%nums.length]) {
        stack.pop()
    }
    if(stack.length && stack[stack.length-1]>=nums[i%nums.length]){
            if (i<nums.length)    ans.push(stack[stack.length-1]);
        stack.push(nums[i%nums.length]);
    
    }else{
            stack.push(nums[i%nums.length])
                       if (i<nums.length) ans.push(-1)
                         

    }

    
}
let left =0, right = ans.length-1;
while(right>left){
    [ans[left],ans[right]] =[ans[right],ans[left]]
    left++;
right--;
}

return ans
};