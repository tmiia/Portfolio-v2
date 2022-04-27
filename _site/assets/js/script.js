//INTRO ANIMATION
window.onload = function visitors(){
  introAnimation()
  // if ( ! sessionStorage.getItem( 'doNotShow' ) ) {
  //   sessionStorage.setItem( 'doNotShow', true );
  //   introAnimation();
  //   }
    // else {

    // }
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
    i++
  }
}
