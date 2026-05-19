document.addEventListener("click",(e)=>{
    const btn=e.target.closest(".toggle");
    if(!btn) return;
    const id=btn.getAttribute("aria-controls");
    const section=document.getElementById(id);
    section.classList.toggle("open");

    btn.setAttribute(
        "aria-expanded",
        section.classList.contains("open")
    );
});


document.addEventListener("change",updateProgress);


updateProgress();


function updateProgress(){

const total=document.querySelectorAll("input").length;

const complete=document.querySelectorAll("input:checked").length;

document.querySelector(".progress").innerText=`${complete}/${total} complete`;}



document.addEventListener("change",
(e)=>{
if(e.target.matches("input")){
const states=[];

document.querySelectorAll("input").forEach(c=>{
states.push(c.checked);
});

localStorage.setItem("tasks",JSON.stringify(states));
}

});



const saved=JSON.parse(localStorage.getItem("tasks"))||[];

document.querySelectorAll("input")
.forEach((c,i)=>{
c.checked=saved[i];
});