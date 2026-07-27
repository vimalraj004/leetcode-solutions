/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let stack =[],ans=[];
for(let i = temperatures.length-1;i>=0;i--){
    while(stack.length && temperatures[stack[stack.length-1]]<=temperatures[i]){
        stack.pop();
    }

    if(stack.length && temperatures[stack[stack.length-1]]>=temperatures[i]){
        ans.push(stack[stack.length-1] - i)
       stack.push(i);
       
    }else{
         stack.push(i)
        ans.push(0)
    }   
}

let left =0,right=ans.length-1
while(right>left){
    [ans[left],ans[right]] = [ans[right],ans[left]]
    left++;
    right--;
}

return ans;
}