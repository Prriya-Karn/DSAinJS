// --------------------------Revision section start------------------------------

const { type } = require("@testing-library/user-event/dist/type");

// alert("priya karn");
// console.log("Priya Karn");



// VARIALBLE IN JAVASCRIPT

// var myName = "priya karn";
// variable(key) name = value
// document.write(myName);
// document.write("<br>");

// valid and invalid variable
// var _myName = "priya";
// document.write(_myName); //valid

// document.write("<br>")

// var $myName = "php";
// document.write($myName);//valid

// var %myName = "python";
// document.write(%myName); //invalid

// var 1myName = "omg";
// document.write(1myName); //invalid

// var _my Name = "priya";
// document.write(_my Name);//invlaid

// var _1my__Name ="thapa";
// document.write( _1my__Name) //valid


// DATATYPES IN JAVASCRIPT

// six data types that are primitive
// 1. undefined:typeof instance === "undefined"
// 2. boolean :typeof instance === "boolean"
// 3. number :typeof instance === "number"
// 4. string :typeof instance ==="string"
// 5. bigint : typeof instance === "bigint"
// 6. symbol : typeof instance === "symbol"


// var myName = "priya karn";
// document.write(myName )
// var a = typeof(myName);
// document.write( a);

// document.write("<br>");

// var myage = 22;
// document.write(myage);

// document.write("<br>");
// b = typeof(myage);
// document.write(b);

// document.write("<br>");
// var iampriya = true;
// document.write(typeof(iampriya));

// document.write("<br>");
// var existhenahikrta; //hai he nahi exist krta he nahi
// console.log(typeof(existhenahikrta));
// console.log(existhenahikrta)
// document.write("<br>");
// var kuchkammkanahi = null; // means hain to exist to krta hai
// // lekin kuch kaam ka nahin hai
// console.log(typeof(kuchkammkanahi));  // // bug

// Question:- can we assign the value undefined and null??... 
// So answer is true 

// let names = undefined;
// console.log(names)

// //Challenge time
// var Challenge = 10 + "20";
// document.write(Challenge)
// document.write(typeof(Challenge))
// document.write("<br>");

// var Challenge = 9 -  "5" //bug
// document.write(Challenge)
// document.write(typeof(Challenge))
// document.write("<br>");

// var Challenge = " " + " ";
// document.write(Challenge)
// document.write(typeof(Challenge))
// document.write("<br>");

//  var Challenge = " " + 0;
// document.write(Challenge)
// document.write(typeof(Challenge))
// document.write("<br>");

// var Challenge = true + true;
// document.write(typeof(Challenge))
// document.write(Challenge)
// document.write("<br>");




// var Challenge = true + false
// document.write(Challenge)
// document.write(typeof(Challenge))
// document.write("<br>");

// var Challenge = " " + true
// document.write(Challenge)
// document.write(typeof(Challenge))
// document.write("<br>");

// var Challenge = " " - true
// document.write(Challenge)

// document.write("<br>");

// var Challenge = "1" - false
// document.write(Challenge)
// document.write(typeof(Challenge))
// document.write("<br>");

// var Challenge = 1 - null 
// document.write(Challenge)
// document.write(typeof(Challenge))
// document.write("<br>"); 

// var Challenge = 1 - undefined
// document.write(Challenge)
// document.write(typeof(Challenge))
// document.write("<br>");

// var Challenge = true + null;
// document.write(Challenge)
// document.write(typeof(Challenge))
// document.write("<br>");

// var Challenge = true + undefined
// document.write(Challenge)
// document.write(typeof(Challenge))
// document.write("<br>");

// var Challenge;
// document.write(typeof(Challenge))
// document.write(Challenge)

// var Challenge = NAN;
// document.write(isNaN(Challenge)) //answer true

// var a = NAN;
// var b = NAN
// document.write(a===b) //answer is false because NAN not a value and not a DATATYPES

// document.write(number.NAN===NAN) //false
// document.write(isNaN(NAN)) // answer is true
// document.write(isNaN(number.NAN)) //answer is true
// document.write(number.isNaN(NAN)) //answer is true

// - mein string ke sath number answer deta hai aur uska typeof number hota hai string ko bhi number mein leleta hai



// var a = "priya" - "karn"
// document.write(a)
// document.write(typeof(a))




// NAN(not a number) nan is a property of the global object.
// in other words it is a variable in global scope.
// NAN not a value and not a DATATYPES


// document.write(typeof(NAN))
// var number = 7897968787
// var name = "priya karn"



// document.write(isNaN(number));
// document.write(isNaN(name));


// //condition true hua to he ifcondition chlta hai
// if(isNaN(name)){
//     document.write("priya")
// }

// else{
//     document.write("himmu")
// }




//check phone number or not if not then print enter phone number



// document.write(isNaN(true))

// var a = 8998787;
// if(isNaN(a)){
//     document.write(window.prompt("enter your phone number"));
// }
// else{
//     document.write(`your phone number is ${a}`);
// }




// var a = "gjfshjh"
// document.write(isNaN(a))

// document.write("<br>");

// if(isNaN(a)){
//     document.write("you not enter your phone number")
// }
// else{
//     document.write("Enter your phone number")
// }


// Expression = operator + operand

// // 1. assignment operator
var a = 4;
var b = 2;

// document.write(a==b)
// document.write("<br>")
// // document.write("is a and b both are equal " + a==b) // this way of write in javascript is wrong because of + operator for concatination 
// document.write(`is a and b both are equal : <br> ${a==b}`);

// // 2. arithmetic operator
// var a = 2;
// var b = 3;
// document.write("<br>")
// document.write(a+b);
// document.write("<br>")
// document.write(a-b);
// document.write("<br>")
// document.write(a*b);
// document.write("<br>")
// document.write(a/b);
// document.write("<br>")
// document.write(`remainder operator is : ${b%a}`)
// document.write("<br>")

// // 3. increment and decrement operator

// // x++ ++x  x-- --x
// //  postfix x++

// var num = 15;
// var myNum = num++ +2; //myNum mein original value rhega baad mein jaake increment ho rha 
// document.write(num);

// document.write("<br>")
// document.write(num++);

// document.write("<br>")
// document.write(myNum);
// document.write("<br>")

// // // prefix ++x
// var num = 15;
// var myNum = ++num + 3;
// document.write(num);
// document.write("<br>");
// document.write(myNum);
// document.write("<br>");

// //postfix x--
// var num = 15;
// var myNum = num-- - 3;//(15-3)
// document.write(num); //14 
// document.write("<br>");
// document.write(myNum); //12
// document.write("<br>");

// //prefix --x
// var num = 15;
// var myNum = --num - 3;//(14-3)
// document.write(num); //14
// document.write("<br>");
// document.write(myNum); //11
// document.write("<br>");






// 4. Comparison operator
// == != >< 
// var a = 30;
// var b = 10;
// document.write(a==b);
// document.write("<br>");
// document.write(a!=b);
// document.write("<br>");
// document.write(a>=b)//greater than
// document.write("<br>");
// document.write(a<=b)//less than
// document.write("<br>");

// // 5. Logical operator
// // logical conjunction = AND(&&), logical disjunction = OR(||),  NOT(!)
// var a = 30;
// var b = -20;

// document.write(a>b && b>0);
// document.write("<br>");
// document.write(a>b || b>0 || b<0);
// document.write("<br>");

// var a = 30;
// var b = -20;

// document.write(a>b && b>0 || b<0);
// document.write("<br>");

// document.write(a>b || b>0 && b<0);
// document.write("<br>");

// // var a = 30;
// // var b = -20;
// // document.write(a>0 || b<0);
// // document.write("<br>");

// // document.write(!(a>0 || b<0));
// // document.write("<br>");
// // document.write(!(a>b || b>0 && b<0));
// // document.write("<br>");
// // document.write(!true)
// // document.write("<br>");
// // document.write(!false);
// // document.write("<br>");

// // 6. String operator
// // i) concatination operator(+)

// var myName = "Priya";
// document.write(myName + " karn");
// document.write("<br>");
// document.write(myName + " jaiswal");
// document.write("<br>");
// document.write(myName + " kumari");
// document.write("<br>");

// // Challenge time
// 0. WHAT WILL BE THE OUTPUT OF 3**
// // 1. WHAT WILL BE THE OUTPUT, WHEN WE ADD A NUMBER AND A STRING?..
//  var a = "priya" + 51;
//  document.write(a + "Karn");
//  document.write("<br>");
 
// //2. WRITE A PROGRAM TO SWAP TWO NUMBERS?...


// var c;
// var a = 3;
// var b = 2;


// var c = a;
// var a = b;
// var b = c;
// document.write(`a = ${a}`);
// document.write("<br>");
// document.write(`b = ${b}`);
// document.write("<br>");

// 3. WRITE A PROGRAM TO SWAP TWO NUMBERS WITHOUT USING THIRD VARIABLE?...


// a=1
// b=20

// a = a-b
// b = a+b
// a = b-a

// document.write(`a is ${a} and b is ${b}`)
// document.write("<br>")

// // this is my logic
// if(a>b){
//     document.write(`a is ${b}`) //a=b
//     document.write("<br>")
//     document.write(`b is ${a}`)
// }
// else{
//     document.write(`b is ${a}`)//b=a
//     document.write("<br>")
//   document.write(`a is ${b}`)
// }

// another logic

// var a = 4;         // OUTPUT is a = 10 and b = 4
// var b =10;

// var a = a+b; //a=14
// var b = a - b; // b=4
// var a = a-b; // a=10;

// document.write("the value of a is" + a);
// document.write("<br>");
// document.write("the value of b is " + b);

//difference between == and ===

// var a = 5;
// var b = "5";
// document.write(typeof(a));
// document.write("<br>");

// document.write(a===b);
// document.write("<br>");
// document.write(a==b);

// // control statement & loops
// if else
// switch statement
// while loop 
// do-while loop
// for loop 
// for in loop 
// for of loop 
// conditional(ternary) operator

// if else statement
// var tom = "rain";

// if(tom == "rain"){
//     document.write("take a raincot for tomorrow");
// }
// else{
//     document.write("dont need to take raincot");
    
// }

//What is truthy and falsy values
// in javascript we have total 5 falsy values

// 0,"",undefined,null,NaN,false is false

// var a = NaN;
// document.write(isNaN(a));


// var age = 10;
// if(age >= 18){
//     document.write("can give the vote");
// }
// else{
//     document.write("cannot give the vote");
// }


// var ankita = 90;
// if(ankita>=80){
//     document.write("i will gift her a car");
    
// }

// else{
//     document.write("i wouldn't gift her a car");
// }

// var ankita = 100;
// ankita>=80 ? document.write("i will gift her a car"):  document.write("i wouldn't gift her a car");

// var ankita = "";
// if(ankita>=100){
//      document.write("i will gift her a namkeen");
// }
// else if(ankita>=80){
//      document.write("i will gift her a icecream");
// }
// else if(ankita>=70){
//      document.write("i will gift her a chocolate");
// }
// else{
//      document.write("i wouldn't gift her a any gift");
// }


var number = 9789;

// if(isNaN(number)){
//     document.write(window.prompt("please enter the number"))
// }

// else{
//     document.write(`your number is ${number}`)
// }


// isNaN(number)?document.write(window.prompt("please enter the number")):document.write(`your number is ${number}`)

// isNaN(number)?document.write(window.prompt("please enter the number")):document.write(`your number is ${number}`)


// var shape = window.prompt("enter the choice a: circle, b: triangle: c: rectangle");

// var l = 3, b = 2, h=4;
// var pi = 3.14, r = 5;

// switch(shape){
//     case "a": document.write(pi*r**2);
//     break;
    
//     case "b": document.write(1/2*b*h);
//     break;
    
//     case "c": document.write(l*b);
//     break;
    
//     default: document.write("invalid");
// }










// 2. conditional ternary operator
// The conditional ternary operator is the only javascript
// operator that takes three operand(a+b here a&b are operands)
// var age = 10;
// age >= 18 ? document.write("can give the vote"):document.write("cannot give the vote");

//question :- find the area of circle

// area of circle = 3.14*r*r;

// var radius = 10;
// if(r = 3.14*radius*radius){
//  document.write(`area of circle is : ${r}`);   
// }

// area of circle,triangle,and rectangle

// var area = "priya";
// var pi = 3.14, l = 5, b = 2, h = 2, r = 2;
// if(area == "circle"){
//     document.write(`area of circle is ${pi*r**2}`);
// }

// else if(area == "triangle"){
//     document.write(`area of triangle is ${1/2*b*h}`);
// }

// else if(area == "rectangle"){
//     document.write(`area of rectangle is ${l*b}`);
// }

// else{
//     document.write("invalid data");
// }

// 3.Switch statement
//break:- terminating the loop if condition is true
// var area = "circle";
// var pi = 3.14, l = 5, b = 2, h = 2, r = 2;

// switch(area){
//     case "circle": document.write(`area of circle is ${pi*r**2}`);
//     break;
    
//     case "triangle":  document.write(`area of triangle is ${1/2*b*h}`);
//     break;
    
//     case "rectangle": document.write(`area of rectangle is ${l*b}`);
//     break;
    
//     default: document.write("invalid data")
// } 
//   document.write("<br>");

// 4. while loop

// var num = 80;


// while(num<=10)
// //block scope
// {
//     document.write(num);
//     document.write("<br>");

//     num++;
// }

// 5. do-while loop

// var num = 80;
// do{
   
//     document.write(num);
//     document.write("<br>");
//     num++;
// }while(num<=20);

//6. for loop

// for(var num = 0; num<=11; num++)
// //block scope
// {
//     debugger;
//     document.write("<br>")
//     document.write(num);
// }


// var r = 5, b = 2, h = 4, l = 4, breadth = 3;

// // var area = "jhgjgj"
// var area = window.prompt("Enter the data");

// if(area == "circle"){
//     document.write(`area of circle is : ${3.14*r**2}`)
// }
// else if(area == "triangle"){
//     document.write(`area of triangle is : ${1/2*b*h}`)
// }

// else if(area == "rectangle"){
//     document.write(`area of rectangle is : ${l*b}`);
// }

// else{
//     document.write("invalid data");
// }

// var r = 5, b = 2, h = 4, l = 4, breadth = 3;

// var area = "circle";

// switch(area){
//     case "circle" : document.write(`area of circle is : ${3.14*r**2}`);
//     break;
    
//     case "triangle" : document.write(`area of triangle is : ${1/2*b*h}`);
//     break;
    
//     default: document.write("invalid data")
// }



// var x = 3;
// switch (x) {
//   case 1:
//     document.write(x);
//     break;
//   case 2:
//     document.write(x+2);
//     break;
//   default:
//     document.write(x+5);
// }

// for(var i = 0; i<=10; i++){
    
//     document.write(i)
// }




//break and continue

// for (i = 0; i <= 10; i++) {
//     if (i == 5) {
//         break;        //5 not include
//     }
//     document.write(i + "<br />");
// }

// for (i = 0; i <= 10; i++) {
//     if (i == 5) {
//         continue;        //5 not include
//     }
//     document.write(i + "<br />");
// }

// var sum = 0,i=1;
// sum = sum+i;
// sum+=i;
// document.write(sum)


// for(i = 1; i<=8; i++) {
//   if (i == 6) {
//     continue; 
//   }
//   document.write(i);

