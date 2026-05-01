// function secLa(){
//     const arr=[9,1,2,3,4,8]
//     let la=-Infinity
//     let sl=-Infinity
    
//     for(i=0;i<arr.length;i++){
//         if(arr[i]>la){
//            sl=la
//            la=arr[i]
//         }else{
//             if(arr[i]>sl && arr[i]!==la){
//                 sl=arr[i]
//             }
//         }
//     }
//     console.log(sl)
// }
// secLa()


// function secondLarge(){
//     const a=[1,2,3,4,5,6]
//     let large=-Infinity
//     let secondLarge=-Infinity
//     for(i=0;i<a.length;i++){
//         if(a[i]>large){
//             secondLarge=large
//             large=a[i]
//         }else{
//             if(a[i]>secondLarge &&  a[i] !== large){
//                 secondLarge=a[i]
//             }
//         }

//     }
//     console.log(`secondLarge${secondLarge}`,`large${large}`)
// }
// secondLarge()


function secondLarge(){
    const arr=[1,2,34,4455,4,56,]
    let large=-Infinity
    let secondLarge=-Infinity
    for(i=0;i<arr.length;i++){
        if(arr[i]>large){
            large=arr[i]
        }else{
            if(arr[i]>secondLarge && arr[i]!==large){
                secondLarge=arr[i]
            }
        }
    }
    
    console.log(large)
    console.log(secondLarge)
}
secondLarge()