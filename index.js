const menumove = document.querySelector("#menumove");

window.addEventListener("scroll", () => {
    console.log(window.scrollY)
    
    if (window.scrollY > 50) {
        menumove.style.top = 0;
    } else {
        menumove.style.top = "-50px";
    }
})