// }

// var num = 1;
// while(num<=10){
//     num++;
//     document.write(num)
// }

// var a = 4, b = 3;
// var res = a -b ;

// for(res; res<=10; res++){
//     var c = res + 2;
   
// }

//  document.write(c)







  // functions in javascript
// a javascript funtion is a block of code designed to
// perform a particular task.
// // 1.functions definition => { statement }=> so this curly statement is definition of function 
// // also known as function statment or function declaration
// definition of function doesn't execute it without function calling
// 2.calling a function => due to calling a funciton we get an output of the program
// 3.function parameter
// 4.function arguments
// // 5.funtion Expression => store a calling function 
// into an variable but function expression is alone without return keyword
// 6.return keyword
// 7.anonymous functions
// var a = 3, b=4;
// var sum = a+b;
// document.write(sum);
// convert into function definition
// function sum()
// {
//     var a=3, b=7;         
//     var total = a+b;
//     document.write(total);
// }
// sum(); //calling due to this we get output of sum function
// const company = "Amazon"
// company=="Amazon"?document.write("Himmu"): document.write("Priya")
// function sum(a,b){        //here a & b are parameters during an definiton
//     total = a+b;
//     document.write("<br>")
//      document.write(total);
// }
// sum(10,20); //here 10,20 are arguments into a calling a function
// sum(2,3);
// why function :- you can reuse code: define the code once,
// and use it many times. you can use the same code many times
// with different arguments, to produce different results
// do not repeat yourself
function sum (a, b)
{
  // var total = a+b;
  // document.write(total) or
  return total = a + b;
}

// document.write(sum(10,20))

// var funexp = sum(2,30);
// funexp;
// document.write(`the sum of two number is : ${funexp}`);

// another way to write function expression is 
// anonymous function expression
// anonymous funtion means a function without a name

// var funexpr = function(a,b){
//     return a+b;
// }

// document.write(funexpr("priya"," karn"));
// document.write("<br>");
// document.write(funexpr("ankita"," karn"));
// document.write("<br>");
// document.write(funexpr("himanshu"," karn"));


// var funexpr = function(a,b){
//     return a+b;
// }

// res1 = funexpr(10,20)
// res2 = funexpr(30,2)

// if(res1>res2){
//     document.write("winner")
// }
// else{
//     document.write("loser")
// }


// var funexp = function(a,b){
//     return total = a+b;
// }
// var a = funexp(2,4);
// var b = funexp(9,2);
// document.write(`the sum of two number is : ${a}`);
// document.write("<br>");
// document.write(`the sum of two number is : ${b}`);
// document.write("<br>");
// document.write(a<b);



// var funexpr = function(a,b)
// {
//  return total = a+b;
// }
// var a  = funexpr(2,4);
// var b = funexpr(3,9);
// if(a>b){
//     document.write("i am win");
// }
// else{
//     document.write("i am loss")
// }





// ECMA SCRIPT 2015 ES6
// 1. let and const
// 2. template string 
// 3. default arguments
// 4. rest operator and spread operator
// 5. destructuring
// 6. object properties
// 7. fat arrow function


// 1. var let and const => let and const are block scope => var is function scope



// function sum()
// {
//     const a = 20;

//     if(a==20)
//     {
//         document.write(a);
//         const b = 30;
//         document.write(b);
//     }
//      document.write(a);
//     document.write(b);

// }

// sum();





// var firstname= "himanshu";

// firstname = "ankita";
// firstname = "priya";
// document.write(firstname);


// document.write("<br>")
// const name = "priya";

// document.write(name)
// name = "himanshu";
// document.write(name)
// document.write(name);


// let firstname = "priya";
// firstname = "ankita";
// document.write(firstname);
// document.write("<br>")
// firstname = "himanshu";
// document.write(firstname)




// function biodata(){
//     var firstname = "priya";
//     document.write(firstname);
//     document.write("<br>")
//     if(true){
//         var lastname = "karn";
//         document.write(lastname);
//         document.write(firstname);
//     document.write("<br>")
//     firstname = "ankita"
//         document.write(firstname);
//     document.write("<br>")
//     }
//     document.write(lastname)
//     lastname = "jaiswal"
//     document.write(lastname);
// }
// biodata();


//let and const ek block scope hai mtlb ki block ke bahar access nhi kr sakte
// function name(){
//     const firstname = "priya";
//     document.write(firstname);
//       document.write("<br>")
//     if(true)
//     {
//         const lastname = "jaiswal";
//         document.write(lastname);
//           document.write("<br>")
//           document.write(firstname);
//     }
//       document.write("<br>")
//      document.write(lastname);
// }


// name();


// var n = window.prompt("enter the table number : ");

// for(i=1;i<=10;i++){
//     document.write(`${n} * ${i} = ${n*i} `)
//     document.write("<br>")
// }




//what is the output????....

// var funexpr = function(a,b){
//     return a+b;
// }

// document.write(`sum is ${funexpr(20)}`);


// what is the output???

// var funexpr = function(a,b=10,c=20){
//     return a+b+c;
// }

// document.write(`sum is ${funexpr(20,30)}`);





// 2. template string 
// document.write(`${table} * ${num} = ${table * num}`)
// this type of print type is calledtemplate literals template strings


// 3. default arguments

// var funexpr = function(a,b=2){
//     return result = a*b
// }
// var a = funexpr(2);
// document.write(a);


// var funexpr = function(a=10,b,c){
//     return a+b+c;
// }

// res = funexpr(10,20)
// document.write(res)
// document.write("<br>");
// document.write(funexpr(10,20,30))





// 7. fat arrow function


// function mul(a,b){
//  return `the multiplication of two number is: ${a*b}`;
// }
// var a = mul(2,3);
// document.write(a);




// how to convert in into fat arrow function

// document.write(mul(2,3)); //gives error in fat arrow funtion
// var funexpr = (a,b) =>{
//     return `multiplication of two numbe is ${a*b}`
// }
// document.write(funexpr(20,3))

// var funexpr = (a,b) => `multiplication of two number is ${a*b}`
// document.write(funexpr(2,3))

// const mul = (a,b) => {
//  return `the multiplication of two number is : ${(a)*(b)}`;
// }
// document.write(mul(2,3))

// const sum = (a,b=8) =>{
//     return `sum of two number is : ${a+b}`;
// }
// var b = sum(4);
// document.write(b);




// Array in javascript
// JavaScript itself doesn't have a native data structure called a "list"
// as you might find in other programming languages like Python. 
// However, JavaScript provides a built-in data structure called an "array"
// that is commonly used to represent lists.
// when we use var , we can store only one value at a time 
// var fruits = 'mango','orange';// error

// when we feel like storing multiple data in one variable
// then instead of var,array or []
// array store different type of multiple values in one variable
// in javascript we have we will use an e an array class
// array are the prototype of this class
// in js array are dynamic and growable means you can add or remove element without specifying fixed size
// means =>

// var fruits = new Array;// but it is optional in js

// var fruits =['mango', 'orange', 'apple', 'litchi', 5, true, false];

// here first element 'mango' => lower index/lower boundary
// last element 'litchi' => upper index/uppere boundary

// what we will do in an array
// 1. traversal of an array 
// 2. searching and filter in an Array
// 3. how to sort and compare in an Array
// 4. how to insert, replace, and delete elements in array(CRUD)
// 5. MAP(), REDUCE(), FILTER()
// 6. splice(start number that is index number, delete element, add element)


// 1. traversal of an array => if we want to get the
// single data  at a time and
// also if we want to change the data

// var fruit = ['priya','ankita','himmu'];
// console.log(fruit[fruit.length-1])


// var fruits = ['mango ',' orange ',' apple ',' litchi ','priya'];
// document.write(fruits[fruits.length-1]);

// document.write(fruits.length);
// //here length is a propertie.


// var fruits = ['mango ',' orange ',' apple ',' litchi ','priya'];
// document.write(fruits[1])
// document.write(`length of an array is : ${fruits.length}`)
//  document.write("<br>")
// for(var i = 0; i<fruits.length; i++){
//     document.write("<br>")
//     document.write(fruits[i])
// }







// for in loop gives us index number of an array


// var fruits = ['mango ',' orange ',' apple ',' litchi ','priya'];
// fruits.forEach((elements,index,array)=>{
//     document.write(index)
//     document.write("<br>")

// })



// for(elements in fruits){
//     document.write("<br>")
//     document.write(elements)
// }


// // for of loop gives us data/elements of an array
// for(elements of fruits){
//     document.write("<br>")
//     document.write(elements)
// }


// for each loop use anonymous function means function without name 
// gives us element, index, array . forEach is a method => forEach()

// var fruits = ['mango ',' orange ',' apple ','litchi ','priya'];

// fruits.forEach(function(element,index,array){
//     document.write(array)
//     document.write("<br>")
//     // document.write(`element: ${element} index: ${index} 
//     // array: ${array}`)
// })


//convert it into fat arrow function
// fruits.forEach((element,index,array) => {
//     document.write(element)
// })




// 2. searching(indexOf, lastIndexOf, includes) and filter in an Array

// (a) for searching the element or data 
// (indexOf) method is use 

//indexOf searching direction is forward ( -> )

// var fruits = ['mango','orange','apple','litchi','priya'];
// document.write(fruits.indexOf('mango')); 


// // // search the element from the 0th index number

// document.write(fruits.indexOf('apple',0))
// // search the element from the 0th index number
// var fruits = ['mango','apple','litchi','banana','mango'];
// document.write(fruits.indexOf('mango'));
// document.write(fruits.lastIndexOf('mango'))
// document.write("<br>");
// document.write(fruits.indexOf('Priya'));//case sensitive
// if no data is found then return the -1 index number


// (b) last index of searching backward
// ye samjh nhi aaya mujhe
// var fruits = ['mango','orange','apple','litchi','priya'];
// document.write(fruits.lastIndexOf('apple',3))


// (c) includes() return true or false
// var fruits = ['mango','orange','apple',
// 'litchi','priya'];
// document.write(fruits.includes('Mango'));//case sensitive
// document.write("<br>");
// document.write(fruits.includes('apple',3));;
// kya apple 3 ya 3 ke baad hai?...
// includes() method searching forward



// filter (find,findIndex,filter)  filter means some element delete that is not required
// const prices = [200,300,350,400,450,500,600]
// price > 400


//its my logic
// prices.forEach(function(element,index,array){
//     if(element>400){
//     document.write("<br>")
//     document.write(element)
//     }
// })


// a). find(currVal) if not found any element then return undefined

// const prices = [200,300,350,400,450,500,600];
// const funexpr = prices.find(function(currVal){
//     return currVal>900;
// })
// const funexpr = prices.find((currVal) =>{
//     return currVal<400
// })
// document.write(funexpr);


//b).findIndex()if not found element then return -1
// const prices = [200,300,350,400,450,500,600];
// const funexpr = prices.findIndex((currVal) =>{
//     return currVal>600
// })
// document.write(funexpr);


// // c). filter() method if not data is found then return empty array other wise return array
// note: in filter method there are two predefined function element, index
// const prices = [200,300,350,400,450,500,600];
// const funexpr = prices.filter((element,index) => {
//     return index>200;
// })
// document.write(funexpr);
// let price = [200,200,300,400,500]
// let funexpr = price.filter((element,index)=>{
//     return element!==200;
// })
// document.write(funexpr.length)
// NOTE:jis bhi method mein predefined 
// parameters ho usme function ka use kr sakte hain 



// 3. sort() in an array properly working with string 

// const months = ['March', 'Jan', 'Feb', 'Dec', 'Nov'];
// document.write("<br>")
// document.write(months.sort())
//   document.write("<br>")
// const = [1,30,1000,200,400]
// document.write(months.sort()) //incorrect result





//4. how to insert, replace, and delete elements in array(CRUD)

// a). push() mehtod adds one or more elements/data  to the
// end of an array and return the new length of the 
// array

// animals.push('chicken','biryani');
// document.write(animals.length);
// document.write(animals)
// document.write("<br>")


//b). unshift() method adds one or more elements/data  to the
// start of an original array and return the new length of the 
// array 
// const animals = ['pigs','goats','sheep'];
// animals.unshift('mango');
// document.write(animals);


//c). pop() method remove the last element from an 
//array and returns that elements this method changes 
// the length of the array 

// const animals = ['pigs','goats','sheep'];
// animals.pop();
// document.write(animals)


// d).shift() method remove the first element from an 
// //array and returns that elements this method changes 
// // the length of the array 
// const animals = ['pigs','goats','sheep'];
// animals.shift()
// document.write(animals)

// const animals = ['pigs','goats','sheep'];
// document.write(animals.push('dec'));

// document.write(animals);

// document.write("<br>")
// document.write(animals.pop());
// document.write("<br>")
// document.write(animals);

//QUESTIONS
// 1) add Dec at the end of an array ?...

// const months = ['Jan','march','April','June','July'];

// // months.push('Dec');
// // document.write(months)
// // months.splice(5,0,'Dec');
// const newmonths = months.splice(months.length,0,'Dec'); 
// document.write(months)
// months.splice(months.length,0,'Dec')
// document.write(months)


// // 2). what is the return value of splice method?...
// document.write(newmonths)// yhan empty array return hoga
// // kyuki hmne koi data delete nhi kiya hai


// // 3). update march to March ?...
// const months = ['Jan','march','April','June','July'];

// march => MARCH
// months.splice(1,1,'MARCH')
// document.write(months)
// const a = months.indexOf('priya');
// months.splice(a,1,'MARCH')
// document.write(months)


// 4.) delete June from an array
const months = ['Jan','march','April','June','July'];


// const a = months.indexOf('April')
// months.splice(a,months.length);
// document.write(months)


// 5. MAP(), REDUCE(), FILTER()

// let arr = [2,3,4,6,8];
// let a = arr.map(function(element,index,array){
//   document.write(element*2)
//   document.write("<br>")
// })

// let funexpr = a.filter(function(element,index,array){
//     return element>2
// })
// document.write(funexpr)

// let arr = [25,36,49,64,81]
// arr.map(function(element,array){
//     document.write(element**2)
//     document.write("<br>")
// })



// find square root of the element
// let arr = [25,36,49,64,81]
// let funexpr = arr.map((element,index,array)=>{
//     return Math.sqrt(element)
// })

// document.write(funexpr)
// let arr = [25,36,49,64,81]
// let funexpr = arr.forEach((element)=>{
//     return Math.sqrt(element);
// })

// document.write(funexpr);
// map is a chainable method


// let arr = [2,3,4,6,8]
// let funexpr = arr.map((element)=>{
//     return element*2;
// }).filter((element)=>{
//     return element>10;
// }).reduce((accumulator,element)=>{
//     return accumulator+=element;
// })
// document.write(funexpr)




//Multiply all the values in an array with 10: // return new array
//// map is a chainable method

// let arr = [2,3,4,6,8];

// var funexpr = arr.map((element)=>{
//     return element*10;
// })

// document.write(funexpr)


// var funexpr = arr.filter((element)=>{
//     return element*10;
// })

// document.write(funexpr)

// for(element of arr)   // but not return array;
// {
//     document.write(typeof(element*10));
// }




// //reduce 
// add all the elements and get single output

// let arr = [2,3,4,6,8]
// let funexpr = arr.reduce((accumulator,element)=>{
//     return accumulator+=element;
// },7)
// document.write(funexpr)


