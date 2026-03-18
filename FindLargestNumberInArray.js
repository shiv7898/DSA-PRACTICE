function largestNumberArray(){
   const arr=[18,2,3,5,10,12,7,8]
   var l=arr[0]
   for(let i=0;i<arr.length;i++){
    if(arr[i]>l){
        l=arr[i]
    }


   }
   console.log(l)

}
largestNumberArray()
