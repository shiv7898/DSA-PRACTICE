// function flattenArray(){
//     const arr=[1,2,[4,5,[6,7]],[9]]

//     const fl=[]
//     function solve(input){
//         for(let i=0;i<input.length;i++){
//             if(Array.isArray(input[i])){
//                 solve(input[i])

//         }else{
//             fl[fl.length]=input[i]
//         }

//         }
        

//     }
//     solve(arr)
//     console.log(fl)
// }
// flattenArray()
// function flattenArray() {
//     const arr = [1, 2, [4, 5, [6, 7]], [9]];
//     const fl = [];

//     function solve(input) {
//         for (let i = 0; i < input.length; i++) {
//             if (Array.isArray(input[i])) {
//                 solve(input[i]);
//             } else {
//                 fl[fl.length] = input[i];
//             }
//         }
//     }

//     solve(arr);
//     console.log(fl);
// }

// flattenArray()


function flattenArray(){
    const arr=[1,2,[3,4,[5,6],[8,9]]]
    const fl=[]
    function solve(input){
        for(let i=0;i<input.length;i++){
            if(Array.isArray(input[i])){
                solve(input[i])
            }else{
                fl[fl.length] = input[i]
            }
        }
    }
    solve(arr)
    console.log(fl)
}
flattenArray()