// arr.map((element)=>{
//     document.write(element+=element);
// })










// String 

//string constructor
// let myname = new String('priya');
// document.write(myname)  //return answer is [String:'priya']

//question :- how to fing length of the string 
// let myname = "priya karn";
// document.write(myname.length);

//Escape character
// let a = "hi this is priya karn here and i want to learn \"Js\" ";
// document.write(a)
// let a = "hi this is priya karn here and i want to learn 'Js'";
// document.write(a)


//method in string
// 1.indexOf
// let mySelf = "Hi this is Priya Karn";
// document.write(mySelf.indexOf('Karn'));
// let a = "hi hi this is priya karn here";
// document.write(a.indexOf('this'))
// document.write("<br>")
// document.write(a.indexOf('hi',1));









// 2.lastIndexOf not found -1
// let a = "i am the thapa technical";
// document.write(a.lastIndexOf('t',6))
// document.write("<br>")
// document.write(a.lastIndexOf('technical'))


// 3. search not found -1
// the search method cannot take a second start position argument
//  let a = "i am the thapa technical";
// document.write(a.search('thapa'))
// // document.write(a.search("thapa"));
//  document.write(a.search('t'))



//4. Extracting string parts
// slice(start,end)
//substring(start,end)
//substr(start,length)
// slice(start,end) end argument not count
// the original arrray will not be changed
// end argument not include


// let fruits = "Apple, Banana, Mango, Kiwi";
// // // let a = fruits.slice(0,9);
// // document.write(fruits.slice(1,9));

// document.write(fruits.slice(7));





// Question:- display only 10 character 
// of a string like the one used in twitter
// aap 10 character he likh sakte 10 se jyada nahi
// var a = "hi this is priya karn i want to become a web developer";
// var display = a.slice(0,11)
// document.write(display)





// //substring(start,end) end not count
// same as slice but cannot accept negative argument
// let fruits = "Apple, Banana, Mango, Kiwi";
// let res = fruits.substring(0,7);
// let res = fruits.substring(7)
// let res = fruits.slice(7,-2)
// let res = fruits.substring(7,-2) //-2 not accept and 7 take as a end argument default 0 
// let res = fruits.substring(-8)
// document.write(res);



// substr(start,length) end not count
// let fruits = "Apple, Banana, Mango, Kiwi";
// // let res = fruits.substr(0,4)
// // let res = fruits.substr(0,-2)
// let res = fruits.substr(-8)
// // let res = fruits.substring(-8) //not working
// document.write(fruits.substr(9,-4)) //not working
// document.write(res)



// <!--substring mein (-) bilkul kaam nhi krega-->
// <!--alone argu mein bhi  nhi ending mein bhi nhi -->
// <!--substr mein (-) alone argu mein kaam krega-->
// <!--ending mein nhi krega-->


// replace
// let myBioData = 'I am priya karn and priya here';
// // let a = myBioData.replace('priya karn','Priya Karn') 
// // document.write(a)
// // document.write(myBioData) //not change originalstring
// document.write(myBioData.replace('Priya','PRIYA')) //not work case sensitive
// general question :-
// var x = 3;
// var x = 2;
// var x =8;
// document.write(x)



//EXTRACTING STRING CHARACTERS
// charAt()
//   let str = "HELLO PRIYA";
// document.write (str.charAt (6))
//return the unicode of the last character in a string
// charCodeAt() return unicode
// let str = "HELLO PRIYA";
// document.write(str.charCodeAt(str.length-1))
// document.write(str.charCodeAt(10))
// the method returns a UTF-16 code 
// an integer between 0 and 65535
// the unicode standard provides a unique number for every
// character no matter the platform, device, applications, 
// or languages UTF-8 is popular unicode encoding which has 
// 88-bit code units
// let mySef = "hi this is priya karn";
// // document.write(mySef.indexOf('pri'));
// // document.write(mySef.search('pri'))
//  document.write(mySef.slice(0));
// var fruits = ['mango','apple','Banana'];
// fruits.forEach((element,index) => {
//     document.write(`${element} : ${index}`)
//         document.write("<br>")
// })
// var fruits = ['mango','apple','Banana'];                         
// document.write("<br>")
// document.write(fruits.indexOf('mango'))
// document.write(fruits[0]);
// document.write("<br>")
// var a = fruits.filter((element,index) => {
//     return index;
// })
// document.write(a);
// if(fruits.indexOf('mango') == fruits[0]){
//     document.write('same')
// }
//PROPERTY ACCESS
// let str = "HELLO PRIYA";
// document.write(str[1])
// OTHER USEFUL METHOD
// var name = "Priya Karn"
// document.write(name.toUpperCase());
// document.write(name.toLowerCase());
// var fName = "Priya";
// var lName = "Karn";
// document.write(`${fName} ${lName}`)
// document.write("<br>")
// document.write(fName.concat(" ",lName))
// // the trim method removes whitespace from both sides of a string
// var str = "              hello world      ";
// document.write(str.trim())
// how to convert string to an array ???....
// var txt = "a,b,c,d,e";
// document.write(txt.split(""));
// note:- india is 5 hours and 30 minutes ahead of GMT+0530(INDIA STANDARD TIME)
// // GMT(Greenwich Mean Time)
// GMT means all over world time will be work properly
// date and time in javascript
// new Date(year,month,day,hours,minutes,seconds,milliseconds)
//new date is a constructor
// let currDate = new Date();
// document.write(currDate)
// document.write("<br>");
// document.write(currDate.toLocaleDateString());
// document.write("<br>");
// document.write(currDate.toString())
// document.write("<br>");
// document.write(Date.now()); // return milisecond januar1,1970 se abhi tk jitna 1 second mein kitna millisecond ho chuka hai 
// var date = new Date(2022,5,3,13,41)
// document.write(date.toLocaleString())
// document.write(typeof(date))
// var a = new Date("May 10, 2022 15:48:00")
// document.write(a.toLocaleString())
// some methods in date
// var a = new Date(2022,3,12,13,45);
// document.write(a.toLocaleString());
// document.write("<br>");
// document.write(Date.now());
// document.write("<br>");
// document.write(a.getFullYear());
// document.write("<br>");
// document.write(a.getMonth());
// document.write("<br>");
// document.write(a.getDate());
// document.write("<br>");
// document.write(a.getDay())
// //HOW TO SET INDIVIDUAL DATE
// document.write("<br>");
// document.write(a.toLocaleString(1648973700000))
// document.write(a.setDate(3))
// Some methods in time
// var currTime = new Date();
// document.write(currTime.getHours());
// document.write("<br>");
// document.write(currTime.getMinutes());
// document.write("<br>");
// document.write(currTime.getSeconds());
// document.write("<br>").
// document.write(currTime.getMilliseconds())
// document.write("<br>")
// let currTime = new Date();
// document.write(currTime.getHours())
// document.write("<br>")
// document.write(currTime.getMinutes())
// document.write("<br>")
// document.write(currTime.getSeconds())
// document.write("<br>")
// document.write(currTime.getMilliseconds())
//How to set individual time
// document.write(currTime.setHours(23))
// document.write("<br>")
// document.write(currTime.setMinutes(5))
// document.write("<br>")
// document.write(currTime.setSeconds(2))
// document.write("<br>")
//Summary
// var currTime = new Date();
// document.write(currTime.toLocaleTimeString())
// document.write("<br>");
// document.write(currTime.toLocaleDateString());
// document.write("<br>");
// document.write(currTime.toLocaleString());
// document.write("<br>");
// document.write(currTime.getDate())
// document.write("<br>");
// document.write(currTime.getHours())
// document.write("<br>");
// document.write(currTime.setDate(10));
// document.write("<br>");
// document.write(currTime.setHours(24));
//Javascript math object
// let num = 10.467;
// document.write(Math.round(num));
// document.write("<br>");
// document.write(Math.PI);
// document.write(Math.pow(2,4));
// document.write("<br>");
// document.write(2**4);
// document.write("<br>");
// document.write(Math.sqrt(4))
// document.write("<br>");
// document.write(Math.sqrt(5));
// // document.write("<br>");
//   document.write (Math.round (10.567)) document.write ("<br>");
// document.write (Math.ceil (10.367)) document.write ("<br>");
// document.write(Math.round(99.1));
// document.write("<br>");
// document.write(Math.ceil(99.1));
// document.write("<br>");

// document.write(Math.ceil(-9.1)) //- not working in ceil

// document.write("<br>");
// document.write (Math.floor (10.3)) document.write ("<br>");
// document.write(Math.floor(10.2))
// document.write("<br>");
// document.write(Math.floor(-9.7)) // - not working in floor
// document.write("<br>");

// // trunc same as floor but in floor negative not accept but here negative also accept
// document.write(Math.trunc(-9.7))
// document.write("<br>");
// document.write(Math.trunc(9.7))



// document.write(Math.min(2,-4,5,10));
// document.write("<br>");
// document.write(Math.max(10,-5,0,20))
// document.write("<br>");


// document.write(Math.random()*10);
// document.write("<br>");

// document.write(Math.floor(Math.random()*10))
//get 0-9 number






// document.write(Math.abs(-5))// absolute always return postive value
// document.write("<br>");
// document.write(Math.abs(9))
// document.write("<br>");
// document.write(Math.abs(4-6));
// document.write("<br>");


//navigate through the DOM

//  inspect all for better understanding
// 1.document.documentElement => return the element that is the root element of the document.
// html,/html is the root and document is the element

// 2.document.head
// 3.document.body
// 4.document.body.childNodes(include tab, enter and whitespace) list of all the direct children only
// 5.document.children(without text nodes, only regular elements)
// 6.document.childrenNodes.length

// what is the root element of your document
//is body elements childrenNodes or not?...

// document.body.hashChildNodes()

// how to find the child in DOM tree
// firstChild vs firstElementChild
// lastChild vs lastElementChild
// const data = document.body.firstElementChild;



// factorial of a  number 6! = 6*5*4*3*2*1 = 720 

// var funexpr = (num) => {
//     var mul = 1;
//     for(var i=1; i<=num; i++){
//         mul = mul*i;

//     }
//     return mul;

// }

// document.write(funexpr(6));

// generate multiplication tables up to a given number.

// for(var i=1; i<=10; i++){
//     var mul = 12*i;
//  document.write("<br>");
//     document.write(`12 * ${i} = ${mul}`);
// }


// Lexical scope :-

// var a = "hi";  //global scope 

//  var Parent = () => {
//     var b = 'how are you';
//     // return b;
//     return a + b;
//     //  return a+b+c;  // cannot access child function variable and this is called Lexical scope

//     var Child = () => {
//         var c = 'priya';
//     // return a+b+c;
//     return c;
//     }
//  document.write(Child())

// }

// document.write(Parent())



// var a = "hi";

// const Parent = ()=>{
//     var b = "priya";
//     document.write(`${a + " "+ b+c}`);
   
//     const Child = ()=>{
//         var c = 18;
//         // document.write(a+b+c);
//     }
    
//     Child();
// }

// Parent()














// Closure same as lexical scope 


// let Parent = (a) => {

//     // return Child;

//     const Child = (b=3) => {
//         return `${a+b}`
//     }
    
    // document.write(Child(b))


// }

// Parent(2)

// document.write(Parent(2))




// Synchronous Javascript Programming 

// first work complete in 10min and second work complete in 5sec but
// not done the second work until the first work is done 

// cannot do two works at a same time 

// work in step by step 

// const funexpr1 = () => {
//     document.write("priya")
//     document.write("<br>")
// }


// const funexpr2 = () => {
//     document.write('ankita');
//      document.write("<br>")
//     funexpr1();
//     document.write('himmu');
// }

// funexpr2()

// Asnchronous can work at a same time
// here setTimeout is a Asnchronous



// var funexpr1  = () => {       //execution context 4
//     setTimeout(function(){   // web API after 1 sec setTimeout in message queu and due to event loop setTimeout go into execution context
//     document.write('priya')   

//     document.write("<br>")
//     },1000)
// }

// var funexpr2 = () => {
//     document.write('ankita') //execution context  2

//     document.write("<br>")

//     funexpr1();   //execution context 3 

//     document.write("himanshu")  // execution context 5

// }

// funexpr2()   //execution context 1




// function sum(a){
//     return function sum(b){
//         return function sum(c){
//             return a+b+c;
//         }
//     }
    
// }




// var sum = (num1) => (num2) => (num3) => document.write(num1+num2+num3)
// sum(2)(3)(4)




// Function currying 
// how will you add sum(2)(3)(4)

// when a function instead of taking all arguments at one time sum(2,3,4) 
// takes the first function and return a new function 
// that takes second function and return a new function and so on .



// function sum(a){

//     return function(b){

//         return function(c){

//             document.write(a+b+c)
//         }
//     }
// }




// sum(2)(3)(4);


// var sum = (num1) => {
//     return (num2) => {
//         return (num3) => {
//             document.write(num1+num2+num3)
//         }
//     }
// }

// sum(2)(3)(4)

// var sum = (num1) => (num2) => (num3) => document.write(num1+num2+num3)
// sum(2)(3)(4)



// Promises

// after 2 sec we have to get rollno from API

// produce promise with the help of new object
//promise expect executor function

// var promiseObj = new Promise(function(resolve,reject){   //here executor function
//     setTimeout(() => {
//          let roll_no = [51,52,53]; //data store in API 

//     resolve(roll_no);    //data fetch from the API

//     // reject(error not get data);  //reject not allow data fetch in roll_no

//     },2000);

//     })


//     const biodataObj = new Promise((resolve,reject) => {
//       setTimeout(() => {

//           let name = {
//               fname : 'priya',
//               lname : 'karn',
//               roll : [51,52,53],

//               getdata : function(){
//                   return `${name.fname} ${name.lname}`
//               }
//           }

//         //   resolve(name.getdata());

//         //   or

//         resolve(`my name is : ${name.fname} ${name.lname} and my roll no is : ${name.roll[0]} `)

//       },4000) 


//     })

// // because of objec we can use promiseObj


// promiseObj.then((Getrollno) => {   //here data store in roll_no now store in Getrollno we can access resolve data using then function
//     document.write(Getrollno) 
// }).catch((error) => {    //here we can access error using catch function
//   console.log(error)
// })




// biodataObj.then((a) => {
//     document.write(a);

// })

// let biodata = {
//     fname : 'priya',
//     lname : 'karn',

//     getdata: function(){
//         return `${biodata.fname}  ${biodata.lname}`
//     }
// }

// document.write(biodata.getdata())



//now we have to get name and age and roll_no after 2s

// const promiseObj = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         let arrRoll =  [51,42,53];

//         resolve(arrRoll);

//     },2000)
// })



// const funexpr = (indexData) => {
//     return new Promise((resolve,reject) => {
//         setTimeout((indexData) => {          //setTimeout(indexData) as a parameter

//             let biodata = {
//                 name : 'Priya',
//                 age : 22
//             }

//             resolve(`my rollNo is ${indexData} and my name is ${biodata.name} and my age is ${biodata.age}`)    


//         },2000,indexData)     // as a argument
//     })
// }



// promiseObj.then((a) => {
//     document.write(a)

//     // funexpr(a[0]).then((b) => {
//     //     document.write(b);
//     // })

//     // or

