import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyC5bRnggwLRvP5NbiMyACfAukWY6YUEWgs",
  authDomain: "calender-vue.firebaseapp.com",
  databaseURL: "https://calender-vue.firebaseio.com",
  projectId: "calender-vue",
  storageBucket: "calender-vue.appspot.com",
  messagingSenderId: "628124262411",
  appId: "1:628124262411:web:e31231a2f72a993954670e"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
