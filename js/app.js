const moonIcon = document.getElementById("moonIcon");
const sunIcon = document.getElementById("sunIcon");
const scrollBtn = document.getElementById("scrollBtn");
function changeMood() {
    moonIcon.addEventListener("click", () => {
        moonIcon.style.display = "none";
        sunIcon.style.display = "block";
    });
    sunIcon.addEventListener("click", () => {
        moonIcon.style.display = "block";
        sunIcon.style.display = "none";
    });
}
changeMood();

window.addEventListener(('scroll'), () => {
    if (window.scrollY >= 400) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
})
scrollBtn.addEventListener('click',()=>{
    window.scrollTo({top:1,behavior:'smooth'}) ;
})