//     return funexpr(a[0])
// }).then((b) => {
//     document.write(b)
// })



// async await


// const promiseObj = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         let arrRoll =  [51,42,53];

//         resolve(arrRoll);

//     },2000)
// })



// const funexpr = (indexData) => {
//     return new Promise((resolve,reject) => {
//         setTimeout((indexData) => {          //setTimeout(indexData) as a parameter

//             let biodata = {
//                 name : 'Priya',
//                 age : 22
//             }

//             resolve(`my rollNo is ${indexData} and my name is ${biodata.name} and my age is ${biodata.age}`)    


//         },2000,indexData)     // as a argument
//     })
// }



// promiseObj.then((a) => {
//     document.write(a)

//     // funexpr(a[0]).then((b) => {
//     //     document.write(b);
//     // })

//     // or

//     return funexpr(a[0])

// }).then((b) => {
//     document.write(b)
// })

// use async await for access data

// async function getdata(){

//     const accessRoll = await promiseObj;
//     document.write(accessRoll);
//     document.write("<br>")

//   const accessNameAge = await funexpr(accessRoll[0])  
//   document.write(accessNameAge);

// //   return accessNameAge;


// }

// document.write(getdata())    //pending


// 1. AJAX (Asynchronous Javascript And XML )call with the help of fetch API
// 2. AJAX call with the help XMLHTTP request


// we use 2 one

// fetch('https://api.covid19api.com/summary') // resolve fetch() method return a promise

// fetch('https://api.covid19api.com/summary').then((dataAccess) => {

//     // document.write(dataAccess);  //here data is in readable stream(JSON format)

//     return dataAccess.json();   //now data is js object format 


// }).then((actualDATA) => {
//     const myDATA = actualDATA.Countries[101];

//     document.write(myDATA.Country)
//     document.write("<br>");

//     document.write(myDATA.CountryCode);

// })






// <!--OOPS IN JAVASCRIPT-->

// <!--What is Object literal?-->
// <!--object literal is simply a key:value pair data structure-->

// <!--storing variables and functions together in one container, -->
// <!--we can refer this as an objects-->

// <!--eg:- object = school bag(all data all things)-->
// <!--eg:- aise variable mein store krke rkhna hai -->
// <!--jhan mera name age email address qualification functions properties-->

// <!--const var x cannot store all these different type of data -->
// <!--const arr x cannot store all these different type of data-->


// <!--How to create an object-->
// <!--note:- in object function is method-->

    // var bioData = "priya";
    // var fruits = ['orange','apple','banana','litchi'];
    
    // 1 way to create an object
//     var bioData = {
//         myName : "priya", //value : key
//         myAge : 22,
//         getData : function(){
//         return `my name is ${bioData.myName} and myAge is ${bioData.myAge}`;  
//       } 
// }
//     document.write(bioData.myName);
//     document.write("<br>");
//     document.write(bioData.getData());
     




    
    
    //  2. way to create an object
     
    //  var bioData = {
    //      myName : "priya",
    //      getData(){
    //          return `my name is ${bioData.myName}`;
    //      }
    //  }
     
    //  document.write(bioData.getData());
     
     // 3 way to create an object
// var bioData = {
//     myName : {
//       nickName : "Madhu",
//       realName : "Priya"
//     },
    
//     getData(){
//         return `my nickname is ${bioData.myName.nickName}`;
//     }
// } 
//     document.write(bioData.getData())

// what is "this" object?...
// the definition of "this" object is that it contain the current context.
// the this object can have different values depending on where it is placed


// example 1:-

// document.write(this);// it refers to the current context and that is window global object
// document.write(this.alert("wow"));

// example 2:
// what is the current context of this code answer is global window object

// function myName(){
//     document.write(this);
// }
// myName();


// example 3:


// var myfname = "priya"; //global scope means window and this keword easily access window


// function myName(){
//     document.write(this.myfname)
// }

// myName();




// example 4: function is an method in oops

// var a = 2; // not access by this keyword because inside the object this keyword is become a object not global window object that's why

// var info = {
//     myfname : "priya",
//     mylname : "karn",
    
    // getdata(){
    //     document.write(this.myfname)
        // document.write(this.a)//not access //undefined
        
//         document.write(this)
//     }
// }

// info.getdata()



//this keyword is not work in fat arrow function 
// var a = 2;
// const myInfo = {
    
//     myName : "priya",
//     getdata : () => {
//         document.write(myInfo.myName)
//         document.write("<br>")
//         document.write(this.myName)
//           document.write("<br>")
//             document.write(this) //in fat arrow function current context is window 
//           document.write("<br>")
//             document.write(this.a)
//     }
    
// } 
// console.log(this)
// myInfo.getdata()



// const a = 2;
// function info(){
//     document.write(this.a)
// }

// info()

//amazing fact about this keyword is in fatarrow function this keyword cannot access inside the object var but access outside var 

// var a = "priya"
// var biodata = {
//     a : 'karn',
//     getdata: () => {
//         return this.a;
//     }
// }

// document.write(biodata.getdata())













//Array destructuring 
//(position matters alot), we can add values too

// const myBioData = ['Priya', 'Karn', 22];

// document.write(myBioData[1])

// const myFname = myBioData[0];
// const myLname = myBioData[1];
// const myAge = myBioData[2];

// const[myFname,myLname,myAge,myDegree = "Diploma"] = myBioData;

// document.write(myDegree)













// Object destructuring

// const myBioData = {
//     myFname : "Priya",
//     myLname : "Karn",
//     myAge : 22
    
// }

// var b = myBioData.myFname;
// var a = myBioData.myFname;

// document.write(a); //jhanjhat 


// var {myFname,myLname,myAge} = myBioData; //bahut simple
// document.write(myAge)

// or

















//Object properties--

//  1..... first propertie
//no need to write key and value, if both are same


//  var myName = "Priya";
//  var myAge = 22;
 
//  var myBioData = {
//      myName : myName,
//      myAge : myAge
//  }

// document.write(myBioData.myName)

// OR

// var myBioData = {
//     myName,
//     myAge
// }

// var {myName,myAge} = myBioData
// document.write(myName)

// 2.... Propertie

// we can now use dynamic properties

// var myName = "priya";

// var myBioData = {
//     myName : "hello how are you",    //not dynamic
//     22 : " is my age"
// }

// console.log(myBioData)

// var myName = "priya";

// var myBioData = {
//     [myName] : "hello how are you",
//     [2+3] : " is my age"
// }
// console.log(myBioData)





// object create with the help of function


// function person (name, age) {
//     this.name = name;
//     this.age = age;
// }
// var John = new person("John", 25);
// var James = new person("James", 21);

// document.write(John.age);


// function person(name,age){
//     this.name = name; //this for access the name 
//     this.age = age;
    
//   this.changeName = function(name){
//       this.name = name;
//   }

//     }
    
    



// var a = new person("priya",22);  //(here this is object) new keyword to create a new object using constructor.

// a.changeName("himmu");

// document.write(a.name);

// document.write(a.age);




// SPREAD OPERATOR

// var color1 = ["red","yellow","black","purple"];

// var color2 = ["red","yellow","black","pink","purple","orange"];

// var myFavcolor = ["pink","orange",...color1];
// document.write(myFavcolor);


//SPREAD OPERATOR in object ES2018

// var person = {
//     fname : "PRIYA",
//     lname : "KARN"
// }

// var sperson = {
//     ...person
// }


// console.log(sperson);




// flat() method




// convert object into array 
// object.entries()

// var biodata = {
//     fname : "priya",
//     lname : "karn",
    
//     getdata : function(){
//         return `hi this is ${this.biodata.fname} ${this.biodata.lname}`
//     }
// }

// var arr = Object.entries(biodata);
// console.log(arr)

// var object = Object.fromEntries(arr)  //convert arr into object
// console.log(object);


// bigint

// let oldnum = Number.MAX_SAFE_INTEGER;
// document.write(oldnum);

// let newnum = 9007199254740991 + 12; //error in large number because js not support
// document.write(newnum)

// let newnum = 9007199254740991n + 12n; //now no error
// document.write(newnum)

// document.write("<br>");
// document.write(typeof(newnum))

//  we are still getting answer without define and declare
//  this in incorrect
//  x = 2;
//  document.write(x);




//whatever fetch data from API or server then use Promise or async await

// Promise is an object that track  whatever event you perform that 
// is complete or not.
// promise has 3 stages:-


// 1. pending (before task complete)
// 2. resolve fullfilled (task complete) success
// // 3. reject task not complete (fail)

// promise is basically used to eliminate "call back hell"
// executor(resolve,reject) resolve function call on fullfilled
// and then is use for output show

// reject function call on reject and catch is use for error show as a output

//task is fetch the student rollno after 2s....



// promise produce
//     const pobj = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let roll_no = [1,2,3,4,5];
//             resolve(roll_no);
//             // reject('error catch');
//         },2000);
//     });


//     // i want to fetch roll no.2  biodata
//     const getBiodata = (indexroll)=>{
//         return new Promise((resolve,reject)=>{
//             setTimeout((indexroll)=>{
//                 let biodata = {
//                     name : "Priya",
//                     age : 23
//                 }
//                 resolve(`my name is ${biodata.name}, my age is ${biodata.age}, and my 
//             roll_no is ${indexroll}`);
//             },2000,indexroll)
            
//         })
//     }
    
    
    
// // promise get

// pobj.then((rollno)=>{
//     console.log(rollno);
//     getBiodata(rollno[1]).then((allInfo)=>{
//         console.log(allInfo);
//     })
// })

// pobj.catch((error)=>{
//     console.log(error)
// })




// const getdata=()=>{
//     return new Promise((resolve,reject)=>{
//         let data = [
//             {
//                 name:"priya",
//                 age:23
//             },
//             {
//                 name:"ankita",
//                 age:19
//             },
//             {
//                  name:"himanshu",
//                  age:16
//             }
           
//     ]
//         resolve(data[0])
//     })
// }

// getdata().then((d)=>{
//     console.log(d)
// })





// const getdata=()=>{
//     return new Promise((resolve,reject)=>{
//         const data = fetch('https://data.covid19india.org/data.json')
//         resolve(data[0])
//     })
// }

// getdata().then((d)=>{
//     console.log(d.json())
// })




// async(asynchronous) await function is same as Promise but in small simple syntax our work 
// is easy in async
// await

//note:- when you create async with the function then that means return the promise not 
// return value

// and when function return promise then await keyword tells us (wait data is coming)

// const pobj = new Promise((resolve,reject)=>{
//     let rollno = [10,20,30];
//     resolve(rollno);
// })

// const getdata = ()=>{
//     return new Promise((resolve,reject)=>{
//          let data = [
//             {
//                 name:"priya",
//                 age:23
//             },
//             {
//                 name:"ankita",
//                 age:19
//             },
//             {
//                  name:"himanshu",
//                  age:16
//             }
           
//     ]
//     resolve(data[0].name)
//     })
// }

// pobj.then((rollno)=>{
//     console.log(rollno)
// })
// getdate().then((info)=>{
//     console.log(info)
// })
// OR

// async function getBiodata(){
//     const rollno = await pobj;
//     console.log(rollno)
//     const info = await getdata();
//     console.log(info)
// }

// getBiodata();


























































//------------------------------JS revision section end------------------

// ------------------------------programming question start----------------------

// const arr = [1,2,3];
// const array = [...arr,"priya"]
// const data = array.map((ele)=>{
// return(
// ele
// )
// })

// console.log(data)



// const arr = [{
//     name1:"priya",
//     name2:"ankita",
//     name3:"himanshu"
// }]

// const ask = prompt("what is your name");

// if(ask===arr[0].name1){
//     console.log("correct")
// }else{
//     console.log("notcorrect")
// }




// some important question for practice


// 1. given a string, reverse each word in the sentence
// eg:- priya = ayirp
//eg:- hi priya how are you = ih ayirp woh era uoy

// const name = "hi priya how are you";
// const res1 = name.split(" ");
// const fres = res1.map((e)=>{
//   return e.split("").reverse().join("");
// })

// console.log(fres.join(" "));













// const sentence = "hi priya how are you";
// console.log(sentence.length)

// const res = sentence.split(" ")
// // console.log(res[1][1])

// for(var i=0;i<res.length;i++)
// {
//     for(var j=sentence.length;j>=0;j--)
//     {
//         if(res[i][j]===undefined){

//         }else{
//           console.log(res[i][j])

//         }
//     }
// }

// or



// const sentence = "hi priya how are you";

// const fres = sentence.split(" ").map((e)=>{
//    return e.split("").reverse("").join("")
// })
// console.log(fres.join(" "))

// console.log("priya".split("").reverse("").join(""));



// 2. how to check if an object is an array or not

// const a = [1,2,3];
// const b = {
//     name:"priya",
//     education : ["Btech"]

// }

// console.log(Array.isArray(b))

// function checkArray(ele){
//     return Array.isArray(ele)
// }
// console.log(checkArray({}))
// console.log(checkArray([]))

// or

// const checkArray = (ele)=>Array.isArray(ele)
// console.log(checkArray([]))
// console.log(checkArray({}))




// 3. how to empty an array in js
// do not reset it to a new array and do not loop through to pop each value
// var empty = [1,2,3];

// empty.length = 0 
// console.log(empty)


// 4. how would you check if a number is an integer


// let number = -2.4;
// if(number%2==0 || number%2==1 || number%2==-0 || number%2 ==-1)
// {
//     console.log("integer")
// }
// else{
//     console.log("not integer")
// }
// // console.log(-28.2%2);
// console.log(Number.isInteger(-12.3))


// find output:-
// const num = 12<2<3<14;
// console.log(num);

// const num = 2<1<0;
// console.log(num);

// const num = "20" + 10 + 10;
// console.log(num);

// const num= "5" - 12;
// console.log(num);

// console.log("2"-"20");
// console.log("A"-"A");


// const func = (function(a){
//   delete a;   //only work with object and not work with local;
//   return a;
// })(5);

// console.log(func);




// 5. make this work : duplicate([1,2,3,4,5]); 
// output should be [1,2,3,4,5,1,2,3,4,5]

// another way
// const dup = [1,2,3,4,5];
// const lengthStore = dup.length;
// for(var i=0;i<lengthStore;i++){
//   dup.push(dup[i]);
  
// }

// const dup = [1,2,3,4,5,1,2,3,4,5];
// dup.splice(2,1);
// console.log(dup);

// for(var i=0;i<dup.length;i++){
//   for(var j=i+1;j<dup.length;j++){
//     if(dup[i]==dup[j]){
//       dup.splice(j,1);
//     }
//   }
// }

// console.log(dup);

// console.log([...new Set(dup)])



// const result = dup.map((e)=>{
//   return e;

// })

// const a = result.concat(dup);










// var duplicate = [1,2,3,4,5];

// function duplicate(e){
//     const res = e.concat(e);
//     console.log(res)
// }

// duplicate([1,2,3,4,5])




// write the js function that reverse a number

// function reverse(a){
//     while(a!=0)
//     {
//        var x = 0; 
//         var r = a%10;
//             x = r+x*10;
//            a = Math.floor(a/10);

//            console.log(x)

//     }



// }
// reverse(123)



// const a = 4578;
// const res = a.toString();
// for(var i=res.length-1;i>=0;i--)
// {
//     console.log(res[i])
// }



