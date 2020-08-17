import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Project from "../views/Projects.vue";
import TodoApp from "@/views/TodoApp.vue";
import Pixabay from "@/views/Pixabay.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/project",
    name: "ProjectList",
    component: Project,
  },
  {
    path: "/project/todo",
    name: "TodoApp",
    component: TodoApp,
  },
  {
    path: "/project/pixabay",
    name: "Pixabay",
    component: Pixabay,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
