const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "/about", component: () => import("pages/aboutCompany.vue") },
      { path: "/service", component: () => import("pages/serviceCompany.vue") },
      { path: "/contact", component: () => import("pages/contactUs.vue") },
      { path: "/axios", component: () => import("pages/axiosPractice.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