// const a = 12;
// const res = a.toString().split("");
// const fres = res.reverse("").join("");
// console.log(typeof(Number(fres)))


// function reverseNum(e){
//     return e.toString().split("").reverse("").join("")
// }
// console.log(reverseNum(123))






// 7. write a javascript function that checks whether a passed
//  string is palindrome or not


// function palindrome(name)
// {

//     const finalname = name.split(" ").join("");
//     if(finalname == finalname.split("").reverse("").join("")) return "true"
//     else return "false"

// }
// console.log(palindrome("PRIYA"));
// console.log(palindrome("MOM"))



// const a = "MOM";
// const b = "RADAR"
// const c = "priya"
// const d = "A SANTA AT NASA"
// const e =   "ACROBATS STAB ORCA";

// const finald = d.split(" ").join("");
// if(finald==finald.split("").reverse("").join(""))
// {
//     console.log("true")
// }else{
//     console.log("false")
// }



// 8. write a javascript function that returns a passed string 
// with letters in alphabetical order

// const a = "priya";
// // aipry


// const a = "priya";
// // aipry
// // a = 097;
// // p = 112;

// const res = a.split("");
// console.log(res.sort())


// const stringAlphabet = (a)=>{
//     console.log(a)
//     return a.split("").sort().join("");
// }

// console.log(stringAlphabet("priya"))

// for(var i=0;i<res.length;i++)
// {
//     console.log(a.charAt(i) + " " + a.charCodeAt(i) )

// }


// const num = [10,12,13,14];
// console.log(num.sort());

// console.log(Array.isArray(num))






// 9. write a javascript function that accepts a string as a parameter
// and converts the first letter of each word of the string in upper case
// priya karn => Priya Karn;

// const name = ["priya","karn"];
// console.log(name[0].toUpperCase() + name[0].substring(0))
// console.log(name[0].slice(1))
// // const n = "priya karn";
// // console.log(n.substring(1))
// // console.log(n.slice(1))


// difference between slice and substring ?? find



// const funexpr = (name)=>{
//   const capres = name.split(" ");
//   const fin =  capres.map((e,ind)=>{
//     return e[0].toUpperCase() + e.slice(1);
//   })
//   return fin.join(" ");
// }

// console.log(funexpr("priya jaiswal"));


// function capitalize(a)
// {
//     const res = a.split(" ");
//     const fres = res.map((e)=>{
//         return  e[0].toUpperCase() + e.substring(1);
//     })
//     return fres.join(" ")
// }

// console.log(capitalize("hi this is priya karn"));





// const name = ["priya", "karn"];
// name.splice(0,1);  // affect on original array
// console.log(name)

// const n = "priya karn";
// console.log(n.slice(1));  // not affect original

// console.log(n.split("")); // not affect original











// map return two type of thing one is array and second is only element
// const name = ["priya","karn"]
// const res = name.map((e)=>{
//     return e;
// })

// console.log(res)   //now map callback function return array;

// const name = ["priya","karn"]
// name.map((e)=>{
//     console.log(e);
// })



// function capitalize(a)
// {
//     const res = a.split(" ");
//     const fres = res.map((e)=>{
//         return  e[0].toUpperCase() + e.substring(1);
//     })
//     return fres.join(" ")
// }

// console.log(capitalize("hi this is priya karn"));






// 10. write a javascript function to get the number of occurences of each letter
// in specified string
// a = 1;
// p = 2;
// l = 1;
// e = 1;


// [ 'a', 'p', 'p', 'l', 'e' ]


// in this i learn two things:  1. how to access the object in new way 2.hasOwnProperty()
// console.log(countObject.a);
// console.log(countObject['a'])

// console.log(countObject.hasOwnProperty('p'))

// const obje = {
//     a:1 
// }
// console.log(obje['a'])
// console.log(obje)

// function stringCount(str){
//     var obj = {};

// const res = str.split("")
// res.forEach(element => {
//     if(obj.hasOwnProperty(element) === false)
//     {
//         obj[element] = 1

//     }else{
//         obj[element]++

//     }

// });

// return obj;

// }
// console.log(stringCount("apple"))
// console.log(stringCount("ankita"))
// console.log(stringCount("himanshu"))
// console.log(stringCount("priyakarn"))




// 11. loop an array and add all members of it

// const num = [1,2,3,4,5,6,7];

// const res = num.reduce((e,accum)=>{
//     return e+=accum;
// })
// console.log(res)





// 12. in an array of numbers and strings, only add those members 
//which are not strings

// var arr = [1,2,3,"a",4,"b",5,"c"];
// var total = 0;
// for(var i=0;i<arr.length;i++){
//   if(typeof(arr[i])=='number' ){
//     total = total + arr[i];
//   }
// }
// console.log(typeof(3))

// console.log(total)











// var total = 0;
// var allString = true;
// arr.forEach((e)=>{
//     if(typeof e == "number"){
//         total+=e;
//         allString = false;
//     }
// })

// if(allString==false)
// {
//     console.log(total)
// }
// else{
//     console.log(allString)
// }

// or


// // console.log(typeof(1)!=String)
// // console.log(typeof(typeof('fhjjaf')))   //'number'

// var sum = 0;
// arr.forEach((e)=>{
//     if(typeof(e)!=='string')
//     {
//         sum = sum + e;
//     }

// })
// console.log(sum)





// 13. loop an array of objects and remove all objects which
//  doesn't have gender's value male 

// const arr = [
//    {name:"priya", gender:"female"},
//    {name:"ankita",gender:"female"},
//    {name:"ankita",gender:"female"},
//    {name:"himanshu",gender:"male"}
// ]


// for(var i=0;i<arr.length;i++){
//   for(var j=i+1;j<arr.length;j++){
//     if(arr[i].name === arr[j].name){
//       arr.splice(i,1);
//     }
//   }
  
// }

// find the error in this code
// for(var i=0;i<arr.length;i++){
//   if(arr[i].gender == "female"){
//     arr.splice(i,1)
//   }
// }

// console.log(arr);
















// for(var i=0;i<arr.length;i++)
// {
//     if(arr[i].gender === "female")
//     {
//         delete(arr[i])

//     }else{
//         console.log(arr[i])
//     }

// }

// // or
// filter new array mein kuch element ko rkhta hai kuch ko delete kr deta hai


// const res = arr.filter((e)=>{
//     return e.gender !== "female"

// })

// console.log(res)


// i. count the total non-male 

// const arr = [
//     {name:"priya", gender:"female"},
//     {name:"roshan",gender:"male"},
//     {name:"ankita",gender:"female"},
//     {name:"himanshu",gender:"male"}
//  ]

// var count = 0;

// const res = arr.forEach((e)=>{
//     if(e.gender != "male")
//     {
//         return count++
//     }

// })

// console.log(count)



// ii. remove one non male
// const arr = [
//     {name:"priya", gender:"female"},
//     {name:"roshan",gender:"male"},
//     {name:"ankita",gender:"female"},
//     {name:"himanshu",gender:"male"}
//  ]

// for(var i=0;i<arr.length;i++)
// {
//     if(arr[i].gender==="female"){

//         arr.splice(i,1)

//     }

//     break;


// }
// console.log(arr)

// const num = [1,2,3];
// num.splice(2,1)      //splice also use for remove the element
// console.log(num)





// 14. write a javascript function to clone an array elements

// const clone = (e)=>{
//     return [...e]
// }

// const res = clone([1,2,3,4,5]);
// console.log(res)

// const clone = (e)=>{
//     const arr = []
//     e.forEach(element => {
//         return arr.push(element)
//     });
//     return arr;
// }
// console.log(clone([1,2,3,45]))






// 10. write a javascript function which accepts an arguments and return the type


// function argtype(argumentType){
//     console.log(typeof(argumentType))
// }

// argtype("priya")
// argtype([1,2,3])
// argtype(true)
// argtype(1)
// argtype(null)
// argtype()
// argtype(
//     function sum(){
//         console.log(2+1)
//     }

// );



// 15. write a javascript function to get the first element of an array. Passing a
// parameter 'n' will return the first 'n' element of the array
// and should not come undefined value

// function arr(e,n=2)
// {
//     console.log(e[0])

//     if(n<=e.length){
//         for(var i=0;i<n;i++)
//         {
//             console.log(e[i])
//         }
//     }
//     else{
//         console.log(`${n} jyada hai elements available nhi hai itne `)
//     }

// }
// arr([10,20,30,23,45],2)




// 16. write a javascript function to get the last element of an array. Passing a
// parameter 'n' will return the last 'n' element of the array
// and should not come undefined value


// function arr(e,n=2)
// {
//    const res = e.reverse()

//     if(n<=e.length){
//        for(var i=0;i<n;i++)
//        {
//         console.log(e[i])
//        }
//     }
//     else{
//         console.log(`${n} jyada hai elements available nhi hai itne `)
//     }

// }
// arr([10,20,30,23,45,39],2)


// or




// function arr(e,n=2)
// {
//        if(n<=e.length){
//        for(var i=0;i<n;i++)
//        {
//         console.log(e[e.length-1-i])
//        }
//     }
//     else{
//         console.log(`${n} jyada hai elements available nhi hai itne `)
//     }

// }
// arr([10,20,30,23,45,39],2)





// 17. write a javascript program to find
//  the most frequent item(kon sa element sbse jyada bar aya hai) of an array


// var arr = [1,2,2,2,2,2,2,1,3];

// var obj = {
//     1:2,
//     3:1
// };

// console.log((obj[1]=3))

// console.log(obj.hasOwnProperty(1))


// var arr = [1,2,2,2,2,2,2,1,3];
// var obj = {};
// for(var i=0;i<arr.length;i++)
// {
//     if(obj.hasOwnProperty(arr[i])==false){
//         obj[arr[i]] = 1;
//     }
//     else{
//         obj[arr[i]]++;
//     }

// }
// const res = Object.keys(obj);  //this is awesome trick to get the value of an object

// const fres = res.reduce((e,acc)=>{
//     if(obj[e]>obj[acc]){
//         return e;
//     }else{
//         return acc;
//     } 
// })

// console.log(fres)




// 18. write a js program to shuffle(randomize) an array


// const arr = [1,2,3,4,5];
// var totalLength = arr.length;
// while(totalLength>0){
//     totalLength--;
//     const res = Math.floor(Math.random() * totalLength);
//     const temp = arr[4];
//     arr[4] = arr[res];
//     arr[res] = temp;
// }

// console.log(arr)







// 19. write a javascript program to compute the union of two arrays 

// const arr1 = [1,2,3];
// const arr2 = [10,20,30,10];
// const res = [...new Set(arr1.concat(arr2))]

// console.log(res)



// Write a function createHelloWorld. 
// It should return a new function that always returns "Hello World".

// const createHelloWorld = ()=>{
//    return ()=>{
//     return "Hello"
//    }

// }


// const a = createHelloWorld();
// console.log(a())






// Given an integer n, return a counter function.
//  This counter function initially returns n and then returns 1 
//  more than the previous value every subsequent
//   time it is called (n, n + 1, n + 2, etc).



// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// j depend on i
// i=2,5,5 , j=5,5,11

// const twoSum = function(nums,target)                 
// {
//     for(var i=0;i<nums.length;i++)                    
//     {
//         for(var j=i+1;j<nums.length;j++)
//         {
//             if(nums[i]+nums[j] === target)
//             {
//                 return [i,j]


//             }


//         }

//     }


// } 

// console.log(twoSum([2,5,5,11],16))





// 2. Add Two Numbers
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// 243
// Explanation: 342 + 465 = 807.



// js is a prototype based language, 
// js have not classes but only in syntactic sugar form
// but behind the scene js is prototype means made constructor function for classes

// why use oop in js :- because due to use of oops concept in js code
//  will not be massy
// and we can use in js java feature also.
// we can use abstraction means hide the details and only show important and useful 
// things and many more feature we can use due to oops.
// due to oops we can prevent from complexity of the code and make the easy code.
// with great and useful functionality
// c language is the  procedural type style means there is no object and classes,
// function made.

// functional programming => pure function use.


// parts of oops:-
// 1. Object literal means pure object {}
// 2. Prototypes
// 3. classes
// 4. Instances(new, this)


// 4pillar in oops:-
// 1. abstraction
// 2. encapsulation
// 3. inheritance
// 4. polymorphism




// Constructorfunction or class in oops:- 

// create the bankAccount detail for users

// function BankAccount(custName,bal=0){
// this.customerName = custName;
// this.accountNumber = Date.now();
// this.balance = bal;

// this.deposit = function(amount){             //method in class or constructor function
//     this.balance += amount;
// }

// this.withdraw = (amount) => {
//     this.balance -= amount;
// }

// }
// // here left hand side = this.customerName is the property in oops
// // BankAccount is the constructor function or we can say class

// const priyaAccount = new BankAccount("Priya karn", 1000)  //new keyword make the individual object from constructor function 
// const xyzAccount = new BankAccount("xyz")
// // console.log(priyaAccount)
// // console.log(xyzAccount)

// // priyaAccount.customerName = "Ankita Karn";   
// // priyaAccount.balance = 30000;    // but i want this is private donot access by anyone and cannot be modify so we can use encapsulation
// // console.log(priyaAccount);

// priyaAccount.deposit(5000)
// priyaAccount.withdraw(2000)
// console.log(priyaAccount,xyzAccount)







// // Linked list

// var node1 = {
//     val:100,
//     next:""
// }
// var node2 = {
//     val:200,
//     next:null
// }

// node1.next = node2.val;
// console.log(node1.next)



// power of 2:-

// function power(num)
// {
//     var a = 2;

// }

// power(4);

// var a = 8;
// for(var i=1;i<=10;i++)
// {

// }



// pattern questions
// 1.  *  *  *  *  * 
//     *  *  *  *  *
//     *  *  *  *  *


// var rows = 3;
// var column = 4;

// for(var i=1;i<=rows;i++){
//   var star = " "
//   for(var j=1;j<=column;j++){
    
//     star = star + "*";
    
//   }
//   console.log(star)
   

// }

// const square = (row,column)=>{
//   var star = ""
//   for(var i=1;i<=row;i++){
//       for(var j=1;j<=column;j++){
//           star = star + "* "
//       }
//       star = star + "\n"
//   }
//   return star;
// }

// console.log(square(3,4))








// for(var i=1;i<=3;i++)
// {                                       
//     var star = ""
//     for(var j=1;j<=5;j++)
//     {
//         var star = star + "* ";
//     }
//     console.log(star)    

// }





// 2.  *  *  *  *  * 
//     *           *
//     *  *  *  *  *


// i = 1  j == 12345  
// i=  2    j =  1 5  
// i = 3  j = 12345





// for(var i=1;i<=3;i++)
// {
//     var star = "";
//     for(j=1;j<=5;j++)
//     {
//         if(j<=5 && i==1 || i==3)
//         {
//             star = star+"* "
//         }
//         else if(j==1 || j==5)
//         {
//             star =  star + "* "
//         }else{
//             star =  star + " "
//         }
//     }
//     console.log(star)
// } 










// 3.  print this pattern :- 
// *    
// **   
// ***
// ****
// *****

// for(var i=1;i<=5;i++)
// {
//     var star = "";
//     for(j=1;j<=5;j++)
//     {
//         if(j<=i)
//         {
//             star = star + "*"
//         }else{
//             star = star + " "
//         }
//     }
//     console.log(star)
// }



