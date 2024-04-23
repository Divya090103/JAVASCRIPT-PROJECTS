let header=document.querySelector("nav");
window.addEventListener("scroll",()=>{
if(window.screenY<=75){
  console.log("comes to less than 75")
  header.classList.add("sticky")

}
else{
  console.log("not lestt than 75")
  header.classList.remove("sticky")
}
})