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




// const palindrome = (name)=>{
//     const res = name.split("").reverse();
//     if(res.join("")===name){
//         return true
//     }else{
//         return false
//     }

//   }

//   console.log(palindrome("priya"));




// const countVowels = (vowels)=>{
//     vowels = vowels.toLowerCase()
//     let count = 0;
//     for (vow of vowels){
//         if(vow.includes("a")|| vow.includes("e") || vow.includes("i")
//             || vow.includes("o") || vow.includes("u")){
//        count +=1
//        }
//     }

//     return count
// }



// console.log(countVowels("HElloo World"))    //4
// console.log(countVowels("PRIYA KARN"))







// const countVowels = (vowels)=>{
//     vowels = vowels.toLowerCase();
//     let vowArray = ["a","e","i","o","u"]
//     let count = 0;
//     const splitWord = vowels.split("");
//     for(v of splitWord){
//         if(vowArray.includes(v) || vowArray.includes(v) || vowArray.includes(v) || vowArray.includes(v) || vowArray.includes(v)){
//             count+=1;
//         }
//     }

//     return count;
//     }


// console.log(countVowels("HElloo World"))    //4
// console.log(countVowels("PRIYA KARN"))





// const counter = {
//     name : "priya",
//     sum :  function add(){
//         return `${2+3} and ${this.name}`
//     }
// }

// console.log(counter.name)
// console.log(counter.sum())


// const reverseString = (reverStr)=>{
//     const res = reverStr.split('').reverse()
//     return res.join("")
// }
// console.log(reverseString("hello"))


// Stack implementation:-

// let arr = [10,20,30];
// let top = arr.length-1;
// let maxSize = 6;


// const push = (num)=>{
//     if(arr.length<maxSize){
//         top = top+1;
//         arr[top] = num
//         return arr;
//     }else{
//         return "stack is full"
//     }

// }

// const pop = ()=>{
//     if(top>=0){
//         arr.length = arr.length-1
//         top-=1
//         return arr
//     }
//     else{
//         return "stack is empty"
//     }

// }

// console.log(push(40))
// console.log(push(50))
// console.log(pop())
// console.log(push(60))
// console.log(push(60))
// console.log(pop())



// Searching :- linear searching and binary searching(used for large amount of data search)


// 1. linear search:- is used to searching for small amount of data
// we have to find particular element and their location from the array?.......

// const arr = [10,20,30,40,50]

// const searchElement = (num)=>{
//     for(var i=0;i<arr.length;i++){
//         if(arr[i] === num){
//             var res = `${num} is found and their location is ${i}`
//             break
//         }else{
//             res = "element is not found"
//         }
//     }
//     return res
// }

// console.log(searchElement(0))





// 2. binary search :- disadvantage:- data should be in order asc or desc. then work

// const arr = [30,10, 50, 40, 20];   // find = 30 by binary search
// arr.sort()
// const searchElement = (num) => {
//     var flag = 0;
//     var lower = 0;
//     var upper = arr.length - 1

//     for (var i = 0; i < arr.length; i++) {
//         let middle = Math.round((lower + upper) / 2)
//         if (arr[middle] === num) {
//             flag = 1;
//             break;
//         }

//         if (num > arr[middle]) {
//             lower = middle + 1
//         }else{
//             upper = middle-1
//         }
//     }

//     if (flag === 1) {
//         return `${num} is found`
//     } else {
//         return "not found"
//     }
// }


// console.log(searchElement(20))





// Sorting:-

// const sorting = (arr)=>{
//     let temp;
//     for(var i=0;i<arr.length;i++){
//         for(var j=i+1;j<arr.length;j++){
//             if(arr[i]>arr[j]){
//                 temp = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = temp
//             }
//         }
//     }
//     return arr
// }

// console.log(sorting([30,10,50,40,20]))




// type 1:- bubble sort:-

// const bubbleSort = (arr)=>{
//     let currSize = arr.length;
//     let temp;
//     for(var i=0;i<currSize;i++){
//         if(arr[i]>arr[i+1]){
//             temp = arr[i+1]
//             arr[i+1] = arr[i]
//             arr[i] = temp
//         }
//         if(i==currSize-1){
//             i=-1
//             currSize -=1
//         }
//     }

