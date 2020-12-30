import Vue from "vue";
import App from "../vue/App.vue";
import AOS from "aos";
import "aos/dist/aos.css";

Vue.directive ('scroll', {
    inserted: function (el, binding) {
        let f = function (evt) {
            if (binding.value (evt, el)) {
                window.removeEventListener ('scroll', f)
            }
        }
        window.addEventListener ('scroll', f)
    }
})

new Vue({
    el: '#App',
    created() {
        AOS.init();
    },
    render: h => h(App)
})


