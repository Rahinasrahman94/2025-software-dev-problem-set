
// function greet(name)
// {
//     console.log("U:Hi " +name);

const { useCallback } = require("react");

//     setTimeout(()=>{console.log("D:how can I help u?")},3000)
//     setTimeout(()=>{console.log("D:you will be alright")},6000)
// }
// greet("Rahina"); 
//----------------//
// function first(callback)
// {
//     setTimeout(() => {
//         console.log("first") 
//         callback()
//         },3000);
// }
// function second(callback)
// {
//     setTimeout(()=>{console.log("second")
//     callback();
//     },3000);
// }
// function third()
// {
//     setTimeout(()=>{console.log("third")},3000);
// }

// first(()=>second(() => third()))


function executeCallBack(num,callback)
{
    let result = num+5;

   callback(result);

}
function second(result)
{
console.log(result);
}
executeCallBack(15,second);