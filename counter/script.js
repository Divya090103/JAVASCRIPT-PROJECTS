let cnt=document.querySelector("p");
let counter=0;
let choice=document.querySelectorAll(".choice");
console.log(choice);
function operation(id,cnt){
    if(id=="inc") 
    {counter++;
        cnt.classList.add("inc");
        cnt.innerText=counter;

    }
    if(id=="dec")
    { counter--;
        cnt.classList.add("dec");
        cnt.innerText=counter;
    }
 if(id=="reset")
    { counter=0;
        cnt.style.background="blue";
        // cnt.classList.add("reset");
        cnt.innerText=counter;
    }
}

choice.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const id=choice.getAttribute("id");
        console.log(id);
        operation(id,cnt);
    })
})
