// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function evenOdd() {
//     rl.question("Enter your value: ", function(input) {
//         let n = Number(input);

//         if (n % 2 === 0) {
//             console.log(`${n} is even number`);
//         } else {
//             console.log(`${n} is odd number`);
//         }

//         rl.close();
//     });
// }

// evenOdd();

const readline=require("readline")
let rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
function evenOdd(){
    rl.question("enter value=",function(input){
        let n=Number(input)
        if(n%2==0){
            console.log("even")
        }else{
            console.log("odd")
        }
    })
}
evenOdd()

