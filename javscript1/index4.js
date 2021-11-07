// let abc =()=>{
//     let text = [1, 'Ananas', 'Banana', 'Branch', 2, 3, 'salom', 4, 'apple', 'pier', 5, 6 ];
// let a = text.toString().toLowerCase();
// let b =0;
// let x =0;
// for(i=0; i<a.length; i++){
//         if(a[i]==='a'){
//             b=b+1;
//         }if(a[i]==='b'){
//             x=x+1;
//         }
// }
// console.log(b, 'ta a bor');
// console.log(x, 'ta b bor');} 
// abc()





// let summ = ()=>{
//     let s = [1, 'Ananas', 'Banana', 'Branch',  'salom',  'apple', 'pier', 5, 6 ];
// let ss = typeof(s[1]);
// let nn = typeof(s[0]);
// let sum = 0;
// for(i=0; i<s.length; i++){
//     if(typeof(s[i]) === nn){
//         sum = sum +s[i];
//     }
// }
//    console.log(sum);
// }
// summ();




// let eng = ()=>{
//     let n = [1,2,3,4,5,6,7,8,23,33,45];
// n.sort(function(a, b){return b - a});
// n.shift(); 
// console.log(n[0],'eng kattasidan bitta kichigi');
// let nn = [1,2,3,4,5,6,7,8,23,33,45];
// nn.sort(function(a, b){return b - a});
// let a = nn.length-2;
// console.log(nn[a],'eng kichigidan bitta kattasi')
// }
// eng();






// let toqjuft = ()=>{
//     let s = [1,'salom',1, 'apple',1,2,2,1,'banana'];
// let ss = typeof(1);
// let nn = typeof('salom');
// let sum = [];
// let toq = 0;
// let juft = 0;
// for(i=0; i<s.length;i++){
//     if(typeof(s[i]) === ss){
//         sum.push(s[i]); 
//     }else{
//         sum.push(0);
//     } 
// }
// for(j=0; j<sum.length;j++){
//     if(j%2===0){
//         juft = juft +sum[j];
//     }else{
//         toq = toq +sum[j];
//     }
// }
// console.log(juft,'juftlar yigindsi');
// console.log(toq,'toqlar yigindisi');
// }
// toqjuft();



// let reversee = ()=>{
//     let s = [1,2,3,4,5,6,7,8,9,10];
// let a = (s.length-1);
// let ss = [];
// for(i=0;i<s.length;i++){
//     let b = (a-i);
//     ss.push(s[b]);
// }
// console.log(ss)
// }
// reversee();




// let sum = (ss)=>{
//     let a = [9,3,6,4,5,1,8];
// let b = [];
// for(i=0;i<a.length;i++){
//     for(j=0;j<a.length;j++){
//         if(ss===a[i]+a[j]){
//             b.push([a[i], a[j]])
//         }
//     }
// }
// console.log(b)
// }
// sum(6)




// let a = [3, 2, 1, 1, 5, 4],
// c = [];
// for (; a.length;)  { c.push(a.splice(a.indexOf(Math.min(...a)),1)[0])}
// console.log(c)
 

// function bubbleSort(array) {
//   var done = false;
//   while (!done) {
//     done = true;
//     for (var i = 1; i < array.length; i += 1) {
//       if (array[i - 1] > array[i]) {
//         done = false;
//         var tmp = array[i - 1];
//         array[i - 1] = array[i];
//         array[i] = tmp;
//       }
//     }
//   }

//   return array;
// }

// var numbers = [12, 10, 15, 11, 14, 13, 16];
// bubbleSort(numbers);
// console.log(numbers);
    
