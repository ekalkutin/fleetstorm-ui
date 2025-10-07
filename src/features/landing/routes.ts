import { RouteObject } from 'react-router';

import { HomePage } from './pages/home/home.page';

const routes: RouteObject[] = [
  {
    path: '/',
    Component: HomePage,
  },
];

export default routes;
