import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

export default new VueRouter({
    saveScrollPosition: true,
    routes: [
        {
            name: 'user',
            path: '/users',
            component: resolve => void(require(['../components/usermanager/users.vue'], resolve))
        }
    ]
});