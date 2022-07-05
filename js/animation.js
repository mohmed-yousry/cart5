const videosSection = document.querySelector(".videos") ; 
const contacus = document.querySelector(".contactUs") ; 
const cards = document.querySelector(".cards .text") ; 
const aboutPic = document.querySelector(".about-pic") ; 
const aboutText = document.querySelector(".text-about") ; 
const toUp = document.querySelector(".toUp") ;
// console.log (cards)

toUp.onclick = () => {
    window.scrollTo(0 ,0)
}
window.onscroll = () => {
    if(videosSection !=null) {

        if(scrollY  >= videosSection.offsetTop - 500 ) {
            videosSection.children[1].classList.remove("translate-y-16")
            videosSection.children[1].classList.remove("opacity-0")
        } else {
            videosSection.children[1].classList.add("translate-y-16")
            videosSection.children[1].classList.add("opacity-0")
        }
    }
        
if(contacus !=null) {

    if(scrollY >= contacus.offsetTop - 500) {
        contacus.classList.remove("opacity-0")
    } else {
        contacus.classList.add("opacity-0")
    }
}

if(cards !=null) {
    if(scrollY >= cards.offsetTop - 500) {
        cards.classList.remove("opacity-0")
        cards.classList.remove("translate-y-6")
    } else {
        cards.classList.add("opacity-0")
        cards.classList.add("translate-y-6")
    }
}

if(aboutPic !=null) {
    if(scrollY >= aboutPic.offsetTop - 500) {
        aboutPic.classList.remove("opacity-0")
        aboutPic.classList.remove("translate-y-6")
        aboutText.classList.remove("opacity-0")
        aboutText.classList.remove("translate-y-6")
    } else {
        aboutPic.classList.add("opacity-0")
        aboutPic.classList.add("translate-y-6")
        aboutText.classList.add("opacity-0")
        aboutText.classList.add("translate-y-6")
    }
}

if(scrollY < 250) {
    toUp.classList.add("hidden")
}else {
    toUp.classList.remove("hidden")

}
}