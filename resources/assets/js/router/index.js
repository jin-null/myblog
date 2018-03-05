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
        },
        {
            name: 'categories',
            path: '/categories',
            component: resolve => void(require(['../components/content/Category.vue'], resolve))
        },
        {
            name: 'topics',
            path: '/topics',
            component: resolve => void(require(['../components/content/Topic.vue'], resolve))
        },
        {
            name: 'replies',
            path: '/replies',
            component: resolve => void(require(['../components/content/Reply.vue'], resolve))
        }
    ]
});