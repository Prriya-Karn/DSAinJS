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



// Revision

// const swap = (arr,l,mid,h)=>{
   
//    var temp;
//    for(l;l<=h;l++){
//       mid =  l+1;
//       for(mid;mid<=h;mid++){
//          if(arr[l]>arr[mid]){
//             temp = arr[mid]
//             arr[mid] = arr[l]
//             arr[l] = temp
//          }
//       }
//    }
//    return arr;
// }

// const mergeSort = (arr,l,h)=>{
//    if(l!=h){
//       var mid = Math.floor((l+h)/2);
//       mergeSort(arr,l,mid);
//       mergeSort(arr,mid+1,h);
//       swap(arr,l,mid,h);
   
//       return arr;
//    }else{
//       return l;
      

//    }
   
// }





// let arr = [12,11,13,5,6,7,0,200,13,2,7];
// console.log(mergeSort(arr,0,arr.length-1));


















//---------------------- learning recursion working flow:-
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


// var i = 2
// var arr = [1,2]
// var climbStairs = function(n) {
//     if(i>=n) return arr[n-1]
   
//    arr[i] = arr[i-1] + arr[i-2]
//    i++
//    return climbStairs(n)    
// };   


// console.log(climbStairs(5))




// Queue FIFO:-


// var arr = []

// var front = 0
// var rear = 0
// var count = 0


// const push = (num)=>{
// arr.length = 5;
// n = arr.length;
//     if(count>=n)
//         return "queue is full"
    
//     arr[rear%n] = num
//         count++
//         rear++
//         arr.length = rear
//         return arr
// }

// const pop = ()=>{
//     if(count<=0){
//         return "queue is empty now"
//     }
//  arr[front%n] = -1
//  front++ 
//  count--

//  return arr
// }


// const top = ()=>{
//     // top is always those element that is first enter in the array
//     // and in short way front is always top value
//     var t = arr[front]
//     return t
// }


// console.log(arr)
// console.log(push(10))
// console.log(push(20))
// console.log(push(30))
// console.log(push(40))
// console.log(push(50))
// console.log(push(60))

// console.log(top())
//  console.log(pop())
// console.log(push(60))
// console.log(top())
// console.log(pop())
//  console.log(push(0))
// console.log(pop())
// console.log(pop())
// console.log(push(10))

// for(var i=front+1;i<arr.length+2;i++){
//     if(arr[i%n]!=-1){
//         console.log(arr[i%n])
//     }
  
// }


// console.log(pop())
// console.log(pop())
// console.log(pop())
// console.log(pop())
// console.log(pop())
// console.log(pop())

// console.log(0%5)
// console.log(5%5)






// const generateBarChart = (arr)=>{
//     // var takeData = 0;
//     // var i;
//     // while(takeData<arr.length){
//     //     i = takeData
//     //     var star = "";
//     //     for(var a = 1;a<=arr[i];a++){
//     //         star = star + "*"
//     //     }
//     //     console.log(i+1 + ":" + star)
//     //     takeData++
//     // }


//     // or

// var obj = {}
// var stararr = []

// for(var i=0;i<arr.length;i++){
//     var j = 0;
//     var star = ""
//   while(j<arr[i]){
//     star = star + "*"
//     j++
//   }
//   stararr.push(star)
// }

// for(var i=0;i<arr.length;i++){
//     obj[i+1] =  stararr[i] 
// }


// return obj;

// }

// console.log(generateBarChart([5,3,9,2]))

// 1: *****
// 2: ***
// 3: ********* 
// 4: **

// const obje = {

// }

// obje[0]="priya"
// console.log(obje)




// decimal(base 10) to binary base(2) conversion

// const binary = (num)=>{
//     var fres = []
//     var i = 0;
//     var res;
//     var a = 1;
//     while(a>0){
//         res = num%2
//         a = Math.floor(num/2)
//         fres[i] = res
//         i++
//         num = a
//     }

//     for(var j=fres.length-1;j>=0;j--){
//         console.log(fres[j])
//     }
// }

// binary(11)



// binary (base 2) to decimal

// const decimal = (num)=>{
//     var arr = []
//     var i = 0;
//     var x;
//     var fres;
//     var result = 0;
//     while(num!=0){
//         x = num%10
//         num = Math.floor(num/10)
//         arr[i] = x
//         i++
//     }

//     for(var j= arr.length-1;j>=0;j--){
//         fres = 2**j
//         result = result + arr[j]*fres
//     }
//     console.log(result)
// }


// decimal(111)






// var arr1 = [2,20,1];
// const res = arr1.sort((a,b)=>{
//    if(a>b){
//       return b-a
//    }
// })

// console.log(res)







//---------------------------------- Linked List------------------------------------

// Array have fixed size. 
// In memory Element stores in the contiguous location 
// we cannot increase or decrease size of the array.
// cannot add more memory because array have fixed size.
// Array is easy to traverse indexed because it have contiguous memory location.

