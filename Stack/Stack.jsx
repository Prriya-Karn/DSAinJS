
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


// const res = "priya";
// console.log(res.includes("a")
// )

// console.log(Math.round(3/2))
// console.log(Math.floor(3/2))
// console.log(Math.ceil(3/2))

// let s = "priya"
// var fres= 0;
// if(s.length%2!=0){
//     fres = (s.length)+1;
//    }

//    console.log(fres.length)


// // let s = "abab";
// // console.log(s.slice(0,2) === s.slice(2,4))
// let s = "aba";
// console.log(s.slice(0,2) === s.slice(2,3))
// // console.log(s.slice(0,res.length) === s.slice(res.length,s.length))

// console.log(s.substring(1,2))


// let s = "abab"

// let repeat = s.repeat(2) //abaaba //abababab

// let slice = repeat.slice(1,-1);  //baab  //bababa
// let check = slice.includes(s);
// console.log(slice)


// let fres = "priyakarn";
// let res = fres.split(" ");
// console.log(res);




// Day 31:-  
// passcontain[at least(one lowercase,one Uppercase,length(8),return true else false];
//numeric

const simplePasswordValidator = (pass)=>{
//  a=97,z=122; A = 65, Z = 90;
// var res = pass.split("");
var hasUpperCase = false;
var hasLowerCase = false;
var hasNumber = false;

for(ele of pass){
   if(ele.charCodeAt(0)>=97&&ele.charCodeAt(0)<=122){
      hasLowerCase = true;
   }
   if(ele.charCodeAt(0)>=65 && ele.charCodeAt(0)<=90){
      hasUpperCase = true;
   }
   if(!isNaN(Number(ele))){
      hasNumber = true;
   }
}

if(!hasLowerCase || !hasUpperCase || !hasNumber || pass.length>8){
   return false;
}else{
   return true;
}


}

console.log(simplePasswordValidator("fjdhfkjaklklf")); //false
console.log(simplePasswordValidator("P18priyaa")); //true

