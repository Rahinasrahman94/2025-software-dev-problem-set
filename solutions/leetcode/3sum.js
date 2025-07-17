/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
let result = [];
nums = nums.sort((a,b) =>a-b);
for(let i=0;i<nums.length;i++)
    {
        if(i === 0 || nums[i-1]!== nums[i]){
        let left = i+1;
        let right = nums.length-1;

while(left<right)
{
    if(nums[left] + nums[right] === -nums[i])
    {
        result.push([nums[left],nums[right],nums[i]])
    
    left ++;
    right --;
    while(left<right && nums[left-1] === nums[left])
    {
        left ++;
    }
    while(right >-1 && nums[right] === nums[right+1])
    {
        right --;
    }
    }
    else if(nums[left] + nums[right] < -nums[i])
    {
        left ++;
    }
    else
    {
        right --;
    }
   

        }

}
    }
return result;
}