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

function arraySort(){
    const arr=[2,3,6,1,8,9]
    let temp
    for(i=0;i<arr.length;i++){
        for(j=i;j<arr.length;j++){
            if(arr[i]>arr[j]){
                temp=arr[i]
                arr[i]=arr[j]
                arr[j]=temp
            }
        }
        // console.log(arr)
    }
    console.log(arr)

}
arraySort()