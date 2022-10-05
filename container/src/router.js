import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./pages/Home.vue";
import About from "app1/About";
import EditAbout from "app1/EditAbout";
import Contact from "app2/Contact";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/app1/about",
    component: About,
  },
  {
    path: "/app1/about/:id",
    component: EditAbout,
  },
  { path: "/app2/contact", component: Contact },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
