var typed= new Typed(".text",{
    strings: ["Web Developer", "Frontend Developer", "Full Stack Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
});
const scrollBtn = document.querySelector(".top");

window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 500 ? "block" : "none";
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
