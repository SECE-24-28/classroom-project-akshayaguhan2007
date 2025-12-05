var a=10
console.log(a);
let b=20;
console.log(b);
const c=30;
console.log(c);
function namedfunc(){
    console.log("named function");
    console.log("function called");
    console.log("function executed");
}
namedfunc();
var funcExp=function(){
    console.log("Function expression");
}
var arrowExp=()=>{
    console.log("Arrow Function");
}
arrowExp();
(()=>{
    console.log("IIFE");
})();
