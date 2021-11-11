
// let user = [
//     {   
//         id : 2,
//         name : 'Eshmat',
//         status : 'CS',
//         department : 'IT'
//     },
//     {
//         id : 1,
//         name : 'Gishmat',
//         status : 'CS',
//         department : 'AI'
//     },
//     {
//         id : 3,
//         name : 'Ahmad',
//         status : 'CS',
//         department : 'IT'
//     }
// ]
    // sort(name)
    // onUpdate(id,type,value)
    //onCreate(data={})
    //onRead(type)



    // let OnUpdate = (id,type,value)=>{
    //     for(i=0;i<user.length;i++){
    //         if(user[i].id === id){
    //             user[i][type] = value;
    //         }
    //     }
    //     console.log(user);
    // }
    // OnUpdate(3,'name','Jalol')


// let OnSort = (x='name')=>{
//     if(x==='name'){
//         let b= [];
//         let c= [];
//       for(i=0;i<user.length;i++){
//          b.push(user[i].name);
//          b.sort();
//       }  
//       for(i=0;i<b.length;i++){
//           for(j=0;j<b.length;j++){
//             if(b[i]===user[j].name){
//          c.push(user[j]);
//             }
//           }    
//       }
//       console.log(c);

//     }
    
    
//     if(x==='id'){
//         let b= [];
//         let c= [];
//       for(i=0;i<user.length;i++){
//          b.push(user[i].id);
//          b.sort();
//       }  
//       for(i=0;i<b.length;i++){
//           for(j=0;j<b.length;j++){
//             if(b[i]===user[j].id){
//          c.push(user[j]);
//             }
//           }    
//       }
//       console.log(c);
//     }
// }
// OnSort('id')





// let OnDelete =(ID)=>{   
//         for(i=0;i<user.length;i++){
//             if(user[i].id === ID){
//                 user.splice(i,1)
//             }
//         }
//         console.log(user)
//     }
//     OnDelete(2);
    

  



let a = [1,1,3,4,];

    
a.sort(function(a, b){return a - b});
for(i=0;i<a.length;i++){
    let s = a.length-1;
    let d = a.length-2;
   let a1 =  a.splice(s,1) - a.splice(d,1);

   if(a1!==0){
       a.push(a1)
a.sort(function(a, b){return a - b});

   }
if(a.length===1){
console.log(a)
}
}
