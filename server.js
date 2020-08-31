// let url=prompt("enter web url")
// document.write(url.split("//")[1].split('/').slice(1).join('/'));
// https://www.w3schools.com/js/js_string_methods.asp


// // Array.prototype.entries()
// // example1
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// function myFunctionEnteries1()
// {
//     var f = fruits.entries();
//     alert(f);
// }

// // example2


// array.prototype.push()
// example1
var array1=["sanjay","rahul","bani","aman","karan"];
function myFunctionPush1()
{
    array1.push("rahul","sanjay");
    alert(array1);
}

// example2
var array2=[10,7,4,99,44,22,4,854];
function myFunctionPush2()
{
    array2.push("rahul","sanjay");
    alert(array2);
}



// array.prototype.pop()
// example1
var array3=["sanjay","rahul","bani","aman","karan"];
array3.pop();
function myFunctionPop1(){
    alert(array3);
}

// example2
var array5=[10,3,8,4,77,55,99,2];
array5.pop();
function myFunctionPop2(){
    alert(array5);
}

// Array.prototype.shift()
// example1
var ab=["sanjay","shruti","rajeev","nayan","aditya","vipin","ajay"];
ab.shift();
function myFunctionShift1(){

    alert(ab);
}

// example2
var array4=["java", "nodejs", "react", "angulatr"]
array4.shift();
function myFunctionShift2(){
alert(array4);
}


// Array.prototype.unshift()
// example1
var ac1=["sanjay","shruti","rajeev","nayan","aditya","vipin","ajay"];
function myFunctionUnshift1(){
    ac1.unshift("shuru");
    alert(ac1);
}

// example2
var ac2=["java", "nodejs", "react", "angulatr"];
function myFunctionUnshift2(){
    ac2.unshift("shuru");
    alert(ac2);
}



// Array.prototype.indexOf()
// example1
var ad=["sanjay","shruti","rajeev","nayan","aditya","vipin","ajay"];
function myFunctionIndexOf1(){
    var b=ad.indexOf("shruti");
    alert(b);
}
// example2
const names3=["Farah", "Irfan", "Shahid", "Irfan", "Salman"];
const idx=names3.indexOf("Shahid");
names3[idx]="Razi";
function myFunctionIndexOf2(){
    alert(idx)
    }


// Array.prototype.LastindexOf()
// example1
var a=["sanjay","shruti","rajeev","nayan","aditya","vipin","ajay","aman","shruti"];

function myFunctionLastIndexOf1(){
    var bc=a.lastIndexOf("aditya",4);
    alert(bc);
}
// example2
var Lstind=["sanjay","s","b","c"];

function myFunctionLastIndexOf2(){
    var result8=Lstind.lastIndexOf("b",4);
    alert(result8);
}
// Array.prototype.isArray()
// example1
let name2= ["Ram","Kritika","Ramu","Shyam"];
var result1=Array.isArray(name2)
function myFunctionIsArray1(){
    alert(result1)
    }

// example2
var arrayLst=10;
var rest2=Array.isArray(arrayLst)
function myFunctionIsArray2(){
    alert(rest2)
    }


    // Array.prototype.join()
// example1
var x=["shruti","baby","shuru","aditya"];
var y=["vipin","ajay","suboy","nishant"];
var c=x.concat(y);
var d=c.join("/")
function myFunctionJoin1(){
    alert(d);
}
// example2
const countries=["Russia", "India", "UK", "USA"];
let rest6= countries.join(",");
function myFunctionJoin2(){
    alert(rest6);
}

// Array.prototype.slice()
// example1
var ax=["shruti","sumit","aman","rehman"];
var ba=ax.slice(0,3);
function myFunctionSlice1(){
    alert(ba);
}
// example2
const sub= ["maths", "hindi", "bio", "physics", "chemestry"];
 const subComplete= sub.slice(0,3);

 function myFunctionSlice2(){
 alert(subComplete);
 }

// Array.prototype.splice()
// example1
var Spl=["shruti","sumit","aman","rehman"];
var bb=Spl.splice(2,1,"geeta");
function myFunctionSplice1(){
    alert(bb);
}
// example2
let participant=["Ram", "Shyam", "Raju", "Rohan", "Rani"];

let notAttending= participant.splice(1,2,"kritika", "Raghav");

function myFunctionSplice2(){
alert(notAttending);
console.log(participant);
}

// Array.prototype.map()
// example 1
var aa = [65, 44, 12, 4];
var cc = aa.map(myFunction);

function myFunction(num) {
  return num * 10;
}
function myFunctionMap1(){
    alert("answer is: "+cc);
}

// example 2
const products=[
    {
        name:"laptop",
        price:2000,
        count:3,
    },
    {
        name:"mobile",
        price:500,
        count:2,
    },
    {
        name:"phone",
        price:1500,
        count:5,
    },
];
function myFunctionMap2(){
const productValue= products.map(item=>item.price*item.count);
 alert(productValue);
}


