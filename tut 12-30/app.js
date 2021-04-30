console.log('Welcome to Tutorial 12');
// Window

// let a = window.document ;
// a.alert("Welcome to Java script")
// a.confirm("Are you sure you want to delete ?")
// a.prompt("how old are you ?","15")

// console.log(a)

// * DOM MANIPULATION *
// let a = document;
// a = document.all
// a = document.forms
// a = document.links
// a = document.parentNode
// a = document.parentElement
// a = document.links
// a = document.scripts
// a = document.images
// a = document.
// console.log(a)

// let b = document.all;
// Array.from(b).forEach(element => {
//  console.log(element)   
// });

// console.log(typeof(document))

// dom selector

// single Element Selsctor
/*let grand = document.getElementById('Grand-parent');
console.log(grand);
let query = document.querySelector('.child');
console.log(query.parentNode)
*/
// Multi Element Selector 

// let queryAll = document.querySelectorAll('.child');
// console.log(queryAll);

// let parent = document.getElementById('parent_1')
// console.log(parent.firstElementChild)
// console.log(parent.lastElementChild)
// console.log(parent.childElementCount)

/*
Array.from(parent).forEach(function (element) {
    console.log(element)    
} 
)
console.log(parent)
*/

// Creating And Removing Element

let elm = document.getElementById('new-div');
let head = document.createElement('h1');
let txt = document.createTextNode('heading');
let input = document.createElement('input');

let btn = document.createElement('button')
let btnTxt = document.createTextNode('submit')
btn.setAttribute('type', 'submit')
btn.addEventListener('click', click)
btn.appendChild(btnTxt)
// console.log(btn)

elm.className = 'main'
head.appendChild(txt)
// console.log(elm)
// console.log(head)

elm.appendChild(head)

elm.appendChild(input)
elm.appendChild(btn)
btn.classList.add('btn','mybtn')
// console.log(btn)


// console.log(elm)

// Events
function click() {
    // console.log('ckick Hua')
    let ul = document.createElement('ul');
    let li = document.createElement('li');
    let litxt = document.createTextNode(input.value);
    li.appendChild(litxt);
    ul.appendChild(li);
    elm.appendChild(ul);
    input.value = "";
};


// local Storage

// let store = window.localStorage;
// store = localStorage.setItem('name','bilal');
// store = localStorage.setItem('meeting','2:00 pm');
// localStorage.getItem('name')
// localStorage.removeItem('meeting')
// localStorage.clear()

// Session Storage
/*
let store = window.sessionStorage;
store = sessionStorage.setItem('name','bilal');
store = sessionStorage.setItem('meeting','2:00 pm');
sessionStorage.getItem('name')
sessionStorage.removeItem('meeting')
sessionStorage.clear()
*/

// Date objects

let today = new Date();
// console.log(today);

// let otherDate = new Date(mm/dd/yyyy h/s/m) syntax
let otherDate = new Date('8-4-2003 11:54:25');
 otherDate = new Date('june 12 1999 04:54:08');
 otherDate = new Date('6/3/2009 04:54:08');
// console.log(otherDate);

// get date
let a ;
a = otherDate.getDate();
a = otherDate.getDay();
/*
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
*/
a = otherDate.getMonth();
a = otherDate.getFullYear();
a = otherDate.getTime();
a = otherDate.getSeconds();
a = otherDate.getHours();
a = otherDate.getMilliseconds();
a = otherDate.getMinutes();

// console.log(a); 

// set date
a = otherDate.setDate(23);
a = otherDate.setMonth(4);
a = otherDate.setFullYear(2003);
a = otherDate.setHours(12);

// console.log(otherDate)
// console.log(a.valueOf(a))

// Math Objects

console.log("math object : we use this to solve our mathmetical expression");

// simple arithmetic expression

/*
let x = 2;
let y = 6;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
*/

// Algeberic Expression
let math = Math;
console.log(math)
let math_pi = Math.PI;
console.log("Pi value", math_pi);
let mathE = Math.E;
console.log("oiler num", mathE);

console.log("absolute value -4 is", Math.abs(-4));
console.log("square root 25 is", Math.sqrt(25));
console.log("2 power 5 is", Math.pow(5 , 2));
console.log("maximum value at a set", Math.max(5 , 2 ,4,55,65,1234));
console.log("manimum value at a set", Math.min(5 , 2 ,4,55,65,1234));
console.log("manimum value at a set", Math.min(5 , 2 ,4,55,65,1234));

// round decimal 
console.log("decimal round", Math.round(4.5));
console.log("negative decimal round", Math.round(-4.6));

console.log("always gave upper decimal value", Math.ceil(4.3));
console.log("always gave lower decimal value", Math.floor(4.8));

// generate random numbers

let numGen = Math.random();
console.log("random number generator b/w 0-1 " , "\n" , numGen);
numGen = math.round(math.random()*1);
console.log("0 or 1 " , "\n" , numGen);
if(numGen === 0 ){
    console.log("Head")
}else{
    console.log("tail")
}

numGen = 50+(100-50)*math.random();
console.log("50 to 100 value" , numGen)
