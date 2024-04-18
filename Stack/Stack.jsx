
//---------------------- Stack start-------------------------------------

// push operation :- push the element on the top of the stack

const pushElement = (ele)=>{
    var max = 5;
    var stack = [];
    if(stack.length<=max){
        for(var i=0;i<stack.length;i++)
        {
            stack[i] = ele;
            stack.length+=1;
        }
    }else{
        return "can't add the element"
    }
    return stack;
}

console.log(pushElement(10));

