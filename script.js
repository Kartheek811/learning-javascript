// //  // printing in console
// //  console.log(9);

// //  // intialization of variables
// // var a = 10;
// // var b = 20;

// // //comparing variables

// // if (a>b) {
// //     console.log(1);
// // } else {
// //     console.log(-1);
// // }

// // var c = "10";

// // //printing type of variables
// // console.log(typeof a);
// // console.log(typeof c);


// // console.log(a==c);
// // console.log(a===c);

// // console.log(4 ** 5);


// let n = 10;
// let m = 0;

// for(let i=2;m<n;i++)
// {
//     let b=true;
//     for(let j=2;j<= Math.sqrt(i);j++)
//     {
//         if(i%j==0)
//         {
//             b=false;
//             break;
//         }
//     }
//     if(b)
//     {
//         m++;
//         console.log(i);
//     }
// }

// var a = 10;
// var a = 20;
// console.log(a);

// let c = 30;
// c = 34;
// console.log(c);

// const b = 54;
// console.log(b);

// for(let i = 1;i <= 5;i++){
//     for(let j = 1;j <= 5;j++){
//         console.log("*");
//     }
// console.log(" ");

// }

//Arrays
// let arr = [10,"helllo",false,3.42,null,'bye'];

// for (let index = 0; index < arr.length; index++) {
//     console.log(typeof arr[index]+" "+arr[index]);
    
// }

// let a = ["Hello",100,1.1,true,'hey'];

// console.log(a);

// a.push();
// console.log(a);

// a.push(12314);
// console.log(a);

// a.pop();
// console.log(a);

// a.pop(100);
// console.log(a);

// a.shift();  
// console.log(a);

// a.shift("One");
// console.log(a);

// a.unshift();
// console.log(a);

// a.unshift("One");
// console.log(a);


// const m ={
//     id :1,
//     name:"kartheek",
//     loc:"Hyderbad"
// }
// console.log(m);

// console.log(m.loc);
// let a = [
//     {
//         id:1,
//         name:"Kartheek",
//         loc:"Hyderabad"
//     },
//     {
//         id:2,
//         name:"hello",
//         loc:"Hyd"
//     },
// ]
// console.log(a);
// console.log(a[0]);
// console.log(a[0].loc);

//forof - arrays
//forin - objects

// for (const element of a) {
   
//     console.log(element);
    
// }

// const obj ={
//     id:11,
//     name:"ddjd",
//     loc:"dd"
// }

// for (const key in obj) {
//     if (!Object.hasOwn(obj, key)) continue;
    
//     const element = obj[key];
//     console.log(element);
    
    
    
// }

// function myFun()
// {
//     console.log(-1);
//     return -1;
    
// }

// console.log(myFun());
// console.log(myFun);

// function add(num1, num2)
// {
//     return num1 + num2
// }

// console.log(add(23,32));
// console.log(add(23,"hello"));

// function add(num1, num2)
// {
//     return num1 - num2
// }

// console.log(add(23,32));

// if you write same function name twice it will execute the latest fun that is delcared in js code
// to overcome the above lilmitation we use function references

// const myFun = function(num1, num2)
// {
//     return num1 + num2;
// }

// console.log(myFun(1,2));



function doMath(num1, num2, op){
switch (op) {
    case "+":
        console.log(`Addition of ${num1},${num2}, is ${num1+num2}`);
        
        break;
    case "-":
        console.log(`Subrtraction of ${num1},${num2}, is ${num1-num2}`);
        break;
    case "*":
        console.log(`Multiplication of ${num1},${num2}, is ${num1*num2}`);
        break;
    case "/":
        console.log(`Division of ${num1},${num2}, is ${num1/num2}`);
        break;
    case "%":
        console.log(`Modulo of ${num1},${num2}, is ${num1%num2}`);
        break;
    case "**":
        console.log(`Power of ${num1},${num2}, is ${num1**num2}`);
        break;
        
    default:
        break;
}
}

doMath(20, 10, "%");


















