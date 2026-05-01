// function sortArray(){
//     const arr=[6,5,4,3,7,8,9,0]
    
//     let temp
//     for(i=0;i<arr.length;i++){
//         for(j=i+1;j<arr.length;j++){
//           if(arr[i]>arr[j]){
//               temp=arr[i]
//               arr[i]=arr[j]
//               arr[j]=temp

//           }
          
//         }
        
//     }
//     console.log(arr)
// }
// sortArray()

// function arraySort(){
//     const arr=[2,3,6,1,8,9]
//     let temp
//     for(i=0;i<arr.length;i++){
//         for(j=i;j<arr.length;j++){
//             if(arr[i]>arr[j]){
//                 temp=arr[i]
//                 arr[i]=arr[j]
//                 arr[j]=temp
//             }
//         }
//         // console.log(arr)
//     }
//     console.log(arr)

// }
// arraySort()

// function arraySort(){
//     const a=[2,3,1,5,9,8,7]
//     let temp
//     for(i=0;i<a.length;i++){
//         for(j=0;j<a.length;j++){
//             if(a[i]<a[j]){
//                 temp=a[i]
//                 a[i]=a[j]
//                 a[j]=temp

//             }
//         }
        

//     }
//     console.log(a)
// }
// arraySort()


function sortArray(){
    const arr=[3,4,6,7,2,1]
    let temp

    for(i=0;i<arr.length;i++){
         for(j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                temp=arr[i]
                arr[i]=arr[j]
                arr[j]=temp
            }
        
    }
    }
    console.log(arr)
}
sortArray()