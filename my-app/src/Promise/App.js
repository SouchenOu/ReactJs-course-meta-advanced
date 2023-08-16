// let uploadVideo = new Promise((resolve, reject) => {
//     let completed;

//     completed = true;

//     if(completed)
//     {
//         resolve("Successfuly uploaded.");
//     }else {
//         reject("Sorry, Failed!");
//     }
        

// });

// uploadVideo.then((msg) => {
//     console.log("then is called: " + msg);
// }).catch((msg) =>{
//     console.log("catch is called: " + msg);
// })

// If i have more than one video to upload



let uploadVideo1 = new Promise((resolve, reject) => {
  

        resolve("Successfuly uploaded.");


});
let uploadVideo2 = new Promise((resolve, reject) => {

    
    reject("Sorry, Failed!");
    
        

});
let uploadVideo3 = new Promise((resolve, reject) => {
   
        resolve("Successfuly uploaded.");
   
        

});

Promise.all([uploadVideo1, uploadVideo2, uploadVideo3]).then((msgs) =>{
    console.log(msgs);
}).catch((msgs)=>{
    console.log(msgs);
})