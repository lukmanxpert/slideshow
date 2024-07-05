const slides = document.querySelectorAll(".slide");
let count =0;
setInterval(() => {
    count++;
    let currentClass = document.querySelector(".current")
    currentClass.classList.remove("current")
    slides[count].classList.add("current")
    console.log(count);
    if (count>1) {
        count = -1;
    }
}, 2000);
