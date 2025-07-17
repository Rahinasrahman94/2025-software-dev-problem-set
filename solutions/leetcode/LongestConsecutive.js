/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    // let count = 1;
    // nums.sort((a,b) =>a-b);
    // console.log(nums);
    // const nums1 = new Set();
    // if(nums.length === 0)
    // {
    //     return 0;
    // }
    // for(let i=0;i<nums.length;i++)
    // {
    //     if(nums[i+1] - nums[i] === 1 || nums[i+1] - nums[i] === -1)
    //     {
    //        count ++;
    //        console.log(nums[i]);
    //     }
    //     else if(nums[i] === nums[i+1])
    //     {
    //       continue;
    //     }
    //     else 
    //     {
    //     return count ;
    //     }
    // }
    let numSet = new Set(nums);
    let longest = 0;
    for(let num of numSet)
    {
        if(!numSet.has(num-1))
        {
        let length = 1;
       while(numSet.has(num+length))
       {
        length ++;
       }
longest = Math.max(longest,length)
    }
    }
    return longest;
};