import { createRouter, createWebHistory } from "vue-router";
import Home from '@/pages/Home.vue'


export const routers = createRouter({
history: createWebHistory(),
routes:[
    {path: '/', name: 'Home', component: Home},
]
})

export default routers
