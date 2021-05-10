const sliderContainer = document.querySelector(".slider-container");
const slider = document.querySelector(".slider");
const val = document.querySelector(".slider-label");

slider.addEventListener("input", (e) => {
    val.innerHTML = e.target.value;
    val.style.left = (sliderContainer.offsetWidth - slider.offsetWidth) / 2 + (e.target.value) *  (e.target.offsetWidth / e.target.max) - (val.offsetWidth / 2) + "px";
})