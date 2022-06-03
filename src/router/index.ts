import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Cart from "../components/Cart.vue";
import CheckOut from "../components/CheckOut.vue";
import Filter from "../components/Filter.vue";
import ProductDetails from "../components/ProductDetails.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/checkout",
    name: "CheckOut",
    component: CheckOut,
  },
  {
    path: "/productdetails/:id",
    name: "ProductDetails",
    component: ProductDetails,
  },
  {
    path: "/filter",
    name: "Filter",
    component: Filter,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
