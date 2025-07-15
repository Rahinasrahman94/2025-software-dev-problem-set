/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    
   let left = 0;
   let right = numbers.length-1;

   for(i=0;i<numbers.length;i++)
   {
    while(numbers[left] < numbers[right] || numbers[left] === numbers[right])
    {
        let sum = numbers[left] + numbers[right] ;
       if(sum === target)
       {
        console.log(sum);
        console.log(target);
        return ( [left+1,right+1] );
       }
      else  if(sum<target)
      {
left ++;
      }
      else
      {
        right --;
      }
    }

   }
    
};