// Array.prototype.filter()
// example 1
var fil=[10,20,18,17,30,50];
var bp=fil.filter(checkAges);
function checkAges(fil){
    return fil>=18;
}
function myFunctionFilter1(){
    alert("answer is: "+bp);
}
// example2
let numbers=["a","b","c",4,1,2,3,4,6,2];

   let filternum= numbers.filter((value, index, arr)=> {
       return arr.indexOf(value)===index;
   });

   function myFunctionFilter2(){
    alert(filternum);
}

// Array.prototype.fill()
// example1
var xy=["shruti","baby","shuru","aditya"];
xy.fill("shruti");
function myFunctionfill1(){
    alert(xy);
}

// example2
var xz=[10,20,40,60,45,20,70];
xz.fill(100);
function myFunctionfill2(){
    alert(xz);
}

// Array.prototype.concat()
// example1
var xa=["shruti","baby","shuru","aditya"];
var ya=["vipin","ajay","suboy","nishant"];
var ca=xa.concat(ya);
function myFunctionConcat1(){
    alert(ca);
}
// example2
var xb=[10,20,30,40];
var yb=[20,40,50,30];
var cb=xb.concat(yb);
function myFunctionConcat2(){
    alert(cb);
}


// Array.prototype.every()
// example1
var eve=[10,20,18,17,30,50];
var be=eve.every(checkAges0);
function checkAges0(eve){
    return eve>=18;
}
function myFunctionEvery1(){
    alert("answer is: "+be);
}
// example2
var eve2=[10,20,18,17,30,50];
var be2=eve2.every(checkAges0);
function checkAges0(eve2){
    return eve2<=18;
}
function myFunctionEvery2(){
    alert("answer is:"+be2);
}





// Array.prototype.some()
// example1
var som=[10,20,18,17,30,50];
var bm=som.some(checkAges1);
function checkAges1(som){
    return som>=18;
}
function myFunctionSome1(){
    alert("answer is: "+bm);
}
// example2
var som2=[10,20,11,500];
var bm2=som2.some(checkAges1);
function checkAges1(som2){
    return som2>=18;
}
function myFunctionSome2(){
    alert("answer is:"+bm2);
}

// Array.prototype.find()
// example1
var Find1=[10,23,19,20];
var bf1=Find1.find(checkAges1);
function checkAges1(Find1){
    return Find1>=18;
}
function myFunctionFind1(){
    alert("answer is:"+bf1);
}

// example2
// var Find2=["siya","bina","riya","soya"];
// var bf2=Find2.find(checkAges2);
// Var bff= function checkAges2(Find2){
//     return Find2===bina;
// }
// function myFunctionFind2(){
//     alert("answer is:"+bff);
// }

// Array.prototype.findIndex()
// example1
var fin1=[10,20,18,17,30,50];
var res1=fin1.findIndex(checkAges3);
function checkAges3(res1){
    return res1>=18;
}
function myFunctionFindIndex1(){
    alert("answer is: "+res1);
}
// example2
let fin2=[4,5,10,25,19,20];
var res2=fin2.findIndex(checkAges4);
function checkAges4(res2){
    return res2>=18;
}
function myFunctionFindIndex2(){
    alert("answer is: "+res2);
}


// Array.prototype.includes()
// example1
var ind=[100,200,300,400,500];
var result7=ind.includes(500);
function myFunctionIncludes1(){
    alert(result7);
}
// example2
var ind2=["shuru","roma","anjali","shivani","shruti"];
var res7=ind2.includes("roma");
function myFunctionIncludes2(){
    alert(res7);
}



// Array.prototype.reverse()
// example1
var rev=["b","x","e","r","u","f","o"];
rev.reverse();
function myFunctionReverse1(){
    alert(rev);
}

// example2
var rev2=[10,20,30,40,50,56];
rev2.reverse();
function myFunctionReverse2(){
    alert(rev2);
}


// Array.prototype.sort()
// example1
var srt=[10,4,7,9,22,55,19,40];
srt.sort();
function myFunctionSort1(){
    alert(srt);
}
// example2
var srt1=["shruti","shuru","aman","sumit","sujoy"];
srt1.sort();
function myFunctionSort2(){
    alert(srt1);
}

// Array.prototype.from()
// example1
var nam11=Array.from("abcdefg");
function myFunctionFrom1(){
    alert(nam11);
}
// example2
var nam12=Array.from("shrutiDwivedi");
function myFunctionFrom2(){
    alert(nam12);
}

// // Array.prototype.reduce()
// // example1
// var store=[
//     {
//         name:"laptop",
//         price:2000,
//         count:3,
//     },
//     {
//         name:"mobile",
//         price:500,
//         count:2,
//     },
//     {
//         name:"phone",
//         price:1500,
//         count:5,
//     },
// ];
// function myFunctionReduce1(){
// var storeValue= store.reduce((previous, current) => previous+current.price*current.count,0);
//  alert(storeValue); 
// }

// // example2
// const num4= [1, 2, 3, 4, 5, 6];
// const total =num4.reduce(sum, 0);

// function sum(previous, current){
//     return previous+current;
// }
// let text=["j", "a", "v", "a"];
// let result= text.reduce(function(a,b){
//     return a+b;
// });
// function myFunctionReduce2(){
// console.log(total);
// console.log(result);
// }
