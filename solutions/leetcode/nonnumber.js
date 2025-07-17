the_string = "19fe8 hxmi5";
let originalLength = the_string.length;
let str="";
for(let i=0;i<originalLength;i++)
{
if((the_string.charCodeAt(i) >=48 && the_string.charCodeAt(i) <=58))
// this is where I'll compare if something is a number or a letter
{
//console.log(the_string[i])
 str += the_string[i];
}
}
console.log(str);
let num = Number(str);
console.log(num * originalLength );

