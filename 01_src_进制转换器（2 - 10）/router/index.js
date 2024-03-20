import VueRouter from "vue-router";

import Calculator from '../pages/Calculator.vue'

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: Calculator
        }
    ]
})