import Vue from "vue";
import Router from "vue-router";
import Home from "./components/views/Home.vue";
import About from "./components/views/About";
import Contact from "./components/views/Contact";
import User from "./components/users/User";

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "About",
      component: About,
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact,
    },
    {
      path: "/user/:id",
      name: "User",
      component: User,
    },
  ],
  linkExactActiveClass: "has-text-warning",
});
