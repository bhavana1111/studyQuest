document.addEventListener("click",(e)=>{
    const btn = e.target.closest(".toggle");

    if(!btn) return;

    const id = btn.getAttribute("aria-controls");

    const section = document.getElementById(id);

    section.classList.toggle("open");

    btn.setAttribute("aria-expanded",section.classList.contains("open"));
});
document.addEventListener("change",updateProgress);
updateProgress();
function updateProgress()
{
    const total = document.querySelectorAll("input").length;
    const complete = document.querySelectorAll("input:checked").length;

    document.querySelector(".progress").innerText = `${complete}/${total} complete`;
}
