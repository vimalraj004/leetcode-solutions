/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let stack=[],ans=[],result =[],store={};
for (let i =nums2.length-1;i>=0;i--){

    while(stack.length && stack[stack.length-1]<= nums2[i]){
        stack.pop()
    }
    if(stack.length && stack[stack.length-1]>nums2[i]){
     
        ans.push(stack[stack.length-1])
        store[nums2[i]] = stack[stack.length-1]
           stack.push(nums2[i]);
    }else{
       stack.push(nums2[i]);
        ans.push(-1);
        store[nums2[i]] =-1
    }
}
for(let i =0 ;i<= nums1.length-1;i++){
 result.push ( store[nums1[i]]);
}
return result
};