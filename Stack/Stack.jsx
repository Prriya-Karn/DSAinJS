
//---------------------- Stack start-------------------------------------

// push operation :- push the element on the top of the stack
// var stack = [];
// const pushNum = (num)=>{
//     stack[stack.length] = num;  
// }

// pushNum(5)
// pushNum(10)
// pushNum(20)

// console.log(stack)


// var stack = [];
// var len = stack.length;
// var max = 5;
// var res
// const pushNum = (num)=>{
//         if(len>=max){
//             console.log(`length more ${num} can't insert in the stack`)
//         }else{
//             stack[len] = num;
//             len+=1
//         }
// }

// const popNum = ()=>{
//     if(stack.length !== 0){
//         len-=1;
//     }else{
//         console.log("stack is empty now")
//     } 
    
// }




// pushNum(5)
// pushNum(10)
// pushNum(20)
// popNum()
// pushNum(0)
// pushNum(1)
// pushNum(9)
// popNum()
// pushNum(1)
// popNum()
// pushNum(10)




// console.log(stack)


// var res = "";
// var fres = res.split("");
// var reslen = fres.length;

// const PushName = (name)=>{
//     fres[reslen] = name;
//     reslen+=1;
    
// }

// const PopName = ()=>{
//     reslen-=1;
// }

// PushName("p")
// PushName("r")
// PushName("i")
// PushName("y")
// PushName("a")
// PopName()
// PushName("t")
// PushName("y")
// PopName()
// console.log(fres.join(""));


// Reverse the string:- first element push in the stack then pop from the stack; 

// let stack = ""
// let stackArray = stack.split("");

// const pushStack = (a)=>{
//     stackArray[stackArray.length] = a;
// }

// const popStack = ()=>{
//     stack = stack + stackArray[stackArray.length-1]
//     stackArray.length = stackArray.length-1;
// }


// pushStack("p")
// pushStack("r")
// pushStack("i")
// pushStack("y")
// pushStack("t")
// popStack();
// popStack();
// popStack();
// popStack();
// popStack();



// console.log(stackArray.join(""))
// console.log(stack)



// var arr = [11, 2, 32, 3, 41];
// var len = arr.length;
// var res = [];

// const PopStack = ()=>{
//     // res[0] = arr[arr.length-1]
//     // res[1] = arr[arr.length-2]

//     for(var i=0;i<len;i++){
//         res[i] = arr[arr.length-(i+1)]
//     }
   
// }

// PopStack();
// PopStack();

// var temp = 0;
// for(var i=0;i<res.length;i++){
//     for(var j=i+1;j<res.length;j++){
//         if(res[i]<res[j]){
//             temp = res[i];
//             res[i] = res[j];
//             res[j] = temp;
//         }
//     }
// }

// console.log(res)



// Day 26:-
// without recursion

// const fibonacci = (num)=>{
//     var a = 0;
//      var b = 1;
    
//      var c;
// var i = 0;
//      while(i<=num-2){
//         c = a+b; 
//         a=b;
//         b=c
//         i+=1;
        
//      }
// return c
// }

// console.log(fibonacci(3))



// with recursion:-  0 1 1 2 3 5 8-------------
// f(n) = f(n-1) + f(n-2)   //formula
// fibonacci(3) = f(2) + f(1)


// const fibonacci = (num)=>{
     
//     if(num<=1){
//         return num;
//     }else{
//         return fibonacci(num-1) + fibonacci(num-2)
//     }
// }
// console.log(fibonacci(0))  //0
// console.log(fibonacci(1)) // 1
// console.log(fibonacci(3)) // 2
// console.log(fibonacci(5))  // 5
