console.log("welcome to javascript");
// 1st Tutorial console;
/*
console.time('time up')
console.log('Hello , Bilal');
console.warn(`this is used for warning`);
console.error(`this is used for Error`);
console.info(`this is used for information`);
console.assert(2>1 ,'for check condition i.e');
console.timeEnd('time up');
console.clear();
console.table('used in object');
var obj = {
    name: "bilal",
    roll: 221,
    school: 'Saylani'
}
console.log(obj.roll);
console.log(obj);
console.table(obj);
*/
// I'm single line Comment;
/* I'm multi line Comment*/

// Variables:var, let, const;
/* var names = "bilal"
var roll;
roll = 012;
console.log(names,roll , "this is var")
let city;
city = "karachi"
console.log(city ,'this  is let');
const school = 'saylani';
console.log(school)
*/
// Data types
/* let str = 'string';
console.log(str)
let num = 21;
console.log(num.toString())

let int = parseInt(35.01);
console.log(int)

let intFloat = parseFloat(21.021);
console.log(intFloat.toFixed(7));

let mystr = '54';
let mynum = 21;
console.log(mynum + mystr)
*/

// String Properties
// let fname = 'muhammad';
// let lname = 'bilal';
// console.log(fname)
// console.log(lname)
// let mystr = fname.length;
// let mystr = lname.length;
// let mystr = lname.length;
// let mystr = fname.toLowerCase();
// let mystr = fname.toUpperCase();
// let mystr = fname[0];
// let mystr = fname.indexOf('h');
// let mystr = fname.lastIndexOf('a');
// let mystr = fname.charAt(0);
// let mystr = fname.endsWith('mmad');
// let mystr = fname.substring(0,3);
// let mystr = fname.slice(-2);
// let mystr = fname.split('h');
// let mystr = fname.replace('h','s');

// console.log(mystr)

// Templete literals

/*var name1 = `Bilal`
var greet = `Hello ${name1}, `
console.log(greet)
let myHtml = `<h1>this is heading1 </h1> <p> and this is a paragraph</p>`;
console.log(myHtml)
document.body.innerHTML = myHtml;
*/

// Arrays & Objects
//Arrays

/*let strArr = ['bilal', 'nehal','noman','shayan'];
console.log(strArr)
console.log(strArr.length)
let numArr = [ 0,1,2,3,4,5];
console.log(numArr);
console.log(numArr.length);
let mixArr = ['fruits', 12 , undefined , null ,true ]
console.log(mixArr); 
console.log(mixArr.length); 
let newArr = new Array('bilal',23,'ghju');
console.log(newArr)
array property
console.log(Array.isArray(mixArr))
console.log(newArr[0] = 'my name')
console.log(newArr)
console.log(newArr.indexOf(23))
*/
/*
let strArr = ['bilal', 'nehal','noman','shayan'];
console.log(strArr)
console.log(strArr.push('ahmed'))  // add element at the end 
console.log(strArr)
console.log(strArr.unshift('muhammad')) // add on the first
console.log(strArr)
console.log(strArr.pop())
console.log(strArr) //replace last element of the array
console.log(strArr) 
console.log(strArr.shift()) //replace first element of the array
console.log(strArr) 
console.log(strArr.reverse()) //reverse the array 
console.log(strArr) 
*/

// Array for each
// let name1 = ['bilal', 'shayan', 'kamran'];
// name1.forEach(element => {
//     console.log(element)
// }); 

// Object And its property
/*
let myobj = {
    fname : 'Muhammad',
    lname : 'Bilal',
    skills : ['Graphics Design', 'Web Design', 'Web Develop'],
    'my achive' : 'Digi Skill Graphic Design Certified'
}
console.log(myobj);
console.log(typeof(myobj));
console.log(myobj.fname);
console.log(myobj.lname);
console.log(myobj.skills);
console.log(myobj.skills[2]);
*/
/*
IF Else Statement
let age = 10;
if (age >= 18){
    console.log("you are elder");
}
else if(age <= 0){
    console.log('please enter your right age')
}
else if(age <= 12){
    console.log('you are under 18th')
}
*/
/*
let myname = 'noma'
if(myname === 'bilal'){
    console.log(`welcome ${myname}`)
}
else{
    console.log('you are not signed in')
}
*/

//Tenari Operator
/*let age = 13;
let check = age == 18 ? 'age is 18' : 'age is not 18' ;
console.log(check)
*/

// Switch Statement
/*
let price = 30;
switch(price){
    case 14:console.log('not possible');
    case 20:console.log('possible');
    case 30:console.log('give it back 10/- rupees');
    default :console.log('undefined')
}
*/

// loops
// For loops

// let arr = ['noman', 'bilal' ,'shayan'];
// for (let i = 0; i<arr.length+1 ; i++){
//     // console.log(arr[i].toUpperCase())
//     if(arr[i] == 'bilal'){
//         console.log(`bilal is Found`)
//         break
//     }
    


// let i;
// for(i = 0 ; i<10 ; i+=1){
//     if(i == 6){
//         console.log(i)
//         continue
//     }
//     else{console.log(i)}
// }

// while And Do while Loops

// let i = 0;
// while(i<10){
//     console.log(i , " yes , its working")
//     i++
// }

// let k = 0 ;
// do {
//     console.log(k)
//     k+=1;
// }
// while (k<5)

/*
let obj =  {
    name1 : 'bilal',
    name2 : 'Ahmed',

}

for(let key in obj){
    console.log(`the ${key} of object is ${obj[key]}`)
}
*/
// **Function**

/*
function greet(greet){
    console.log(greet)
}
greet('Good Morning')

function getData(name,greet){
    console.log(greet, name)
}
getData('hello',"bilal")

function wish(names,greet1='thanks'){
    console.log(`${names}, I hope your special day will bring you lots of happiness, love, and fun.
    All things are sweet and bright ${greet1}`)
}
wish('bilal' , 'Thanks a lot')

function back(name3){
    let msg = `hello ${name3}`
    return msg;
}
let myval = back('bilal');
console.log(myval)

let obj2 = {
    name2 :'bilal',
    game : function games(){
        return "GTA"
    }
}
console.log(obj2.game())
*/
console.log('practice complete')
// ** complte Tutorial practice **