// let getvalue=()=>{
// let data=document.getElementById("mytext");
// let value= data.value;
// let para=document.querySelector(".data");
// para.innerHTML=value;
// console.log(value);
// }
// let btn=document.querySelector("button");
// btn.addEventListener("click",getvalue);
let btn =document.querySelector("button");
let input=document.getElementById("mytext");
let div=document.querySelector(".data");
btn.addEventListener("click",()=>{
  let li=document.createElement("li");
  let data=input.value;
  li.innerHTML=data;
  div.append(li);
  console.log(li);
})


