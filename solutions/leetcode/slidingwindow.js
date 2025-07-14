var findMaxAverage = function(nums, k) {
    let max = 0;
    let window_sum = 0;
    let max_sum=0;
    let avg = 0 ;
    for(let i=0;i<k;i++)
    {
    window_sum = window_sum +  nums[i];
    }
 max_Sum= window_sum ;
  
    for(i=k;i<nums.length;i++)
    {
      
        window_sum +=  nums[i] - nums[i-k];
        max_Sum = Math.max(window_sum,max_Sum);
        
    }
return max_Sum/k;
};