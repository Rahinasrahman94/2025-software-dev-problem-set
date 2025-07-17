const userPromise = new Promise((resolve,reject) =>
{
    resolve("I got user details")
})

userPromise.then((msg)=>{
    console.log("User Details : ",msg)
    new Promise((resolve,reject) =>{
        reject("I got user details")
    }).then((msg)=>{
       console.log("User Post:",msg);
        return new Promise((resolve, reject) => {
            resolve("User Images Retrieved")
        }).then((msg)=>{
            console.log("Hello here is the image:",msg);
        }).catch((reson)=>{
            console.log("Reason:",re)
        });
    })
})