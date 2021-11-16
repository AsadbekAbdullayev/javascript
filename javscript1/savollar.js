
//    String
// 1.
// let a = 'Webb\rain';
// console.log(a);

// javob: consolga 'ainb' chiqadi

// 2.
// var str = "12345";
// var pos1 = str.indexOf("5");
// var pos2 = str.lastIndexOf("5");
// console.log(pos2);
// console.log(pos1);

// javob: consolga  2ta '4' chiqadi

// 3.
// var str = "54321";
// var pos1 = str.indexOf("4",2);
// console.log(pos1);

// javob: consolga  -1  chiqadi


// 4.
// var str = "12345";
// var pos1 = str.substring(-9,2);
// console.log(pos1);

// javob: consolga  12  chiqadi

// 5.
// substring va slice 2 farqi

//    Number
// 1.
// var a = 01;
// var b = 00;
// var x = '00';
// var y = '01';
// console.log(a+b+x+y);

// javob: consolga  10001  chiqadi


// 2.
// var a = 01;
// var b = '010';
// console.log(a-b);

// javob: consolga  -9  chiqadi

// 3.
// parseFloat vs parseInt    parseFloat va  parseIntning farqini toping demoqchi bulganman

// 4.
// var a = Number('5.1a');
// var b = parseFloat('5.1a');
// console.log(a);
// console.log(b);

// javob: consolga  NaN va 5.1  chiqadi


// 5 
// Number vs parseInt



// Array
// 1.
// var s = [1,1,1,1,1];
// s.splice(1,2,3,4,5); => 2-parametrnig vazifasi nima ?

// javob: 2-parametrnig vazifasi 2ta elementni kesib oladi


// 2.
// let a = [[1,2,3],[1,3],123];
// console.log(typeof a);   

// javob: consolga  object  chiqadi
 

// 3.
// unshift() vs pop()

// 4.
// join qanday method?

// 5
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// var b = fruits.splice(0, 1)
// console.log(b);

// javob: consolga  ['Banana']  chiqadi


// Functions
// 1.
// let a = ()=>{
//     console.log('salom');
// }
// console.log(typeof a);

// javob: consolga  function  chiqadi


// 2.
// function apple(app){
//     console.log(app/app)
// }
// apple('Webbrain') consolda nima chiqadi

// javob: consolga  NaN  chiqadi

// 3.
// let add = (abc)=>{
//     for(i=0;i<10;i++){
//         for(j=0;j<i;j++){
//             a = abc +1;
//         }
//     }
// }
// add("webbrain") consoleda nima chiqadi

// javob: consolga hechnima chiqmaydi


// 4.
// function add(a){
//     a++;
//     b = a+a;
//     console.log(a+b);
// }
// add(5) consoleda nima chiqadi

// javob: consolga  18  chiqadi


// 5.
// function add(a='Salom', b='Wabbrain'){
//     a++;
//     b = b+a;
//     console.log(a+b);
// }
// add(1,2) consoleda nima chiqadi

// javob: consolga  6  chiqadi



// OBJECT
// 1.
// var person = {
// firstName:"John",
//  lastName:"Doe", 
//  age:50,
//   eyeColor:"blue"
// }
// console.log(person.fullname = 'Webbrain');  consoleda nima chiqadi

// javob: consolga Webbrain chiqadi


// 2.
// var a = {
//     1:'1111',
//     2:'2222',
//     3:'3333'
// }
// console.log(a['2']-a['1']); consoleda nima chiqadi

// javob: consolga 1111 chiqadi

// 3.
// var a = [
//     {
//         1:'d',
//         2:'e',
//         3:'v'
//     }
// ]
// consolega 'v' ni chiqaring

// javob: console.log(a[0]['3']);


// 4.
// var a = {
//     b:[
//     [1,2,3,4],
//     [1,2,3,4,5],
//     [1,2,3,4,5,6]
//     ]
// }

// // consolega 6 ni chiqaring

// javob: console.log(a['b'][2][5]);

// 5.

// var add = [{
//     a:{1:'web'},
//     b:{1:'web'},
//     c:{1:'web'},
//     v:{1:'web'}
// }
// ]
// console.log(add.length); consoleda nima chiqadi

// javob:consoleda 1 chiqadi



























