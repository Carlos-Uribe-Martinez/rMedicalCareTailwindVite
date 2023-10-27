import { createRouter, createWebHistory } from "vue-router";
//Importar las diferentes vistas
const Contact = () => import("./views/Contact.vue");
const Neurologia = () => import("./views/Neurologia.vue");
const Radiologia = () => import("./views/Radiologia.vue");
import Home from "./views/Home.vue";

//configuracion de rutas
const routes = [
  {
    path: "/Contact",
    name: "Contact",
    alias: "/Contact",
    component: Contact,
  },
  {
    path: "/",
    name: "Home",
    alias: "/",
    component: Home,
  },
  {
    path: "/Neurologia",
    name: "Neurologia",
    alias: "/Neurologia",
    component: Neurologia,
  },
  {
    path: "/Radiologia",
    name: "Radiologia",
    alias: "/Radiologia",
    component: Radiologia,
  },
];

const router = createRouter({
  // mantiene historial de rutas
  history: createWebHistory(),
  routes,
});

export default router;
