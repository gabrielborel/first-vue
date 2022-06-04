import { createRouter, createWebHistory } from "vue-router";
import EventsList from "../views/EventsListView.vue";
import AboutView from "../views/AboutView.vue";
import EventDetails from "../views/EventDetailsView.vue";

const routes = [
  {
    path: "/",
    name: "EventsList",
    component: EventsList,
  },
  {
    path: "/event/:id",
    name: "EventDetails",
    props: true,
    component: EventDetails,
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
