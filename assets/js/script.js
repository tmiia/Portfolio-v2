//INTRO ANIMATION
window.onload = function visitors(){
  if ( ! sessionStorage.getItem( 'doNotShow' ) ) {
    sessionStorage.setItem( 'doNotShow', true );
    introAnimation();
    } else {
      const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
      let i = 0;
      while (i<1){
        tl.to(".animContainer",{display: "none", duration: 0})
        i++
      }
    }
}

function introAnimation() {
  const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
  let i = 0;
  while (i<1){
    tl.to(".line",{width: "33%", duration: 0.9, stagger: 0.25})
    tl.to(".animText",{opacity: 0, duration: 0.3})
    tl.to(".line",{width: 0, duration: 0.3, stagger: 3})
    tl.to(".animRight", {height : 0, duration: 1})
    tl.to(".animCenter", {height : 0, duration: 1}, "-=0.75")
    tl.to(".animLeft", {height : 0, duration: 1}, "-=0.75")
    tl.fromTo(".hi", {y: "-500px", x: "75%", rotate: "45deg", scale: 2.5}, {y: "20%", x:"0%", rotate: "0", scale: 1, duration: 0.6})
    tl.to(".hi", {y: "0%", duration: 0.3})
    tl.fromTo(".name", {opacity: 0}, {opacity: 1, duration: 0.9}, "-=0.40")
    tl.fromTo("#deco1", {opacity: 0, scale: 0.3}, {opacity: 1, scale: 1, duration: 0.5}, "-=0.45")
    tl.fromTo(".slogan", {opacity: 0}, {opacity: 1, duration: 0.5}, "-=0.35")
    tl.to(".animContainer", {display: "none", duration: 0.3})
    i++
  }
}

//PORTFOLIO

const btn = document.querySelector(".btnPlus");
let home = document.querySelector(".home");
let portfolio = document.querySelector(".portfolio");

btn.addEventListener("click", ()=>{
  if(home.className == "home close"){
    home.classList.toggle("close");
  }
})
