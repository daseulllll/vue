import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeComponent from '@/components/routerComponents/HomeComponent';
import AboutComponent from '@/components/routerComponents/AboutComponent';
import Main from '@/components/routerComponents/MainView'

Vue.use(VueRouter);

const route = [
    {path:"/home",component:HomeComponent},
    {path:"/",component:Main},
    {path:"/about",component:AboutComponent},
];

const router = new VueRouter({
    mode:'history',
    routes:route
})

export default router;