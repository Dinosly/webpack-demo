//把Greeter模块返回的节点插入页面
// const greeter = require('./src/greeter.js');
// document.querySelector("#root").appendChild(greeter());

import Vue from 'vue';
import App from './App.vue';
// import router from './router';
// import store from './store';

export default new Vue({
    el: '#app',
    // router,
    // store,
    render: h => h(App),
});