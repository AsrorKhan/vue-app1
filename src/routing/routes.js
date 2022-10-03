import homePage from "@/pages/home/home-page";
import aboutPage from "@/pages/about/about-page";
import loginPage from "@/pages/login/login-page";
import notFound from "@/pages/not-found/not-found-page";
export default [
  {
    name: "Home",
    path: "/",
    component: homePage,
  },
  {
    name: "About",
    path: "/about",
    component: aboutPage,
  },
  {
    name: "Login",
    path: "/login",
    component: loginPage,
  },
  {
    path: "/:catchAll(.*)*",
    name: "PageNotFound",
    component: notFound,
  },
];
