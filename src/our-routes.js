import Home from './views/home.vue';
import AboutUs from './views/aboutus.vue';
import ContactUs from './views/contactus.vue';

export default [
  // Redirects to /route-one as the default route.
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about-us',
    component: AboutUs
  },
  {
    // Route two takes the route parameter "id".
    // The parameter value can be accessed with $route.params.id in the RouteTwo component.
    path: '/contact-us',
    component: ContactUs
  }
  ];