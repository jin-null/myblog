import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

export default new VueRouter({
    saveScrollPosition: true,
    routes: [
        {
            name: 'test',
            path: '/test',
            component: resolve => void(require(['../components/test.vue'], resolve))
        }
    ]
});