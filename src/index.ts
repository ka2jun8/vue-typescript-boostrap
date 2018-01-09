import Vue from "vue";

// import BootstrapVue from "bootstrap-vue"; // TODO error 
const BootstrapVue = require("bootstrap-vue").default;
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import HelloComponent from "./components/Hello.vue";

Vue.use(BootstrapVue);

let app = new Vue({
    el: "#app",
    template: `
    <div>
        Name: <input v-model="name" type="text">
        <h1>Hello Component</h1>
        <hello-component :name="name" :initialEnthusiasm="5" />
        </div>
    `,
    data: {
        name: "World",
    },
    components: {
        HelloComponent,
    },
});
