<template>
  <div id="SVGpath">
    <section id="Services" class="animation">
      <div class="blob">
        <svg class="blob1" width="528" height="528" viewBox="0 0 528 528" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M264 525C408.146 525 525 408.146 525 264C525 119.854 408.146 3 264 3C119.854 3 3 119.854 3 264C3 408.146 119.854 525 264 525Z" stroke="#C8E6D1" stroke-width="6" stroke-dasharray="1 6"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M463 264C463 373.905 373.905 463 264 463C154.095 463 65 373.905 65 264C65 154.095 154.095 65 264 65C373.905 65 463 154.095 463 264ZM398 264.5C398 338.23 338.23 398 264.5 398C190.77 398 131 338.23 131 264.5C131 190.77 190.77 131 264.5 131C338.23 131 398 190.77 398 264.5Z" fill="#EBF3ED"/>
        </svg>
        <img data-aos="fade-right" class="watch" src="/images/call.png" alt="">
      </div>

      <div class="blob2">
        <svg class="blob21" width="528" height="528" viewBox="0 0 528 528" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M264 525C408.146 525 525 408.146 525 264C525 119.854 408.146 3 264 3C119.854 3 3 119.854 3 264C3 408.146 119.854 525 264 525Z" stroke="#C8E6D1" stroke-width="6" stroke-dasharray="1 6"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M463 264C463 373.905 373.905 463 264 463C154.095 463 65 373.905 65 264C65 154.095 154.095 65 264 65C373.905 65 463 154.095 463 264ZM398 264.5C398 338.23 338.23 398 264.5 398C190.77 398 131 338.23 131 264.5C131 190.77 190.77 131 264.5 131C338.23 131 398 190.77 398 264.5Z" fill="#EBF3ED"/>
        </svg>
        <img data-aos="fade-left" class="telephone" src="/images/tel2.png" alt="">
      </div>



      <div class="blob3">
        <svg class="blob22" width="528" height="528" viewBox="0 0 528 528" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M264 525C408.146 525 525 408.146 525 264C525 119.854 408.146 3 264 3C119.854 3 3 119.854 3 264C3 408.146 119.854 525 264 525Z" stroke="#C8E6D1" stroke-width="6" stroke-dasharray="1 6"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M463 264C463 373.905 373.905 463 264 463C154.095 463 65 373.905 65 264C65 154.095 154.095 65 264 65C373.905 65 463 154.095 463 264ZM398 264.5C398 338.23 338.23 398 264.5 398C190.77 398 131 338.23 131 264.5C131 190.77 190.77 131 264.5 131C338.23 131 398 190.77 398 264.5Z" fill="#EBF3ED"/>
        </svg>
        <img data-aos="fade-right" class="telephone3" src="/images/call.png" alt="">
      </div>
      <svg id="svg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1000 1200">

        <path class="theLine "
            d="M22.9998 1C22.9998 1 649.558 119 663 589.542C655.833 1135 1 1215 1 1215"
            fill="none" stroke="#29A0EC" stroke-width="1px" />





        <text class="text01 " x="650" y="30">Track every trip you make.</text>
        <text class="text02" x="30" y="550">Lorem ipsum dolor sit amet, consectetur.</text>
        <text class="text03" x="650" y="1100">Lorem ipsum dolor sit.</text>

        <circle class="ball ball01" r="20" cx="25" cy="25"></circle>


      </svg>

         <div class="block">
           aasdasdad

         </div>




    </section>
  </div>
</template>

<script>
import {TweenLite, TimelineLite, gsap} from 'gsap';
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import ScrollTrigger from 'gsap/ScrollTrigger';

export default {
name: "SVGpath",
  mounted() {
    gsap.registerPlugin(MotionPathPlugin,ScrollTrigger);
    gsap.defaults({ease: "none"});


    gsap.set(".ball", {xPercent: -50, yPercent: -50})

    var tl = gsap.timeline({
      defaults: {
        duration: 0.05,
        autoAlpha: 1,
        transformOrigin: 'center',
        ease: "elastic(2.5, 1)"
      }})

        .to(".text01", {scale:[1]}, 0.01)
        .to(".text02", {scale:[1]}, 0.35)
        .to(".text03",{scale:[1]}, 0.75)

    var action = gsap.timeline({defaults: {duration: 1},
      scrollTrigger: {
        trigger: "#svg",
        scrub: true,
        start: "top center",
        end: "bottom center"
      }})
        .to(".ball01", {duration: 0.01, autoAlpha: 1})
        .to(".ball01", {motionPath: {path: ".theLine", alignOrigin: [0.5, 0.5]}}, 0)
        .add(tl, 0);



  }
}
</script>

<style scoped>
.blob{
  position: absolute;
}
.animation{
  background-color: white;
  overflow: hidden;
}
svg {
  overflow: visible;
  margin-top: 20%;
  margin-left: 15%;
  margin-bottom: 20%;
}
.block{
  position: absolute;
  z-index: 100000;
  margin: 38px;
  height: 25vw;
  width: 24vw;
  left: -2vw;
}


.ball {
  fill: blue;
  visibility: hidden;
}
text {
  fill: white;
  font-size: 15px;
  font-family: "Signika Negative", sans-serif;
  visibility: hidden;
}

.watch{
  margin-left: 4vw;
  display: block;
  height: 24vw;
  overflow: hidden;
  margin-top: 16%;
}
.telephone{
  margin-left: 0vw;
  height: 30vw;
  overflow: hidden;
}
.telephone3{
  margin-top: 9%;
  margin-left: 4vw;
  height: 25vw;
  overflow: hidden;
}
.blob1 {
  position: absolute;

  border-radius: 50%;
  margin: 38px;
  height: 25vw;
  width: 24vw;
  left: -2vw;
  transform: scale(1);
  animation: pulse 2s infinite;
}
.blob2 {
  overflow: hidden;
  position: absolute;
  border-radius: 50%;
  margin-top: 45vw;
  height: 26vw;
  width: 25vw;
  left: 60vw;
  z-index: 10000;

  transform: scale(1);
  animation: pulse 2s infinite;

}

.blob21 {

  position: absolute;
  border-radius: 50%;
  margin-top: 0vw;
  height: 26vw;
  width: 25vw;
  left: -4vw;

}

.blob22 {

  position: absolute;
  border-radius: 50%;
  margin-top: 0vw;
  height: 26vw;
  width: 25vw;
  left: -4vw;
}

.blob3 {
  position: absolute;
  border-radius: 50%;
  margin-top: 109vw;
  height: 27vw;
  width: 26vw;
  left: -1vw;
  z-index: 10000;
  transform: scale(1);
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(3,159,53, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 3vw rgba(0, 0, 0, 0);
  }

  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
}
</style>