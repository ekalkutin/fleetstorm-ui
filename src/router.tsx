import { createBrowserRouter } from 'react-router';

import { PublicLayout } from 'layouts/public/public-layout';

import landingRoutes from './features/landing/routes';

const router = createBrowserRouter([
  {
    path: '/',
    Component: PublicLayout,
    children: landingRoutes,
  },
]);

export default router;
