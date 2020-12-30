<template>
  <div id="NavBar">

    <header class="text-gray-700 body-font">


      <div class="w-full text-gray-700 dark-mode:text-gray-200 dark-mode:bg-gray-800">
        <div class="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
          <div class="p-4 flex flex-row items-center justify-between">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7567 0C7.05451 0 0 7.05462 0 15.7569C0 24.4593 7.05451 31.5139 15.7567 31.5139H18.908C19.7773 31.5114 20.4812 30.8072 20.4834 29.9379V27.5522H15.7562C13.514 27.5548 11.3177 26.9172 9.42547 25.7144C9.18788 25.5634 9.0489 25.2971 9.06087 25.0158C9.07284 24.7346 9.23396 24.4811 9.48352 24.3508C9.73308 24.2206 10.0332 24.2333 10.2708 24.3843C11.9104 25.4265 13.8134 25.9788 15.7562 25.9763H20.4834V23.6342C20.4807 22.7653 19.7769 22.0617 18.908 22.0592H15.7567C12.2758 22.0592 9.45401 19.2374 9.45401 15.7564C9.45401 12.2755 12.2758 9.45366 15.7567 9.45366C19.2376 9.45366 22.0594 12.2755 22.0594 15.7564V29.9374C22.0616 30.8069 22.7658 31.5112 23.6353 31.5134H29.9365C30.8062 31.5109 31.5109 30.8067 31.5139 29.9369V15.7574C31.5139 7.05485 24.4591 0 15.7567 0ZM22.3128 6.8306C22.0857 7.18787 21.612 7.29346 21.2546 7.06646C17.1966 4.49485 11.8978 5.08162 8.50068 8.47878C5.10357 11.8759 4.51681 17.1748 7.08838 21.2329C7.24204 21.464 7.25873 21.7601 7.13203 22.007C7.00532 22.2539 6.75503 22.413 6.4777 22.4229C6.20038 22.4328 5.93938 22.2919 5.7954 22.0547C2.83843 17.3909 3.51217 11.2999 7.41694 7.39503C11.3217 3.4902 17.4126 2.81644 22.0764 5.77346C22.4331 6.00052 22.5386 6.47346 22.3123 6.8306H22.3128ZM26.7864 27.553C27.2216 27.553 27.5743 27.2002 27.5743 26.765V15.7339C27.5769 13.4917 26.9393 11.2954 25.7365 9.40309C25.5855 9.16549 25.3192 9.02651 25.038 9.03848C24.7567 9.05045 24.5032 9.21157 24.373 9.46114C24.2427 9.7107 24.2555 10.0108 24.4065 10.2484C25.4487 11.888 26.001 13.7911 25.9984 15.7339V26.765C25.9984 27.2002 26.3512 27.553 26.7864 27.553Z" fill="white"/>
            </svg>

            <a href="#" class="text-lg ml-7 font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">UPQODE</a>
            <button class="md:hidden rounded-lg focus:outline-none focus:shadow-outline" @click="open = !open">
              <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
                <path v-show="!open" fill-rule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                      clip-rule="evenodd"></path>
                <path v-show="open" fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"></path>
              </svg>
            </button>

          </div>
          <nav :class="{'flex': open, 'hidden': !open}"
               class="flex-col flex-grow pb-4 md:pb-0  md:flex md:justify-end md:flex-row">
            <a class="px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-gray-200 rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
               href="#">Home</a>
            <a   v-scroll-to="'#Services'" class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
               href="#">Services</a>
            <a class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
               href="#">Team</a>
            <a class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
               v-scroll-to="'#mapp'"href="#">Contact Us</a>
            <div @click.away="open = false" class="relative">

            </div>
          </nav>
        </div>

      </div>


    </header>
    <div class="swiper-container z-1">
      <div class="swiper-wrapper ">
        <div class="swiper-slide z-1">
          <section class="text-gray-700 body-font z-1  ">
            <div class=" sm:mt-28  px-5 py-24 mx-auto">
              <div class="flex flex-col text-center w-full mb-12">
                <h1 class="sm:text-3xl md:text-8xl text-white font-medium title-font mb-4">Mileage Made
                  Simple</h1>
                <p class="lg:w-2/3 mx-auto text-white  md:text-2xl leading-relaxed text-base">Motivation And
                  Your Personal Vision An Unbeatable Force</p>
              </div>
              <div class="flex">
                <button class="inline-block mx-auto px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-green-500 rounded-full shadow ripple hover:shadow-lg focus:outline-none">
                  Start Free Trial
                </button>
              </div>
            </div>
          </section>
        </div>
        <div class="swiper-slide">
          <div class="flex flex-col align-middle w-full mb-12 video">
            <div id="player1"></div>
            fa
          </div>
        </div>

        <div class="swiper-slide">
          <div class="flex flex-col align-middle w-full mb-12 video">
            f
        </div>

      </div>
    </div>

    <div class="swiper-pagination"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
  </div>

</template>

<script>

import Swiper, {Navigation, Pagination} from 'swiper';
import Vue from "vue";
Swiper.use([Navigation, Pagination]);
export default {
  name: "NavBar",
  data() {
    return {
      open: false

    }
    var mySwiper = new Swiper('.swiper-container', {
      // Optional parameters
      direction: 'vertical',
      loop: true,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
  }
  }

const VueScrollTo = require('vue-scrollto');

Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})



</script>

<style scoped>


#NavBar{
  background: url("/images/bgmain.jpg") no-repeat 50%;
  background-size: cover;
  height: 100vh;
  overflow: hidden;
  position: relative
}

.swiper-container {
  width: 100%;
}

.swiper-slide {
  background-size: cover;
  background-position: 50%;
  min-height: 80vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

</style>