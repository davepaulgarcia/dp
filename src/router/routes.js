
import route from "./route_names";
const routes = [
  {
    path: '/',
    component: () => import('layouts/LandingLayout.vue'),
    children:[
      { path: '' , name: route.ROUTE_LANDING   , component: () => import('pages/Landing/LandingPage.vue') },
      { path: 'book' , name: route.ROUTE_BOOK  , component: () => import('pages/Book/BookPage.vue') },
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/LoginLayout.vue'),
    children:[
      { path: '' , name: route.ROUTE_LOG_IN   , component: () => import('pages/Login/LogInPage.vue') },
    ]
  },
  {
    path: '/admin',
    name: route.ROUTE_ADMIN,
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: ''            , name: route.ROUTE_ADMIN_DASHBOARD   , component: () => import('pages/Dashboard/DashboardPage.vue') },
      { path: 'discount'    , name: route.ROUTE_ADMIN_DISCOUNT    , component: () => import('pages/Discount/DiscountPage.vue') },
      { path: 'pending'     , name: route.ROUTE_ADMIN_PENDING     , component: () => import('pages/Transaction/PendingPage.vue') },
      { path: 'reserved'    , name: route.ROUTE_ADMIN_RESERVED    , component: () => import('pages/Transaction/ReservedPage.vue') },
      { path: 'checked-in'  , name: route.ROUTE_ADMIN_CHECKED_IN  , component: () => import('pages/Transaction/CheckedInPage.vue') },
      { path: 'checked-out' , name: route.ROUTE_ADMIN_CHECKED_OUT , component: () => import('pages/Transaction/CheckedOutPage.vue') },
      { path: 'villas'      , name: route.ROUTE_ADMIN_VILLAS      , component: () => import('pages/Villas/VillasPage.vue') },
      { path: 'account'     , name: route.ROUTE_ADMIN_ACCOUNT     , component: () => import('pages/Account/AccountPage.vue') },
      { path: 'billing'     , name: route.ROUTE_ADMIN_BILLING     , component: () => import('pages/Billing/BillingPage.vue') },
      { path: 'reports'     , name: route.ROUTE_ADMIN_REPORT      , component: () => import('pages/Report/ReportPage.vue') },
    ]
  }
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
