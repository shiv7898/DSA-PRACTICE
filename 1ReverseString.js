console.log("hello world")
function reverceString(s){
    const str=s
    console.log(str)
    for(i=str.length-1;i>0;i--){
        // console.log(str[i])
         process.stdout.write(str[i] + " ");

    }
    
}
const str="thisismyfirstcode"
reverceString(str)