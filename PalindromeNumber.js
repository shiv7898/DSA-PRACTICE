function palindromNumber(a){
    let b=a
    let rev=""
// console.log(a)
for(let i=b.length-1;i>=0;i--){
    rev=rev+b[i]
    console.log(b[i])
}
if(b==rev){
    console.log("yes")

}else{
    console.log("no")
}

}

let a="121"
palindromNumber(a)


// using while loop
function pal(){
    let n=123456
    let rev=0
    while(n>0){
        l=n%10
        rev=rev*10+l
        n=Math.floor(n/10)
    }
    console.log(rev)
}
pal()