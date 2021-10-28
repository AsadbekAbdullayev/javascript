
function add(soz, harf1,harf2){
  let a = `${soz}`;
let b = a.toLowerCase().split("").sort();
let c1 = b.lastIndexOf(`${harf1}`);
let c2 = b.indexOf(`${harf1}`);
let c3 = ((c1-c2)+1);
let c11 = b.lastIndexOf(`${harf2}`);
let c22 = b.indexOf(`${harf2}`);
let c33 = ((c11-c22)+1);
let aa = "ta";
let aa1 = "harfi bor";
let aa2 = "harfi yuq";
let x = a.replace(/\s/g, "");
console.log(x);
if((c22)<1){
    console.log(harf1,aa2);
}else {
    console.log(c3,aa,harf1,aa1);
}

if((c1)<1){
    console.log(harf2,aa2);


}else {
    console.log(c33,aa,harf2,aa1);
}}
add("Welcome to webbrain academi","l", "s");


