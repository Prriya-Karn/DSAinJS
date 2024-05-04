
// //---------------------- Stack start-------------------------------------

// // push operation :- push the element on the top of the stack
// // var stack = [];
// // const pushNum = (num)=>{
// //     stack[stack.length] = num;  
// // }

// // pushNum(5)
// // pushNum(10)
// // pushNum(20)

// // console.log(stack)


// // var stack = [];
// // var len = stack.length;
// // var max = 5;
// // var res
// // const pushNum = (num)=>{
// //         if(len>=max){
// //             console.log(`length more ${num} can't insert in the stack`)
// //         }else{
// //             stack[len] = num;
// //             len+=1
// //         }
// // }

// // const popNum = ()=>{
// //     if(stack.length !== 0){
// //         len-=1;
// //     }else{
// //         console.log("stack is empty now")
// //     } 
    
// // }




// // pushNum(5)
// // pushNum(10)
// // pushNum(20)
// // popNum()
// // pushNum(0)
// // pushNum(1)
// // pushNum(9)
// // popNum()
// // pushNum(1)
// // popNum()
// // pushNum(10)




// // console.log(stack)


// // var res = "";
// // var fres = res.split("");
// // var reslen = fres.length;

// // const PushName = (name)=>{
// //     fres[reslen] = name;
// //     reslen+=1;
    
// // }

// // const PopName = ()=>{
// //     reslen-=1;
// // }

// // PushName("p")
// // PushName("r")
// // PushName("i")
// // PushName("y")
// // PushName("a")
// // PopName()
// // PushName("t")
// // PushName("y")
// // PopName()
// // console.log(fres.join(""));


// // Reverse the string:- first element push in the stack then pop from the stack; 

// // let stack = ""
// // let stackArray = stack.split("");

// // const pushStack = (a)=>{
// //     stackArray[stackArray.length] = a;
// // }

// // const popStack = ()=>{
// //     stack = stack + stackArray[stackArray.length-1]
// //     stackArray.length = stackArray.length-1;
// // }


// // pushStack("p")
// // pushStack("r")
// // pushStack("i")
// // pushStack("y")
// // pushStack("t")
// // popStack();
// // popStack();
// // popStack();
// // popStack();
// // popStack();



// // console.log(stackArray.join(""))
// // console.log(stack)



// // var arr = [11, 2, 32, 3, 41];
// // var len = arr.length;
// // var res = [];

// // const PopStack = ()=>{
// //     // res[0] = arr[arr.length-1]
// //     // res[1] = arr[arr.length-2]

// //     for(var i=0;i<len;i++){
// //         res[i] = arr[arr.length-(i+1)]
// //     }
   
// // }

// // PopStack();
// // PopStack();

// // var temp = 0;
// // for(var i=0;i<res.length;i++){
// //     for(var j=i+1;j<res.length;j++){
// //         if(res[i]<res[j]){
// //             temp = res[i];
// //             res[i] = res[j];
// //             res[j] = temp;
// //         }
// //     }
// // }

// // console.log(res)


// // const res = "priya";
// // console.log(res.includes("a")
// // )

// // console.log(Math.round(3/2))
// // console.log(Math.floor(3/2))
// // console.log(Math.ceil(3/2))

// // let s = "priya"
// // var fres= 0;
// // if(s.length%2!=0){
// //     fres = (s.length)+1;
// //    }

// //    console.log(fres.length)


// // // let s = "abab";
// // // console.log(s.slice(0,2) === s.slice(2,4))
// // let s = "aba";
// // console.log(s.slice(0,2) === s.slice(2,3))
// // // console.log(s.slice(0,res.length) === s.slice(res.length,s.length))

// // console.log(s.substring(1,2))


// // let s = "abab"

// // let repeat = s.repeat(2) //abaaba //abababab

// // let slice = repeat.slice(1,-1);  //baab  //bababa
// // let check = slice.includes(s);
// // console.log(slice)


// // let fres = "priyakarn";
// // let res = fres.split(" ");
// // console.log(res);


// // Day 33:-

// // start (#) six hexadecimal character (RRGGBB) eg:- #223344
// const randomHexColor = ()=>{
//    const character = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
//    let randomString  = "";
//    for(var i=0;i<character.length;i++){
//       randomString += character.charAt(Math.floor(Math.random()*character.length));
//       return randomString.charAt(0);
//    }
//    for(var i=0;i<10;i++){
//       randomString +=Math.floor(Math.random()*10)
//    }

//    return randomString.charAt(0);

// //   var red = Math.floor(Math.random()*10);
// //   var red1 = Math.floor(Math.random()*10);
// //   var green1 = Math.floor(Math.random()*10);
// //   var blue1 = Math.floor(Math.random()*10);
// //   var green = Math.floor(Math.random()*10);
// //   var blue = Math.floor(Math.random()*10);

// //   return `#${red}${red1}${green}${green1}${blue}${blue1}`;

// // const uuid = crypto.randomUUID();
// // return (uuid); // '398de222-5bf9-4754-8e3e-011a55307014'

   
// }

// console.log(randomHexColor());




// // one way to check lowercase or not
// // const character = /[a-z]/;
// // console.log(character.test('hello'))


// // const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
// // console.log(str.charAt(0))

// const randomHexColor = ()=>{
//    // Math.random(0,1) // actual range of Math.random
//    // return (Math.floor(Math.random()*10000000)).toString(16).padEnd(6,0);
//    // or

//    return `#${Math.random().toString(16).slice(2,8).padEnd(6,0)}`;
// }

// console.log(randomHexColor());