// 4. print the patterm:-
// * * * * * 
// * * * *  
// * * *
// * *
// *




// for(var i=1;i<=5;i++)
// {
//     var star = ""
//     for(j=1;j<=5;j++)
//     {
//         if(j<=6-i)
//         {
//             star = star + "* "
//         }else{
//             star = star + " "
//         }
//     }
//     console.log(star)
// }





// 4.       *
//       *  *  *
//    *  *  *  *  *
// *  *  *  *  *  *  *

// for(var i=1;i<=4;i++)
// {
//     var star = "";
//     for(j=0;j<8;j++)
//     {
//         if(j<4+i && j>4-i)
//         {
//             star = star + " * "
//         }else{
//             star = star + "   "
//         }

//     }
//     console.log(star)

// }


// 5.                *  *  *  *  *  *  *
//                      *  *  *  *  *
//                         *  *  *
//                            *


// for(var i=1;i<=4;i++)
// {
//     var star = "";
//     for(var j=0;j<8;j++)
//     {
//         if(j<9-i && j>i-1)
//         {
//             star = star + " * "
//         }else{
//             star = star + "   "
//         }
//     }
//     console.log(star)
// }



// 6.

// for(var i=1;i<=4;i++)
// {
//     var star = "";
//     for(var j=0;j<8;j++)
//     {
//         if(j<4+i && j>4-i)
//         {
//             star  = star + "*"
//         }
//         else
//         {
//             star = star + " "
//         }
//     }
//     console.log(star)
// }


// 7. solve the pattern
// 1    
// 12   
// 123
// 1234
// 12345

// for(var i=1;i<=5;i++)
// {
//     var star = "";
//     for(var j=1;j<=5;j++)
//     {
//         if(j<=i)
//         {
//             star = star + j
//         }
//         else{
//             star = star + " "
//         }

//     }
//     console.log(star)
// }



// 8.
// 12345
// 1234 
// 123
// 12
// 1

// for(var i=1;i<=5;i++)
// {
//     var star = ""
//     for(var j=1;j<=5;j++)
//     {
//         if(j<=6-i)
//         {
//             star = star + j;
//         }

//         else {
//             star = star + " "
//         }
//     }
//     console.log(star)
// }


// 9.

// 1
// 2 3
// 4 5 6
// 7 8 9 10       
// 11 12 13 14 15

// var count = 0;
// for(var i=1;i<=5;i++)
// {
//     var star = "";
//     for(var j=1;j<=5;j++)
//     {

//         if(j<=i)
//         {
//             count = count+1;
//             star = star + count+" ";


//         }
//         else{
//             star = star + "  ";
//         }

//     }

//     console.log(star)

// }



// 10.

// A     
// A B    
// A B C
// A B C D
// A B C D E

// for(var i=1;i<=5;i++)
// {
//     var count = 65;
//     var star = "";
//     for(var j=1;j<=5;j++)
//     {
//         if(j<=i)
//         {
//             star = star + String.fromCharCode(count) + " ";
//             count = count+1;
//         }
//         else
//         {

//             star = star + " "
//         }


//     }
//     console.log(star)
// }




//11.
// A B C D E 
// A B C D  
// A B C
// A B
// A


// for(var i=1;i<=5;i++)
// {
//     var count = 65;
//     var star = "";
//     for(var j=1;j<=5;j++)
//     {
//         if(j<=6-i)
//         {
//             star = star + String.fromCharCode(count) + " ";
//             count = count+1;
//         }
//         else
//         {

//             star = star + " "
//         }


//     }
//     console.log(star)
// }



// 12.
// A     
// B B    
// C C C
// D D D D
// E E E E E

// var count = 65;
// for(var i=1;i<=5;i++)
// {

//     var star = "";
//     for(var j=1;j<=5;j++)
//     {
//         if(j<=i)
//         {
//             star = star + String.fromCharCode(count) + " ";

//         }
//         else
//         {

//             star = star + " "
//         }


//     }
//     console.log(star)
//     count = count+1;
// }



// 13.
// A     
// B A    
// C B A
// D C B A
// E D C B A

// var count = 64;
// for(var i=1;i<=4;i++)
// {

//     var count = count+i;

//     var star = "";
//     for(var j=1;j<=4;j++)
//     {
//         if(j<=i)
//         {

//             star = star + String.fromCharCode(count) + " ";
//             count = count - 1;
//         }
//         else
//         {

//             star = star + " "
//         }


//     }

//     console.log(star)

// }



// for(var i=1;i<=4;i++)
// {
//     var count = 65;
//     var star = ""
//     for(var j=1;j<=4;j++)
//     {
//         if(j>=5-i)
//         {

//             star = star + String.fromCharCode(count) + " "
//             count = count + 1;
//         }
//         else{
//             star = star + "  "
//         }



//     }

//     console.log(star)
// }


// var count = 68;
// for(var i=1;i<=4;i++)
// {

//     var count = count+i;

//     var star = "";
//     for(var j=1;j<=4;j++)
//     {
//         if(j<=i)
//         {

//             star = star + String.fromCharCode(count) + " ";
//             count = count + 1;
//         }
//         else
//         {

//             star = star + " "
//         }


//     }

//     console.log(star)

// }





// const ParentObject = {
//     priya : {
//         hairColor : "black",
//         learn:"dev",

//     },

//     ankita : function(){
//         return ParentObject.priya

//     }
// }

// console.log(ParentObject.ankita())
// console.log(ParentObject.priya)
// const anotherObject = {
//     get : function(){
//         return ParentObject.priya
//     }


// }

// console.log(anotherObject.get())



// const student = {
//     name : "Priya",
//     age : 23,
//     class : "college",
//     Biodata : function(){
//         return `domain : developer, degree : BTECH`
//     }
// }

// const Players = {
//     student,
//     game : "Badminton"
// }

// const Dancers = {
//     student,
//     danceform : "hiphop"
// }



// console.log(Players.student)


// so here we are using inheritance without class that means in js inheritance already Come





// now i will use class keyword to create an object

// function Students()
// {

// }

// or as we know that class is nothing but the type of the function but we use class keyword



// class Students{
//     #myage = 0
//     myName;
//     myClass;
//     constructor(name,age,Class){
//         // i want to access the name as a property then use this keyword
//         // means for accessing the property we use this keyword and inside the block of constructore
//         // we must define the property
//         this.myName = name;
//         this.#myage = age;     //private
//         this.myClass = Class;
//     }
//         Biodata(){
//     return `hi i am learning oops in js ${this.myName} ${this.#myage} ${this.myClass}`
//     }
//     // setAge(age){
//     //     if(isNaN(age))
//     //     {
//     //         throw new Error("age input is not a number")
//     //     }
//     //     return this.#myage = age;

//     // }

//     // getAge(){
//     //     return this.#myage;
//     // }

//     // or now setter and getter


//     set myage(age){
//         if(isNaN(age))
//             {
//                 throw new Error("age input is not a number")
//             }
//             return this.#myage = age;
//         this.Domain()
//     }

//     get myage(){
//         return this.#myage;
//     }



// }
// // // with the help of class we are creating object with new keyword
// // let Stuobject1 = new Students("Priya",23,"College");
// // let Stuobject2 = new Students("Ankita",19,"College")
// // Stuobject1.Biodata();
// // Stuobject2.Biodata()



// class Player extends Students{

//     constructor(name,age,Class,game){
//         super(name,age,Class);
//         this.mygame = game;
//     }
//     // Biodata(){
//     //     console.log(`hi i am learning oops in js ${this.myName} ${this.myage} ${this.myClass} ${this.mygame}`)
//     // }
//     // or

//     // method overriding
//     PlayerData(){
//        return `${super.Biodata()} I love ${this.mygame}`;
//     }

//     // get myage(){
//     //     return this.#myage;       //cannot access
//     // }


// }
// console.log("Player data")
// let Plobject1 = new Player("Priya",23,"College","Badminton");
// let Plobject2 = new Player("Ankita",19,"College","Chess")
// // Plobject1.Biodata();
// // Plobject2.Biodata();
// // console.log(Plobject1.PlayerData());
// // console.log(Plobject2.PlayerData());


// // so here data is not private anyone unauthorized people can accesss the data and also modify wrong data
// Plobject1.myName = "anjali";
// Plobject1.myage = 50
// // or
// // Plobject1.#myage = 13;  // error show


// // Plobject1.setAge("hello")
// // Plobject1.setAge(30)

// // for setter access;-
// Plobject1.myage = 200;



// // console.log(Plobject1.getAge())


// // or for getter access
// console.log(Plobject1.myage)

// console.log(Plobject1.PlayerData());
// console.log(Plobject2.PlayerData());






// Fibonacci sequence. with the help of function
// Return hmesha ek he chij krta hai mutliple number return nhi hoga array ki form mein ho sakta hai
// const Fibonacci = (rows)=>{
//   var a = 0; var b = 1; var result = [a,b];
//   for(var i=0;i<rows-2;i++){
//     c = a+b;
//     a=b;
//     b=c;
//     result.push(c)
//   }
//   return result;
// }

// const FiboResult = Fibonacci(7);
// for(ele of FiboResult){
//   console.log(ele)
// }






// remove element question in leetcode:-


// this approach is long 
// var removeElement = function(nums, val) {
// var res = "";
//  for(var i=0;i<nums.length;i++)
//  {
//     if(nums[i]!=val){
//         res = res + nums[i].toString();
//     }

//  }
//  const fres = res.split("").map((e)=>{
//     return Number(e)
//  })
//  console.log(fres)
// }
// removeElement([3,2,2,3],3);

// or

//this is good approach in one line
// var removeElement = function(nums, val) {
//     var res = [];
//      for(var i=0;i<nums.length;i++)
//      {
//         if(nums[i]!=val){
//             res.push(nums[i])
//         }

//      }
//      const fres = res.map(Number);
//     console.log(fres);
//     }
//     removeElement([3,2,2,3],3);


// var argumentsLength = function(...args) {
//     var res = []
//     for(i in args){
//         res.push(args[i])
//     }
//     return res.length;

// };



// console.log(argumentsLength([{}, null, "3",2])); // 3
// console.log(argumentsLength([1,2,3,4]))





// var reduce = function(nums, fn, init) {

//   for(var i=0;i<nums.length;i++)
//   {
//     nums[init]+init;
//   }
// };

// console.log(reduce([1,2,3,4],function sum(accum, curr){
//     return accum + curr
// },0))



//dsa
// structure of node in linked list with the help of mysirg concept and code of chatgpt

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }

// const node1 = new Node(42);
// const node2 = new Node(56);
// const node3 = new Node(73);

// node1.next = node2;
// node2.next = node3;

// console.log(node1);
// console.log(node2);
// console.log(node3);






// Remove Duplicates from Sorted Array size of array should be fix;

// const nums = [1,1,2];
// console.log(nums.length)
// new Set(arr) is a set containing all the arr value that is unique and remove
// duplicate value and spread operator back to an set to array;
// we cannot directly convert set to array by inserting [] we must use spread operator

// console.log([...new Set(nums)])






// const nums = [1,1,2];  //6

// for(var i=0;i<nums.length;i++)
// {
//     for(var j=nums.length;j>=i+1;j--)  // j = 4
//     {
//         if(nums[i]===nums[j])
//         {
//             nums.splice(i,1)   //delete the element from main array 1 denote 1 element delette fromt the array
//         }
//     }

// }
// console.log(nums)


// Apply Operations to an Array

// let nums = [1,2,2,1,1,0]  //6
// console.log(nums.splice(3,1))
// console.log(nums)


// for(var i=0;i<nums.length;i++)
// {
//     for(var j=nums.length;j>i;j--)
//     {
//         var a = nums.splice(i,1);
//         var b = i;

//     }
//     console.log(a+b);
// }




// function num(...arr){
//     let res = -1;
//     let temp = 0;
// for(var i=0;i<arr.length;i++)
// {
//     for(var j=i+1;j<arr.length;j++)
//     {
//         if(arr[i]>arr[j])
//         {
//             temp = arr[i];  
//             arr[i] = arr[j]  
//             arr[j] = temp;  
//         }
//     }
// }

//     for(var i=0;i<arr.length;i++)
//     {
//         for(var j=i+1;j<arr.length-1;j++)
//         {
//             if(arr[i]>arr[j]){
//             res = arr[i]
//             }
//             else{
//                 res = arr[j]
//             }


//         }
//         if(arr[i]==arr[j]){
//             res = -1
//         }

//     }
//     console.log(res)

// }

// num(10,25,-12,-6,20,20);


// //intersection

// function intersection(arr1,arr2){

// for(var i=0;i<arr1.length;i++)
// {
//     for(var j=0;j<arr2.length;j++)
//     {
//         if(arr1[i] == arr2[j])
//         {
//             console.log(arr1[i]);
//         }
//     }
// }

// }

// intersection([1,2,3],[2,3,4])


// var intersection = function(nums1, nums2) {
//     var res = [];
// for(var i=0;i<nums1.length;i++)
// {
//     for(var j=0;j<nums2.length;j++)
//     {
//         if(nums1[i] == nums2[j])
//         {
//             res.push(nums1[i])
//             break;
//         }

//     }

// }

// return res;


// }

// console.log(intersection([1,2,2,1],[2,2]));




// const pobj3 = ()=>{
//     return new Promise((resolve,reject)=>{
//       const api = [
//         {
//           name:"priya"
//         }
//       ]

//       resolve(api)
//       reject("error")
//     })
//   }

//   const getData = async ()=>{
//     const data = await pobj3();
//     console.log(data[0])
//   }

//   getData();



// these concept should be always learn that intialize the count function always just
// outside those function in which we write the logic.

// var counterCall = (n)=>{
//     var count = -1;
//     return function counte(){
//         count++;  
//         return n+count;
//     }
// }

// const res = counterCall(10);
// console.log(res());
// console.log(res());
// console.log(res());
// console.log(res());
// console.log(res());



// revise global and local scope that is available in gdb compiler 

// var a = "global scope ";

// const Parent = () =>{
//     var p = "parent";
//     // return a + p;
//     // return a + p + c;   //lexical scope c not access by parent function 

//     const Child = ()=>{
//         var c = "child";
//         return p + c + a;  //but child function can access parent function.
//     }

//     console.log(Child())
// }

// console.log(Parent());


//--------closure--------  theory in word
//this example also be ok.

// const Outer = (a) =>{
//     let b = 3;
//     // return a+b+c;

//     const Inner = (c)=>{   
//                             //here Inner function can access the 
//         return a+b+c;         //variable and parameter of outer function

//     }
//     // return Inner(1)
//     console.log(Inner(1))
// }

// console.log(Outer(2));

//this is best example

// const Outer = (a)=>{
//     let b = 3;

//     const Inner = ()=>{
//         return a+b;
//     }
//    return Inner;
// }

// const res1 = Outer(2);
// console.dir(res1);       //see in inspect
// res1();
// console.log(res1)


// --------------IIFE-------------- theory in word

// without IIFE
// function authorName(){
//     var a = "priya karn";
//     console.log(a);
// }
// authorName(); // so here dependent we need to call the function
// console.log(a); 


//with IIFE global(anonymous + private data) + IIFE

// (function(name){
//     console.log(name)
//     var age = "99";
//     console.log(age);
// })("priya karn");       //here function automatically call when we defined.

