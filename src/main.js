import Vue from 'vue'
import Router from 'vue-router'
import Slider from 'vue-concise-slider'
import { domain, fromNow } from './filters'
import App from './components/app.vue'
import login from './components/login.vue'
import main from './components/main.vue'
import adminService from './services/adminService'
import myLoans from './components/myLoans.vue'
import loginFront from './components/view-front/loginFront.vue'
import loginCustomer from './components/view-front/loginCustomer.vue'
import signupFront from './components/view-front/signupFront.vue'
import About from './components/view-front/About.vue' 
import Branch from './components/view-front/Branch.vue'
import bootstrap from './components/view-front/js/bootstrap'
import lightbox from './components/view-front/js/lightbox'
import lightboxPlus from './components/view-front/js/lightbox-plus-jquery'
import easing from './components/view-front/js/easing'
import indexFront from './components/view-front/indexFront.vue'
import VIP1 from './components/view-front/VIP1.vue'
import VIP2 from './components/view-front/VIP2.vue'
import VIP3 from './components/view-front/VIP3.vue'
import VIP4 from './components/view-front/VIP4.vue'
import RoomType from './components/view-front/RoomType.vue'
import YijuType from './components/view-front/YijuType.vue'
import ErjuType from './components/view-front/ErjuType.vue'
import LoftType from './components/view-front/LoftType.vue'
import OtherType from './components/view-front/OtherType.vue'
import Authadd from './components/Authadd.vue'
import back from './components/back.vue'
import Authupdate from './components/Authupdate.vue'
import loginMulti from './components/view-front/loginMulti.vue'
import Finance from './components/view-front/Finance.vue'
import AboutBackUp from './components/view-front/AboutBackUp.vue'
import indexFrontBackUp from './components/view-front/indexFrontBackUp.vue'

// install router
Vue.use(Router);

const routes = [
    {path: '/', component: loginFront},
    {path: '/loginFront', component: loginFront},
    {path: '/loginCustomer', component: loginCustomer},
    {path: '/signupFront', component: signupFront},
    {path: '/indexFront', component: indexFront},
    {path: '/indexFrontBackUp', component: indexFrontBackUp},
    {path: '/Branch', component: Branch},
    {path: '/About', component: About},
    {path: '/AboutBackUp', component: AboutBackUp},
    {path: '/VIP1', component: VIP1},
    {path: '/VIP2', component: VIP2},
    {path: '/VIP3', component: VIP3},
    {path: '/VIP4', component: VIP4},
    {path: '/RoomType', component: RoomType},
    {path: '/YijuType', component: YijuType},
    {path: '/ErjuType', component: ErjuType},
    {path: '/LoftType', component: LoftType},
    {path: '/OtherType', component: OtherType},
    {path: '/Authadd', component: Authadd},
    {path: '/Authupdate', component: Authupdate},
    {path: '/loginMulti', component: loginMulti},
    {path: '/Finance', component: Finance},
    {path: '/login', component: login},
    {path: '/main', component: main,
        children: [
            {path: '/myLoans', component: myLoans},
            {path: '/back', component: back}
            
        ]
    },
];

var router = new Router({routes});

// router.beforeEach((to,from,next) =>{
//     const token = sessionStorage.getItem('Authorization');
//     if(to.path == '/'){ 
//       if(token != 'null' && token != null){
//         next('/index') 
//       }
//       next(); 
//     }else{
//       if(token != 'null' && token != null){
//         Vue.prototype.$http.defaults.headers.common['Authorization'] = 'Bearer ' + token; // 全局设定header的token验证，注意Bearer后有个空格
//         next() 
//       }else{
//         next('/') 
//       }
//     }
//   })

router.beforeEach((to, from, next) => {
    if (!adminService.checkIsLogin() && to.path !== '/' && to.path !== '/loginFront') {
        console.log('/loginFront') 
        next();
    }
    next();
});

//router.start(app, '#app');
const app = new Vue({
    router,
    render: h => h(App)
}).$mount('#app');