// function removeDulcate(){
//    const arr=[1,2,2,6,6,1,1,1,1,1,1,101,0,10,3,3,3,6]

//    let result = []

//    for(let i=0;i<arr.length;i++){
//       let found = false

//       for(let j=0;j<result.length;j++){
//          if(arr[i] === result[j]){
//             found = true
//             break
//          }
//       }

//       if(!found){
//          result[result.length] = arr[i]
//       }
//    }

//    // print
//    for(let k=0;k<result.length;k++){
//       console.log(result[k])
//    }
// }

// removeDulcate()

// function remDu() {
//   const ar = [30, 30, 20, 20, 60, 40, 40, 90, 55, 66];
//   let ar2 = [];

//   for (let i = 0; i < ar.length; i++) {
//     found = false;

//     for (let j = 0; j < ar2.length; j++) {
//       if (ar[i] == ar2[j]) {
//         found = true;
//         break;
//       }
//     }
//     if (!found) {
//       ar2[ar2.length] = ar[i];
//     }
//   }
//   console.log(ar2)
// //   for (let k = 0; k < ar2.length; k++) {
// //     console.log(ar2[k]);
// //   }
// }
// remDu();

// function removeDuplicate(){
//     const a1=[1,2,4,5,5,5,6,2,2,5,6,9,9,7,7,7]
//     const a2=[]
//     for(i=0;i<a1.length;i++){
          
//         for(j=0;j<a2.length;j++){
//             if(a1[i]==a2[j]){
//                 f=true
//                 break
//             }
//         }
//         if(!f){
//             a2[a2.length]=a1[i]
//         }
//     }
//     console.log(a2)
// }
// removeDuplicate()


function removeDuplicate(){
    const a1=[1,1,1,3,3,4,4,5,5,1]
    var a2=[]
    for(i=0;i<a1.length;i++){
        let c=false
        for(j=0;j<a2.length;j++){
            if(a1[i]==a2[j]){
                c=true
                break
            }
        }
        if(c==false){
            a2[a2.length]=a1[i]
        }
    }
    console.log(a2)

}
removeDuplicate()