// console.log(age)      //data is private can't access



//-----------Singleton = IIFE + closure(lexical scope wala example type)--------------------

// const Singleton = (function(){
//     var instance = 0;

//     function inner(){
//         var obj = {
//             name : "priya",
//             age : 20,
//             num : Math.floor(Math.random()*100)
//         }
//        return obj;
//     }
// //    return inner();
// // agar yhan sirf return inner krte then pure closure hota best example wala 
// // or
// return{
//     getInstance : function(){
//         if(!instance){
//             instance = inner()         //like lexical scope example in closure
//         }
//         return instance;
//     }
// }  
// })();
// const fres = Singleton.getInstance();
// const fres1 = Singleton.getInstance();
// const fres2 = Singleton.getInstance();
// console.log(fres,fres1,fres2);



//-------------Proxy--------------
// 1. create the trap(handler) with the help of get

// const person = {
//     name : "priya",
//     age : "23",
//     qualification : "BTECH"
// }

// console.log('name' in Person);

// const handler = {
//     get : function (target,name){
//         return (name in target)?target[name] : "Not exist"
//     }
// }

// const proxy = new Proxy(person,handler);
// console.log(proxy.name);









//single ton structure apply in this leet code question
// const expect = (function(val){

//     const inner = ()=>{
//         const obj = {
//             getb : function(b){
//                 return b
//             }
//         }
//         return obj.getb(50);
//     }
//     return{ 
//         toBe : function(){
//             if(val === inner()){
//                 return{
//                     "value" : true
//                 }
//             }else{
//                 return{
//                     "error":"not equal"
//                 }
//             }
//         }


//     }

// })(5)

// console.log(expect.toBe())

// const expect = (function(val){
//     const obj = {
//         toBe : function(b){
//             if(val === b){
//                 return{
//                     "value" : true
//                 }
//             }else{
//                 return{
//                     "error" : "notEqual"
//                 }

//             }
//         },
//         notToBe : function(b){
//             if(val!==b){
//                 return{
//                     "error" : "notEqual"
//                 }
//             }else{
//                 return{
//                     "value" : true
//                 }
//             }
//         }
//     }
//     return obj;

// })(5)

// console.log(expect.toBe(null));
// console.log(expect.notToBe(5));

// or
// const expect = (val)=>{
//     const obj = {
//              toBe : function(b){
//                  if(typeof(val)==typeof(b)){
//                      return true
//                  }

//                  else{

//                         throw new Error("Not Equal");


//                 }


//              },
//              notToBe : function(b){
//                if(val!=b){
//                      return true
//                  }
//                     else{
//                         throw new Error("Equal");
//                     }

//              }
//          }
//          return obj;

// }




// console.log(expect('5').toBe(5))


// const obj = {
//     name:"priya",
//     age :23
// }

// console.log(obj.name);
// console.log(obj.age);

// const {name,age} = obj;
// console.log(name,age) 


// let a =[{
//     itemData : "priya",
//     totalItem : 0,
//     totalAmount : 0
// }]

// const res1 = [...a];
// console.log(res1[0].itemData)




// console.log(Object.entries(a))

// let b = {...a,totalItem:a.totalItem+1};
// console.log(b)

//optional chaining


let res = 20;


// res = undefined;
// console.log(res);



// const intialState = {
//     totalAmount : 0
// };


// const fres  = {...intialState};
// const {item} = fres;
// console.log(item)    



// const data = [1,2,3];
// // const b = data.filter((e)=>{
// //     return e<3;
// // })

// const b = data.map((e)=>{
//     if(e>1){
//         return e
//     }
// })

// console.log(b)



// 2634. Filter Elements from Array  ye approach yaad rkh krne ke tarika dekh
// var filter = function(arr, fn) {
//     const filterRes = [];       
//     var i = 0;
//      for(i;i<arr.length;i++){
//         if(fn(arr[i],i)){
//             filterRes.push(arr[i])
//         }     
//      }
//      return filterRes; 
//  }




// console.log(filter([10,10,10,20,30],function greaterThan10(n){
//     return n>10
// }))

// console.log(filter([10,10,10,20,30],function firstIndex(n,i){
//    return i === 0;

// }))

// console.log(filter([-2,-1,0,1,2],function plusOne(n,i){
//     return n+i
// }))









// return number greater than 10 without filter method use
// const arr = [10,20,30,40];
// const filterresult = [];

// for(var i=0;i<arr.length;i++)
// {
//     if(arr[i]>10)
//     filterresult.push(arr[i])
// }

// console.log(filterresult)




//find second largest number from an array
// const arr = [2,3,6,6,7,100,99];
// function secondlargestnum(arr){
//     const a = arr.sort((a,b)=>{
//         return b-a;
//     })
//     let res = [...new Set(a)];
//     console.log(res)
// //[ 100, 7, 6, 3, 2 ]
//     let b = 0;
//     for(var i=1;i<res.length;i++){
//         for(var j=i+1;j<res.length;j++)
//         {
//             if(res[i]>res[j]){
//                 b=res[i]
//             }
//             break;
//         }
//         break;
//     }

//     console.log(b)
// }

// secondlargestnum(arr)


//day 2 loops hackerrank
// const name = "priyakarn";
// let vowel = ['a','e','i','o','u'];

// for (var i = 0; i < name.length; i++) {
//     if(vowel.indexOf(name[i])>-1){
//         console.log(name[i])
//     }
// }

// for(var i=0;i<name.length;i++){
//     if(vowel.indexOf(name[i])==-1){
//         console.log(name[i])
//     }
// }



// Program to Count the Number of Vowels & Consonants in a String

// let myStr = "hi this is priya karn";
// let a = myStr.split(" ")
// let b = myStr.replace(/\s+/g, '')
// console.log(b)
// let countvow = 0;
// let countCons = 0;
// let vow = ['a','e','i','o','u'];

// for(var i=0;i<b.length;i++)
// {
//     if(vow.indexOf(b[i])>-1){
//         countvow +=1;
//     }
// }
// console.log(countvow)
// for(var i=0;i<b.length;i++)
// {
//     if(vow.indexOf(b[i])==-1){
//         countCons+=1;
//         console.log(b[i])
//     }
// }

// console.log(countCons)

// //interview question 1:-
// let names = ['priya','karn','madhu'];
// // 1. add ankita and himmu at the end;

// names.splice(names.length,0,'ankita','himmu');
// console.log(names);

// // 2. tell me the output of the splice method;
// // console.log(names.splice(names.length,0,'ankita','himmu'))
// // console.log(names.splice(names.indexOf('karn'),1,"KARN"))

// // 3. Update karn to KARN  

// names.splice(names.indexOf('karn'),1,"KARN");
// console.log(names)

// // 4. delete madhu from an Array
// names.splice(names.indexOf('madhu'),1)
// console.log(names);
// // do it by single method.


//interview question 2:-
// filter out undefined and null data;
// Map mein agar condition lagati hai to true false mein 
// return hoga map sirf array data ko loop ke liye use hota hai 

// var data = [
//     { name : "daniel", age : 45},
//     { name : "john", age : 34},
//     { name : "robert", age : null},
//     { name : "jen", age : undefined},
//     { name : null, age:undefined}
// ];

// const result = data.filter((e,index)=>{
//     console.log(e.age)
//     return e.age!=null;        //null == undefined
// })
// console.log(result)
// console.log(null===undefined)


// optional chaining
// const user = {
//   name : "user",
//   age : 28,
//   address : {
//     street : "Main St",
//     city : "New Road",
//     state : "PK",
//     zip : 10101
//   },
// }

// // want to console city name
// console.log(user.address.roadNumber?.name)


// const users = [
//   {name:"priya",age:20},
//   {name:"ankita",age:14},
//   {name:"himmu",age:7}
// ]

// console.log(users[4]?.name)

// ? means agar users[4] nhi hai to undefined show kre error show nhi hoga
// agar user[4] hai exist krta hai to name ko show krega

// or

// if(users[4]){
//   console.log(users[4].name)
// }else{
//   console.log(users[2].name)
// }



// difference between ?? and || operators
//  in js falsy value is 0, false, "", null, undefined, and Nan.

// agar myVal mein koi value nhi hai to default value dikha do jo ki yhan 10 hai

// const myVal = "";
// console.log(myVal || 10); 
// console.log(myVal ?? 10)
// jb || operator lagate hain tb sare falsy value ko consider krega.
// lekin ?? operator mein sirf null and undefined ko dekhenge agar ye dono
// myVal ke ander assign hai to default value print hoga jo ki 10 hai


//----------------------question:- find intersection------------------------------- 
// const arr1 = [1,2,3,4,5];
// const arr2 = [3,4,5,6,7];

// console.log(arr1.includes(5))

// for(var i=0;i<arr1.length;i++)
// {
//   for(var j=0;j<arr2.length;j++)
//   {
//     if(arr1[i]==arr2[j])
//     {
//       console.log(arr1[i])
//     }
//   }
// }

// or we can use include
// const intersection = arr1.filter((e)=>{
//   return arr2.includes(e);
// })

// console.log(intersection)




//---------------------------question:-find union---------------------------
// const arr1 = [1,2,3,4,5];
// const arr2 = [3,4,5,6,7];

// const union = arr2.filter((e)=>{
//   return !arr1.includes(e);
// })
// let unionres = union;
// for(element of unionres)
// {
//   arr1.splice(arr1.length,0,element);
// }

// console.log(arr1)

// or

// const union = [...arr1,...arr2];
// console.log([...new Set(union)]);



// convert the array that is in the form of key value pair that is fetch from the api
// i want this data is in the form of object so how to convert????....

// const ObjectArray = (arr)=>{
//   return Object.fromEntries(arr)
// }
// const array = [
//  ["priya",23],
//  ["ankita",20],
//  ["himmmu",17] 
// ]

// let pureObject = ObjectArray(array);
// console.log([pureObject])


// const convertInArray = (obj)=>{
//   return Object.entries(obj)
// }
// const objectdata = {name:"priya",age:23,education:"BTECH"}
// console.log(convertInArray(objectdata))




// question:- Program to Compare two Arrays are Equal or Not in JavaScript

// let arr1 = [4,8,10,5,9];
// let arr2 = [5,10,8,9,4];
// let result = "";
// for(var i=0;i<arr1.length;i++){
//   if(arr2.includes(arr1[i])==true&&arr1.length==arr2.length){
//     res = "both array are equal";
//   }else{
//     res = "not equal";
//   }
// }

// console.log(res)

// or use every method

// let arr1 = [4,10,5,9,8];
// let arr2 = [5,10,8,9,4,4];

// const Equalornot = arr1.every((e)=>{
//   if(arr2.indexOf(e)>-1){
//     return e == arr2[arr2.indexOf(e)]
//   }
// })&& arr1.length===arr2.length

// console.log((Equalornot===true)?"equal two array":"not equal two array")


// flatten array or convert 2d or 3d array into "single array"

// const arr = [
//   ['a','b'],
//   ['c','d'],
//   ['e','f']
// ]

// const flatArray = arr.reduce((acc,e)=>{
//   return acc.concat(e)
  
// })

// console.log(flatArray);


// or we can use flat method
// const arr = [
//   ['a','b'],
//   ['c','d'],
//   ['e',["priya","ankita","himmu"],["a","b",['c','d']],['c','d']]
// ]

// // console.log(arr.flat(3))
// // // or
// console.log(arr.flat(Infinity))



// const data = [
//   {
//     row1 : {
//       name : "priya",
//       age : 23
//     }
//   }
// ]

// console.log(data[0].row1)


// const arr = Array(9).fill(null);
// // console.log(arr)

// arr[0] = "priya"
// console.log(arr)



// const arr = Array(9).fill(null);
// const result = [...arr];

// result[0]="priya";
// console.log(result)


// const isWinnerdata = [
//   [0,1,2],
//   [3,4,5],
//   [6,7,8],
//   [0,3,6],
//   [1,4,7],
//   [2,5,8],
//   [0,4,8],
//   [2,4,6]
// ]

// for(ele of isWinnerdata){
//   let [x,y,z] = ele;
//   console.log(x,y,z)
// }





// FizzBuzz Game: important
// Implement the classic FizzBuzz game using a for loop.
//  The program should iterate through numbers from 1 to 
//  a specified range, replacing multiples of 3 with "Fizz,"
//   multiples of 5 with "Buzz," and multiples of both with "FizzBuzz."

// 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz.


// function fizBuzz(){
//   var number = []
//   for(var i=1;i<=30;i++){
//     if(i%3===0 && i%5===0){
//       number.push("fz")
//     }
//     else if(i%5===0){
//       number.push("Buzz")
//     }else if(i%3==0){
//       number.push("Fizz")
//     }
//     else{
//       number.push(i)
//     }
//   }
//   return number;
// }

// console.log(fizBuzz())





// const triangle = (Row)=>{
//   let result = ""
//   for(var i=1;i<=Row;i++){
//     for(var j=1;j<=Row;j++){
//       if(j>=4-i && j<=2+i){
//         result = result+"*"
//       }else {
//         result += " ";
//       }
//     }
//     result = result+"\n"
//   }
//     for(var i=1;i<=Row;i++){
//       for(var j=1;j<=Row;j++){
//         if(j>=i && j<=6-i){
//           result = result+"*"
//         }else {
//           result += " ";
//         }
//       }
//       result = result+"\n"

//   }
  
    
    
//   return result;
 
// }

// console.log(triangle(6))





// power of a,b
// const power = (a,b)=>{
//   return a**b;
// }

// console.log(power(2,4))






// Student Database:
// Build a student database where each student is represented
//  as an object with properties such as name, age, and grade.
//   Users can add new students, display a list of students,
//    and filter students based on certain criteria.


// const studb = [
//   {
//     name : "priya",
//     age : 23
//   },
//   {
//     name : "ankita",
//     age : 19
//   },
//   {
//     name : "himmu",
//     age : 16
//   }
// ]


// # day 1:-

// const findLongestWord = (word)=>{
//   const res = word.split(" ");
//   const fres = res.reduce((e,acc)=>{
//     return (e.length > acc.length)?e:acc;
//   })
// if(word.trim()===""){
//   return false;
// }
//   return fres;
// }

// console.log(findLongestWord(" "));

// # Day 2:-
// const name = "priya karn"
// console.log(name.slice(1))
// console.log(name.substring(1))


// const hashconvert = (name)=>{

//   if(name.length>280 || name.trim() === ""){
//     return false;
//   }

//   else{
//   const arr = name.split(" ");

  // const fres = arr.map((e)=>{  
  //   return e[0].toUpperCase() + e.substring(1);
  //   })

  // or
  
  // const fres = arr.map((e)=>{
  //   return e[0].toUpperCase() + e.slice(1)
  // })
  // or

  // const fres = arr.map((e)=>{
  //   return e.replace(e[0],e[0].toUpperCase())
  // })
    // let finalStr = "#";
    // for(var i=0;i<fres.length;i++){
    //   finalStr = finalStr + fres[i];
    // }
    // return finalStr;
    // or 

  // return `#${fres.join("")}`
    
  // }
  // }


// console.log(hashconvert("my name"))


// Day 3:-

// const countChar = (name,chara)=>{
//   let count = 0;
//   for(var i=0;i<name.length;i++){
//     if(name[i]===chara.toUpperCase() || name[i]===chara.toLowerCase()){
//       count = count + 1;
//     }
//   }

