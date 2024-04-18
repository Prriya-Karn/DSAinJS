// Remember:- in DSA we can't use built in function all the code will be written (core code)

// Array element traversing(check out all the element):-

// const arr = [1,2,4,5,3,2,6,7,8];
// for(var i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }


// insert the new element in the array of position 2:-


// const insertNewEle = (arr,p)=>{
//     const newEle = 70;
//     arr.splice(p,0,newEle)  //one line

    // for(var i=arr.length-1;i>0;i--){
    //     var res = arr[i];
    
    //     if(i>=p){
    //         i=i+1;
    //         arr[i]=res;
    //     }else{
    //         i=i+1;
    //         arr[i]=  newEle;
    
    //     }
    //     i=i-1
    
       
    // }


// return arr;    
// }

// console.log(insertNewEle([60,30,10,67,40],2))

// or


// const arr = [10,20,4,5,3,6];
// const p = 2;
// const newEle = 30;

// for(var i=arr.length-1;i>=0;i--){


//     if(i>=p){
//         arr[i+1]=arr[i];
//          if(i==p){
//             arr[i] = newEle
//         }
//     }
    

   
// }

// console.log(arr)



// const arr = [12,13,12];
// arr.push("priya")
// console.log(arr)

// Delete the element from the array:-


// const deleteEle = (arr)=>{
//     console.log(arr)
//     let del = 30;
//     for(var i= arr.length-1;i>0;i--){
//         if(del===arr[i]){
//             del=arr[i+1];
//             arr[i+1]=arr[i+2]
//         }
//     }

//     let res = [...new Set(arr)]

//     return res;
// }
// console.log(deleteEle([10,20,30,12,19,92]));

// const deleteEle = (arr)=>{
//     console.log(arr)
//     let del = 30;
//     for(var i=0;i<arr.length;i++){
//         if(del === arr[i]){
//             arr[i] = arr[i+1]
//         }
//     }
//     return [...new Set(arr)]   //can't use this specially in dsa
// }

// console.log(deleteEle([10,20,30,40,50,60]));


// const deleteEle = (arr)=>{

// for(var i=2;i<=arr.length-2;i++)
// {
//     arr[i] = arr[i+1]
// }
// arr.length = arr.length-1
// return arr
// }
// console.log(deleteEle([10,20,30,40,50,60]));


// Search the element in array

// const SeaarchElem = (arr)=>{
//     let res = false;
//     let item = 10;
//     for(var i=0;i<arr.length;i++)
//     {
//         if(arr[i]== item){
//             res = true;
            
//         }else{
//             res;
           
//         }
//         if(res === true)
//         break;
//     }
//     if(res === true){
//         return `yes ${item} is available in the array`
//     }
//     else{
//         return false;
//     }
    
// }

// console.log(SeaarchElem([10,20,30,40,50,60]))

//leetcode
// var singleNumber = function (nums) {
//     let fres=[]
//     const res = nums.sort((a,b)=>{
//         return a-b;
//     })

//     //res = [1,1,2,2,4]

//     for(var i=0;i<res.length;i++){
//         if(res[i]!=res[i+1]){
//             fres = nums[i+1]
//         }
//     }
//     return fres
// };

// console.log(singleNumber([4,1,2,1,2]))



//Merge two array in dsa(means no shortcut)

// const mergeTwoArray = (arr1,arr2)=>{
//     for(var i=0;i<arr2.length;i++){
//         for(var j=arr1.length;j>0;j--){
//             arr1[j] = arr2[i];
//             break;
//         }
//     }
//     return arr1;
    
// }


// console.log(mergeTwoArray([9,12,13,50],[17,20,30,50,70]))


// but best approach is :- combine array store in third array


// const mergeTwoArray = (arr1,arr2)=>{
//     var res = [];
//     for(var i=0;i<arr2.length;i++){
//        res[i] = arr2[i]
       
//     }
// // res = [17,20,30,50,70];

//     for(var i=0;i<arr1.length;i++){
//          res[res.length] = arr1[i]
//      }
//    return res;
    
// }


// console.log(mergeTwoArray([9,12,13,50],[17,20,30,50,70]))

//  // or shortcut use merge two array:-

// const mergeTwoArray = (arr1,arr2)=>{
//     const res = [...arr1, ...arr2]
//     return res;
    
// }


// console.log(mergeTwoArray([9,12,13,50],[17,20,30,50,70]))




// reverse the array in dsa:-

// const reverseArray = (arr)=>{
//     var res = [];
    
//     for(var i=arr.length-1;i>=0;i--){
//         for(var j=res.length;j>=0;j--){
//             res[j] = arr[i]
//             break;
//         }
//     }

//     return res;
// }


// console.log(reverseArray([10,20,30,40]))

// or shortcut use:-

// const reverseArray = (arr)=>{
//    const res = arr.reverse();

//     return res;
// }


// console.log(reverseArray([10,20,30,40]))




// sort the array in DSA:-

// const sortArray = (arr)=>{
//     let temp = 0;

    // for(var i=0;i<arr.length;i++)
    // {
    //     let a = 0;
    //     for(var j=1;j<arr.length;j++)
    //     {

    //         if(arr[a]>arr[j]){
    //             temp = arr[a];
    //             arr[a] = arr[j]
    //             arr[j] = temp;
    //         }
    //         a+=1;
    //     }
        
    // }

// or


//     for(var i=0;i<arr.length;i++)
//     {
       
//         for(var j=0;j<arr.length;j++)
//         {

//             if(arr[j]>arr[j+1]){
//                 temp = arr[j];
//                 arr[j] = arr[j+1]
//                 arr[j+1] = temp;
//             }
           
//         }
        
//     }



//     return arr;
// }

// console.log(sortArray([400,3900,0,-2]));
