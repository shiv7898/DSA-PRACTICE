// function vovelInString(){
//     let str="aeiouaeiouaeiouiufy  ttrdyfyukjhguih"
//     let count=0
//     for(i=0;i<str.length;i++){
//         if(str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u"){
//           count=count+1
//         }
//     }
//     console.log(count)
// }
// vovelInString()

function countVov(){
    let str="aeiou"
    let count=0
    for(i=0;i<str.length;i++){
        if(str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u"){
           count++
        }
    }
    console.log(count)
}
countVov()