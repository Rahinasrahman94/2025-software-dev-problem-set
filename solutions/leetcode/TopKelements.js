/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let  mapva = new Map();

for(let i=0;i<nums.length;i++)
{
    if(!mapva.has(nums[i]))
    {
        mapva.set(nums[i] ,1);
    }
    else
    {
    mapva.set(nums[i],mapva.get(nums[i])+1);
    }
}
console.log(mapva);
const mapSort = new Map([...mapva.entries()].sort((a,b) => b[1] - a[1]));
console.log(mapSort);
let result = [];
let count = 0;
for(let [key,val] of mapSort.entries())
if(count < k)
{
result.push(key);
count ++;
}

return result;
}