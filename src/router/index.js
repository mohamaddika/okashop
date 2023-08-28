import { createWebHistory, createRouter } from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue"
import Home from "../views/Home.vue";
import Produk from "../views/Produk.vue"
import Contact from "../views/Contact.vue";
import Cart from "../views/Cart.vue";
import Checkout from "../views/Checkout.vue";
import Brands from "../views/Brands.vue";
import Category from "../views/Category.vue";
import SingleProduk from "../views/SingleProduk.vue";
import Profile from "../views/Profile.vue";
import Order from "../views/Order.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        meta: { requireLogin: true },
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: { requireGuest: true },
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
        meta: { requireGuest: true },
    },
    {
        path: "/produk",
        name: "Produk",
        component: Produk,
        meta: { requireLogin: true },
    },
    {
        path: '/produk/:slug',
        name: 'SingleProduk',
        component: SingleProduk
    },
    {
        path: "/cart",
        name: "Cart",
        component: Cart,
        meta: { requireLogin: true },
    },
  
    {
        path: "/checkout",
        name: "Checkout",
        component: Checkout,
        
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact,
        
    },
    {
        path: "/profile",
        name: "Profile",
        beforeEnter: cekToken,
        component: Profile,
        
    },
    {
        path: "/brands",
        name: "Brands",
        component: Brands,
       
    },
    {
        path: "/category",
        name: "Category",
        component: Category,
        
    },
    {
        path: "/order/:orderCode",
        name: "Order",
        component: Order,
        props: true,
        
    },
   
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});
function cekToken(to, from, next) {
    var isAuthenticated = false;
    if (localStorage.getItem("token")) isAuthenticated = true;
    else isAuthenticated = false;
    if (isAuthenticated) {
      next();
    } else {
      next("/login");
    }
  }
export default router;