//     return arr;
// }

// console.log(bubbleSort([10,50,100,99,30,40,20]))




// Selection sort:-

// const SelectionSort = (arr)=>{
//     let temp;
//     let m;

//     for(var i=0;i<arr.length-1;i++){
//         m = i;

//         for(var j=i+1;j<arr.length;j++){
//             if(arr[m]>arr[j]){
//                 m = j
//             }
//         }

//         if(m!=i){
//             temp = arr[m]
//             arr[m] = arr[i]
//             arr[i] = temp
//         }
        
//     }

//     return arr
// }
// console.log(SelectionSort([7,6,3,4,1]))




// insertion sort:-

// const insertionSort = (arr)=>{
//     let temp;

//     for(var i=1;i<arr.length;i++){
//         for(var j=i-1;j>=0;j--){
//             if(arr[i]<arr[j]){
//                 temp = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = temp
//             }
//         }

//         arr[j-1] = temp
//     }
// }
// console.log(insertionSort([23,1,10,5,2]))





// const insertionSort = (arr)=>{
//     let temp;
//     for(var i=1;i<arr.length;i++){
//         let a = i
//         let num = arr[i]
//         for(var j=i-1;j>=0;j--){
    
//          if(num<arr[j]){
//             temp = arr[i]
//             arr[i] = arr[j]
//             arr[j] = temp
//          }
//          i=i-1
         
            
//         }

//         i = a
        
//     }

//     return arr;
    
// }

// console.log(insertionSort([5, 4, 3, 2, 1]))



// Merge Sort:- again do after 3 days without see the code 

// const merge = (arr,low,mid,high)=>{
//     let left = low
//     let right = mid+1
//     let temp = []
//     let i = 0
//     while (left <= mid && right <= high) {
//         if(arr[left]<=arr[right]){
//             temp[i] = arr[left]
//             left++
//         }else{
//             temp[i] = arr[right]
//             right++
//         }

//         i++
//     }

//     while(left<=mid){
//         temp[i] = arr[left];
//         left++
//         i++
//     }

//     while(right<=high){
//         temp[i] = arr[right]
//         right++
//         i++
//     }
//     for (let j = 0; j < temp.length; j++) {
//         arr[low + j] = temp[j];
//     }

// }




// const mergeSort = (arr,low,high)=>{

//     if(low!=high){
//         let mid = Math.floor((low + high)/2)
//         mergeSort(arr,low,mid)
//         mergeSort(arr,mid+1,high)
    
//         merge(arr,low,mid,high)
//     }
//     else{
//         return low
//     }
   
// }


// let arr = [12,11,13,5,6,7,0]
// mergeSort(arr,0,arr.length-1)

// console.log(arr)





// learning recursion working flow:-
// eg:- print 0 to 3
// var count = 0;
// const recursionFun = ()=>{
//     if(count === 4) return
//     console.log(count)
//     count++

//     recursionFun()
// }

// recursionFun()



// Basic recursion problem:-

// 1. print name n times


// const printName = (count,n)=>{
//     if(count==n) return
//     console.log(`${count+1 + " priya karn"}`);
//     count++

//     printName(count,n)
// }

// printName(0,5);



// 2. print linearly from 1 to n

// const printNum = (i,n)=>{
//     if(i>n) return
//     console.log(i)
//     printNum(i+1,n)
// }

// printNum(1,10)



// 3. print n to 1

// const printNum = (n,i)=>{
//     if(n<i) return
//     console.log(n)
//     printNum(n-1,i)
// }

// printNum(10,1)


// 4. print linearly from 1 to n  (but by Backtracking)

// const printNumBack = (i,n)=>{
//     if(i<=0) return
//     printNumBack(i-1,n)
//     console.log(i)
// }

// printNumBack(5,5)



// 5. print linearly from n to 1  (but by Backtracking)

// const printNumBack = (n,i)=>{
//     if(i>n) return
//     printNumBack(n,i+1)
//     console.log(i)
// }

// printNumBack(5,1)