// while in Linkedlist data structure element not store in the memory at contiguous 
// location.
// in linkedlist we can add element remove element.




// creating the node:-

// const node1 = {
//     data:10,
//     next:null
// }

// const node2 = {
//     data : 20,
//     next :  null
// }

// const node3 = {
//     data : 30,
//     next : null
// }

// node1.next = node2.data;
// node2.next = node3.data;

// console.log(node2);


// // Function to create a new node
// function createNode(data) {
//     return {
//       data: data,
//       next: null
//     };
//   }
  
//   // Function to append a node to the list
//   function append(head, data) {
//     const newNode = createNode(data);
//     if (head === null) {
//       return newNode; // If the list is empty, the new node becomes the head
//     } else {
//       var current = head;
//     //   return head.next,current.next
//       while (current.next !== null) {
//         current = current.next; // Traverse to the end of the list
//       }
//       current.next = newNode; // Link the last node to the new node
//     }
   
//    return head;
//   }
  
//   // Function to print the list
//   function printList(head) {
//     let current = head;
//     while (current !== null) {
//       console.log(current.data);
//       current = current.next;
//     }
//   }
  
  // Using the functions to create and manage the linked list
//   let head = null;
// head = append(head, 10);
// head = append(head, 20);
// head = append(head, 30);
// console.log(head)
  
// printList(head); // Output: 10, 20, 30
  


// In js linked list very important note:-   

// The key point is that current is initially set to reference the same
//  object as head. When we modify current.next, the changes are reflected in 
//  head because both current and head are references to the same object. 



// const createNode = (data)=>{
//     return{
//         data : data,
//         next : null
//     }
// }



// const linkedlist = (head,data) =>{
//   let newNode = createNode(data);
//   if(head==null){
//     return newNode;
//   }
//   else{
//     let current = head;
//     while(current.next!==null){
//       current = current.next;
//     }
//     current.next = newNode;
    
//   }
//   return head;
// }


// const printEle = (head)=>{
//   let current = head;
//   while(current!=null){
//     console.log(current.data);
//     current = current.next;
//   }
 
// }

// let head = null
// head = linkedlist(head,10);
// head = linkedlist(head,20);
// head = linkedlist(head,30);
// console.log(head);


// printEle(head);






//Question:-
// conver the array(fixed size) into linked list and 
// return the head in the linked list.


// const createNode = (data)=>{
//   return{
//     data:data,
//     next:null
//   }
// }

// const linkedList = (head,data)=>{
//   let newNode = createNode(data);
//   if(head==null){
//     return newNode;
//   }else{
//     let current = head;
//     while(current.next!=null){
//       current = current.next;
//     }
//     current.next = newNode;
//   }

//   return head;

// }

// let searchEle = 100;

// const printList = (head)=>{
//   let count = 0;
//   let res;
//   if(head!=null){
//     let current = head;
//     while(current!=null){
//       if(current.data==searchEle){
//         console.log(`yes ${searchEle} is available in list`);
//         break;
//       }
//       // count++;
//       current = current.next;
//      }
//     //  console.log(head.data);
//   }
//   // console.log(`length of the linked list is : ${count}`);
// }





// let arr = [12,1,3,8,10,20];
// let head = null;

// for(var i=0;i<arr.length;i++){
//   data = arr[i];
//   head = linkedList(head,data);
// }

// printList(head);



// //Question:-
// Delete the head and tail of the ll

const createNode = (data)=>{
  return{
    data : data,
    next : null
  }
}



const linkedList = (head,data)=>{
  var newNode = createNode(data);
  
  if(head==null){
    return newNode;
  }
  else{
    let current = head;
    while(current.next!=null){
      current = current.next;
     
    }
    current.next = newNode;
  
   }

return head;
}


const print = (head)=>{
  var count = 0;
  let current = head;

  while(current!=null){
    console.log(current.data)
    count++;
    current = current.next;   
  }
  console.log(count)
}

let head = null;
head = linkedList(head,10);
head = linkedList(head,20);
head = linkedList(head,30);
head = linkedList(head,40);


const deleteKthEle = (head,k)=>{
  let temp = head;
  let count = 1;
  while(count!=k){
    temp = temp.next;
    count+=1;
  }
  temp.data = temp.next.data;
  temp.next = null;
  return head
}

head = deleteKthEle(head,4)

console.log(head)




// console.log(head)

// const deleteTail = (head)=>{
//   if(head==null || head.next==null) return null;
//   let temp = head;
//   while(temp.next.next!=null){
//     temp = temp.next;
//   }
//   temp.next = null;
//   return head;    //because temp and head refer same object and changing temp also reflect in head.
// }

// head = deleteTail(head);
// console.log(head);


// const deleteHEAD = (head)=>{
//   if(head==null) return head;
//   let temp = head;
//   delete(temp)
//   head = head.next;
//   return head;
// }
// head = deleteHEAD(head);
// console.log(head)

print(head);







