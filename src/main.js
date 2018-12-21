// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Axios from 'axios'
import VueAxios from 'vue-axios'

const NYTUrl = "https://api.nytimes.com/svc/topstories/v2/home.json"
const ApiKey = "93a47449484741989456578bb9a05b09"

Vue.config.productionTip = false;

Vue.use(VueAxios,Axios);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
