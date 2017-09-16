import Cases from './views/cases.vue';
import CaseView from './views/case-view.vue';

import AboutUs from './views/about-us.vue';
import ContactUs from './views/contact-us.vue';

export default [
    // Redirects to /route-one as the default route.
    {
      path: '/',
      redirect: '/cases'
    },
    {
      path: '/cases',
      name: 'Cases',
      component: Cases,
      // Children is just another route definition of sub-routes.
      children: [
      {
        // Note: No leading slash. This can trip people up sometimes.
        path: 'case-view',
        name: 'Case View',
        component: CaseView
      }
      ]
    },
    {
     path: '/about-us',
     name: 'About Us',
     component: AboutUs
   },
   {
     path: '/contact-us',
     name: 'Contact Us',
     component: ContactUs
   }
   ];