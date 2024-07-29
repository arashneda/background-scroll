const bgImageEl = document.getElementById("bgimage");
const hEl = document.querySelector("h1")



window.addEventListener("scroll" , ()=>{
    updateImage();
})

function updateImage(){
    bgImageEl.style.opacity = 1 - window.pageYOffset /800
    bgImageEl.style.backgroundSize = 100 + window.pageYOffset / 15 + "%"
}
