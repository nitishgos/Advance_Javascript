//IIFE syntax
/*let a=()=>{
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(456)
    },4000)
})}
(async()=>{
    let c = await a();
    console.log(c);
    let d=await a();
    console.log(d);
    let e=await a();
    console.log(e)
})()*/
//Destructuring and Spread operator
/*const arr=[7,9,10,12,34,55,6,7,8]
let [a,,c,...rest]=arr;
console.log(a,c,rest)*/
/*let {a,b}={a:2,b:5}
console.log(a,b)
//spread operator
const arr1=[5,9,8]
const obj={...arr1}
console.log(obj)
function sum(x,y,z){
    return x+y+z;
}
console.log(sum(...arr1));
const obj1={
    name:"xyz",
    address:"abc"
}
console.log({...obj1,name:"Nitish",Address:"Ausbali"})*/
//Javascript Hoisting
/*console.log(a)
greet()
function greet(){
    console.log("Hello")
}
var a=9;
console.log(a)*/
//closures
/*function a(){
    let a=55
    console.log(a)
    function c(){
        console.log("Hello")
    }
    return c
}
let c=a()
c()*/
// ex Q1
/*const a= async (text)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(text)
        },2000)
    })
}
(
    async ()=>{
        let b= await a("Hello");
        console.log(b)
        let c=await a("World");
        console.log(c)
    }
)()*/
//ex Q2
/*function sum(x,y,z){
    return x+y+z/3;
}
const arr=[5,6,9];
console.log(sum(...arr));*/
//ex Q3
/*const a=async (text,n=2)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(text)
        },1000*n)
    })
}
(
    async()=>{
        let b=await a("Nitish")
        console.log(b)
        let c=await a("Kumar")
        console.log(c)
        let d=await a("Ghosh")
        console.log(d)
    }
)()*/
// ex Q4
function simpleinterest(p,r,t){
    return (p*r*t)/100;
}
console.log(simpleinterest(1000,5,1))



