function secLa(){
    const arr=[9,1,2,3,4,8]
    let la=-Infinity
    let sl=-Infinity
    
    for(i=0;i<arr.length;i++){
        if(arr[i]>la){
           sl=la
           la=arr[i]
        }else{
            if(arr[i]>sl && arr[i]!==la){
                sl=arr[i]
            }
        }
    }
    console.log(sl)
}
secLa()