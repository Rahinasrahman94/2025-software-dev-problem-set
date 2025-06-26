
var twoSum = function(nums, target) {
const valueMap = new Map();
for(let i=0;i<nums.length;i++)
{
  const diff = target - nums[i];
  if(valueMap.has(diff))
  {
    return [valueMap.get(diff) , i];
  }
  valueMap.set(nums[i],i)
}
return [];
}