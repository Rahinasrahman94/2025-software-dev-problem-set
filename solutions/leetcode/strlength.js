
let nums ="Ts2g8e";
let arr2 =[];
let str;

for(let i=0;i<nums.length;i++)
{
if((nums.charCodeAt(i) >= 65) && (nums.charCodeAt(i) <= 90) ||  (nums.charCodeAt(i) >= 97) && (nums.charCodeAt(i) <= 122))
  {
   arr2.push(nums[i]);
}

}
console.log(arr2.length);
