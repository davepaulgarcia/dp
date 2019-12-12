import Vue from 'vue'
import VueRouter from 'vue-router'
import route from './route_names';
import routes from './routes'

Vue.use(VueRouter)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation
 */

export default function (/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  });
  Router.beforeEach((to, from, next) => {
     if(!localStorage.getItem('user') && to.name.split('/').includes(route.ROUTE_ADMIN)) next({name: route.ROUTE_LOG_IN});
     else if (!!localStorage.getItem('user') && to.name === route.ROUTE_LOG_IN) next({name: route.ROUTE_ADMIN_DASHBOARD});
     else next()
  });
  return Router
}
