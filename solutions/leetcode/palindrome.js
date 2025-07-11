/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

let j = s.length-1;
if(s.length === 0)
{
    return true;
}
else
{
    for(let i=0;i<=s.length/2;i++)
    {
         if((s[i] >= 97 && s[i] <= 122 )&& ( s[j] >= 97 && s[j] <= 122 ))
        {
        
            if(s[i] !== s[j])
            {
            return false;
            }
        }
        j--;
    }
}
    return true;

    
};