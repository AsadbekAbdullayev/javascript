// // const user = {
// //     id : 1,
// //     name : 'Web',
// //     surname : 'Brain',
// //     key:'123',
// //     // fullname : function (){
        
// //     //     console.log(this.id);
// //     // }
// //     data:{
// //         nma:'tesfddvd',
// //         getname(){
// //             console.log(this);
// //         }
// //     }
   
// // }
// // console.log(user.data.getname());

// class Student {
//     constructor(title){
//         console.log(title);
//         this.title = title;

//     }
//     getname(){
//         console.log(this.title,'Student');
//     }
    
// }
// class Department extends Student {
//     constructor(titles){
//         super(titles)
//     }
// }
// let a = new Department('Asadbek')

// a.getname();

// callback
// promise
// async await
// console.log('Started....');
// let users = 
//     {
//         id:1,
//         name:'Asadbek',
//         pw:123
//     }
    


// const Facebook = (pw,username,callback)=>{
//     setTimeout(()=>{
//         if(users.name === username && users.pw === pw){
//             callback ('Welcome to Facebook')
//     }else{
//         callback('Errorrrr')
//     }},  
//     1000)

// }
// Facebook(123,'Asadbek',(data)=>{
// console.log(data);
// console.log('Finished');

// })
// console.log('Started....');
// let users = 
//     {
//         id:1,
//         name:'Asadbek',
//         pw:123
//     }

// const Facebook = (pw,username)=>{
// let user = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         if(users.name === username && users.pw === pw){
//             resolve ('Welcome to Facebook')

//     }else{
//         reject('Errorrrr')
//     }        

//     },1000)
// });

// user.then((res)=>console.log(res)).catch((err)=>console.log(err))

// };

// Facebook(123,'Asadbek')

// let a = '**********'.length;
// let b = '**********'.length;
// console.log(a*b);

// let a = 'ASDASAASWEDFVFVF';
// let noRepaet = ()=>{
//     let b ='';
//     let c =[];
//     let sort = a.split('').sort();
//     for(i=0;i<a.length;i++){
//         if(b.search(a[i]) === -1){     
//         c.push(a[i]) 
//         }
//         b=c.join('')
//     }
// let bb = b.split('');
// let w =0;
// for(j=0;j<bb.length;j++){
//     for(q=0;q<sort.length;q++){
//         if(bb[j]===sort[q]){
//             w++;
//         }
        
//     }
    
//     console.log(w,'ta',bb[j])
//     w=0;
// }
// }
// noRepaet();