//   return count;
// }


// console.log(countChar("MissIssippi","I"))










// #Day 4:-

// const checkTriangleType = (a,b,c)=>{
//   if(a==b && b==c && a==c) return "Equilateral Triangle"
//   else if(a!=b && b!=c && a != c) return "Scalen triangle"
//   else if(a==b || b==c || c==a)return "Isosceles triangle"
  
// }

// console.log(checkTriangleType(1,2,1))
















// # day 5:-
// const sortArray = (num)=>{
//  return num.sort((a,b)=>{
//   return b-a;
//  })

  
// }

// console.log(sortArray([10,8,5,3]));


// // one more question on the base on sort
// sort the array of an object on the base of age
// const obj = [
//   {name : "p",age:20},
//   {name : "pr",age:30},
//   {name : "pri",age:40},
//   {name : "priy",age:50},
//   {name : "priya",age:60},
// ]

// const sortObj = obj.sort((a,b)=>{
//   return (a.age)-(b.age);
// })

// console.log(sortObj);


// Day 6:-

// const pal = (name)=>{
  
//   const newName = name.split(" ");
//   var s = "";
//   for(var i=0;i<newName.length;i++){
//     s = s+ newName[i];
//   }

//   let fresr = s.toLowerCase();
//   const newnewName = name.split("")
//   const fres = newnewName.reverse().join("").toLowerCase()
//   var d = "";
//   for(var i=0;i<fres.length;i++){
//     d = d+ fres[i];
//   }
//   if(fres === d){
//     return true;
//   }else{
//     return false;
//   }
  
// }

// console.log(pal("Racecar"));
// console.log(pal("MoM"));
// console.log(pal("Murder for a jar of red rum"));

// or

// const pal = (name)=>{
//   let res = name.toLowerCase().replace(/\W/g,"");   //here W is non word
//   let fres = res.split("").reverse().join("");

//   return fres==res?true:false
// }
// console.log(pal("Murder for a jar of red rum"));
// console.log(pal("Racecar"));
// console.log(pal("MoM"));



// // Day 7:-

// const findMax = (num)=>{
//   const res = num.sort((a,b)=>{
//     return a-b;
//   })
// for(var i=res.length-1;i>0;i--){
//   var fres = res[i]
//   return fres;
// }


// }

// console.log(findMax([1,5,3,10,2]));
// console.log(findMax([-10,-5,-3,-9,-2]));

// how to solve with the help of Math.max??....
// // let fres = (1,2)
// // console.log(Math.max(fres));
// const findMax = (num)=>{
// // console.log(...num)
//  return Math.max(...num)
// }

// console.log(findMax([1,5,3,10,1]));
// console.log(findMax([-10,-5,-3,-9,-2]));




// Day 8:-

// const fact = (num)=>{
//   var mul = 1;
//   for(var i=1;i<=num;i++){
//     mul*=i;
//   }
//   return mul;
// }

// console.log(fact(4));



// Day 9:-

// const findavg = (num)=>{
//   const res = num.reduce((e,acc)=>{
//     return e+=acc;
//   })
//   // var count = 0;
//   // for(var i=0;i<num.length;i++){
//   //   count+=1;
//   // }

//   return Math.floor(res/num.length);

// }

// console.log(findavg([5,10,2,8]));


// Day 10:-

// const arraysEqual = (arr1,arr2)=>{

//   for(var i=0;i<arr1.length;i++){
//     if(arr1[i] === arr2[i] && arr1.length === arr2.length){
//       return true;
//     }else{
//       return false;
//     }
//   }
//   return true;
// }
// console.log(arraysEqual([1,2,3],[2,3,2]));

// // or

// const arraysEqual = (arr1,arr2)=>{
//   if(arr1.length !== arr2.length){
//     return false
//   }else{
//     return arr1.every((e,i)=>{
//       return (e===arr2[i])?true:false
//     })
    
//   }

// }


// console.log(arraysEqual([1,2,3],[1,2,3]));



// question:- adultage = 18 now check in age array all the elements are equal 
// to 18 or more than 18 count the no. of age and return those age also

// const checkAge = (arr)=>{
// var adultage = 18;
// var count = 0;
// for(var i=0;i<arr.length;i++){
//   if(adultage <= arr[i]){
//     count +=1;
//     console.log(arr[i])
//   }
// }
// return `${count} is the adultage`
// }
// console.log(checkAge([10,13,18,20]))


// some() function always return true or false

// const checkAge = (age)=>{
//   var adultage = 18;
  
//   const checkfun = (age)=>{
//     return age>= 18
//   }
 
//   const res = age.some(checkfun)
//   return res
// }

// console.log(checkAge([10,13,18,20]))



// Day 11:-
// const sumofdigits = (num)=>{
 
//   var x = num;
//   var y = 0;
//   while(x!=0){
    
//     y = x%10 + y;  
//     x = Math.floor(x/10);  
//   }
//   return y;
// }
// console.log(sumofdigits(123456));


// or

// const sumofdigits = (num)=>{
//   let getnum = String(num);
//   let fres = getnum.split("");
//   const numele = fres.map((e)=>{
//     return Number(e);
//   })

//   return numele.reduce((e,acc)=>{
//     return e+=acc;
//   },0)

// }

// console.log(sumofdigits(123456))

// const arr = [1,2,3,4];
// const fres = arr.reverse();
// console.log(fres)



// Day 12:-

// const removeDuplicate = (arr)=>{
//   // for(var i=0;i<arr.length;i++){
//   //   for(var j=i+1;j<arr.length;j++){
//   //     if(arr[i]===arr[j]){
//   //       arr.splice(j,1);
//   //     }
//   //   }
//   // }
// //       or  in one line

// const res = [...new Set(arr)] 
//   return res;
// }



// console.log(removeDuplicate([1,2,3,2,1,4]));
// console.log(removeDuplicate([5,6,7,7,8,8,9]));
// console.log(removeDuplicate([1,2,3,4]));
// console.log(removeDuplicate([]));



// const arr = [1,2,3];
// arr.splice(1,1);
// console.log(arr)


// var removeElement = function(nums, val) {
//   for(var i=0;i<nums.length;i++){      
//      if(nums[i]===val){
//          nums.splice(i,1);
//      }
//   }
//  return nums
//  }
//  console.log(removeElement([0,1,2,2,3,0,4,2],2))


// Day 13:-

// const countVowels = (name)=>{
//   let count = 0;
//   const res = name.split("");
//   for(var i=0;i<res.length;i++){
//     const ascc  = res[i].charCodeAt(0);

//     if(ascc===97 || ascc===101 || 
//       ascc===105 || ascc===111 || ascc===117 || ascc===65 || 
//       ascc===69 || ascc===73  || ascc ===79 || ascc===85){
//       count+=1;
//     }
//   }
//   return count;

// }


// console.log(countVowels("Priya Karn"));
// console.log(countVowels("Helloo world"));
// console.log(countVowels("thE quIck brOwn fOx"));
// console.log(countVowels("Brrrp"));

// console.log( 'A'.charCodeAt(0))
// console.log( 'E'.charCodeAt(0))
// console.log( 'I'.charCodeAt(0))
// console.log( 'O'.charCodeAt(0))
// console.log( 'U'.charCodeAt(0))


// or use include() method ['a','e','i','o','u'] is array mein h,e present hai ya nhi


// const countVowelss = (name)=>{
//   let count = 0;
//   const vowel = ['a','e','i','o','u'];
//   const res = name.split("");


//     for(var i=0;i<res.length;i++){
//     (vowel.includes(res[i].toLowerCase()) === true || vowel.includes(res[i].toUpperCase()===true))?count+=1:0
    
//   }
//   return count;

// }


// console.log(countVowelss("Priya Karn"));
// console.log(countVowelss("Helloo world"));
// console.log(countVowelss("thE quIck brOwn fOx"));
// console.log(countVowelss("Brrrp"));


// // convert number to array
// const num = 123;


// Day 14:-

// const isPowerofTwo = (num)=>{
//   let res = false;
//   for(var i=1;i<num;i++){
//     if(2**i==8){
//       res = true;
//     }
//   }
//   return res;
// }

// console.log(isPowerofTwo(8));



// bitwise operator & | ^ ~



// const isPowerofTwo = (num)=>{
//   for(let i=1;i<num;i++){
//     if(2**i^8==true){
      
//     }
//   }
// }


// console.log(isPowerofTwo(8));



// Day 15:-


// const sumOfSquares = (num)=>{
//   return num.reduce((e,acc)=>{
//     return e + acc**2;
    
//   },0)
// }
// console.log(sumOfSquares([1,2,3]));

// const sumOfSquares = (num)=>{
//   var res = 0;
//   for(var i=0;i<num.length;i++){
//     res += num[i]**2;
//   }
//   return res;
// }

// console.log(sumOfSquares([1,2,3]));

// var getConcatenation = function(nums) {
  
//   var arr = [];
//   for (var i = 0; i < nums.length; i++) {
//       arr.push(nums[i])
//   }
//   for (var i = 0; i < nums.length; i++) {
//     arr.push(nums[i])
// }
// return arr;
  
// };

// console.log(getConcatenation([1,2,3]))

// console.log(9%3)
// console.log(4%7)


// Day 16:-
// const findMin = (arr)=>{
//   const res = arr.sort((a,b)=>{
//     return a-b;
//   })
//   return res[0]
// }
// console.log(findMin([5,10,2,8]));

// or

// const findMin = (arr)=>{
//   return arr.reduce((e,acc)=>{
//     if(e<acc===true){
//       return e;
//     }else{
//       return acc;
//     }
//   })
// }

// console.log(findMin([5,10,2,8]));
// console.log(findMin([5,-3,0,12,-7]));

// or in one line
// const findMin = (arr)=>{
//   return Math.min(...arr);
// }

// console.log(findMin([5,10,2,8]));
// console.log(findMin([5,-3,0,12,-7]));


// day 17:-

// const camelCase = (name)=>{
//   let res = name.split(" ");
//   const fres = res.map((e)=>{
//     return e[0].toUpperCase() + e.slice(1)
//   })
//   const ffres = fres.join("")
//   return ffres[0].toLowerCase() + ffres.slice(1)
  
  
// }

// console.log(camelCase("hello world priya"));  //helloWorldPriya
// or apply chaining


// const camelCase = (name)=>{
//   return name.trim().split(" ").map((e,index)=>{
//     if(index===0){
//       return e.toLowerCase()
//     }else{
//       return e.charAt(0).toUpperCase() + e.slice(1);
//     }
//   }).join("")
// }
// console.log(camelCase("hello world priya"));  //helloWorldPriya


// const name = " priyakarn "
// console.log(name)
// console.log(name.trim());  //first space and last space remove


// HomeWork:- snake_case

// const toSnakeCase = (name)=>{
//   const res = name.replace(/([a-z])([A-Z])/g,'$1 $2')
  
//   const lowerletter = res.toLowerCase();
//   const arr = lowerletter.split(" ");
//   return arr.reduce((e,acc)=>{
//     return e+"_"+acc
//   })
// }


// console.log(toSnakeCase("helloWorld")); //hello_world


// // Day 18:-

// const isUpperCase = (name)=>{
//   if(name.length === 1){
//     if(name.charCodeAt(0)>=65 && name.charCodeAt(0)<=90){
//       return "uppercase";
//     }else if(name.charCodeAt(0)>=97 && name.charCodeAt(0)<=122){
//       return "lowercase";
//     }
//   }else{
//     return "please write one letter"
//   }
  
// }

// console.log(isUpperCase("P"));
// console.log(isUpperCase("Z"));
// console.log(isUpperCase("a"));
// console.log(isUpperCase("z"))




// var missingNumber = function(nums) {
//   const res = nums.sort((a,b)=>{
//       return a-b;
//   })
//   var count = -1;
//   for(var i=0;i<=res.length;i++){
//       count +=1;
//       if(count != nums[i]){
//           return count;  
//       }

//   }
  
// };


// console.log(missingNumber([0,1,3]))


// Day 19

// const startsWith = (name,b)=>{
  // const res = name.split(" ");
  
  //   if(res[0].toUpperCase() === b.toUpperCase()){
  //     return true;
  //   }else{
  //     return false;
  //   }
  

  // or in one line using built in function

//  return name.toUpperCase().startsWith(b.toUpperCase());


// }

// console.log(startsWith("Hello World", "hello"))  //true
// console.log(startsWith("Hello World", "World"))  //false



// // Day 20:-

// const reverseString = (name)=>{
//   let res = ""
//   for(var i=name.length-1;i>=0;i--){
//     res = res + name[i] 
//   }
//   return res;
// }

// console.log(reverseString("hello"));



// Day 21:-

// const calculateMean = (arr) =>{
  
//   const res = arr.reduce((e,acc)=>{
//     return e+=acc;
    
//   },0)
//   if(arr.length === 0){
//     return 0
//   }
//   return res/arr.length
// }



// console.log(calculateMean([1,2,3,4,5]))  // 3
// console.log(calculateMean([10,20,30]))  // 20
// console.log(calculateMean([-1,0,1]))  // 0
// console.log(calculateMean([]))  // 0



// var reverseString = function(s) {
//   let res = [];

//   for(var i=s.length-1;i>=0;i--)
//   {
//       for(var j=res.length;j<s.length;j++)
//       {
//           res[j] = s[i];
//           break;
//       }
//   }

//   return res;
// };

// console.log(reverseString(["h","e","l","l","o"]))


// console.log(Math.round(5/2))



// Day 22:-


// const calculateMedian = (arr1)=>{
//   let arr = arr1.sort((a,b)=>{
//     return a-b;
//   })

//   let total = 0;
//   if(arr.length%2!=0)
//   {
//       let res = Math.floor(arr.length/2);
//       return arr[res];
//   }else{
//     let res = arr.length/2;
//     for(var i=res-1;i<=res;i++)
//     {
//       total = total + arr[i];
//     }
//     return total/2;
//   }
// }

// console.log(calculateMedian([5,3,9,1,7]))  //5
// console.log(calculateMedian([2,4,6,8]))  //5
// console.log(calculateMedian([1,3,5,7,9,11]))  //6


// // Day 23:-

// const countElements = (arr)=>{
//   let count = 1;
//   var res = {};
//   for(ele of arr){
//     if(res[ele] === undefined){
//       res[ele] = count;
//     }else{
//       res[ele] = res[ele] + count;
//     }
    
//   }
//   return res;
  
// }

// console.log(countElements([1,2,2,3,1,4,2]));


// const obj = {};
// obj[1] = 20;
// console.log(obj[1])


// const obje = {};
// obje[1] = 10;
// obje[2] = 30;
// console.log(obje[1])     //we access the element here
// console.log(undefined||0)
// console.log(undefined===0)
// or



// Day 24:-

const findMode = (arr)=>{
  var count = 1;
  var res = {};
  var max = 0;
  var mode;
  for(ele of arr){
    if(res[ele] === undefined){
      res[ele] = count;
    }else{
      res[ele] = res[ele] + count
    }
//{ '1': 2, '2': 3, '3': 1, '4': 1 }
    if(res[ele]>max){
      max = res[ele]
      mode = ele;
    }
  }

  return mode;
}

console.log(findMode([1,2,2,3,1,4,2]))  //2