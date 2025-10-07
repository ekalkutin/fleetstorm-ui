import React from 'react';
import { RouterProvider } from 'react-router';
import './theme/index.css';

import router from './router';

export const App: React.FC = () => {
  return (
    <React.Fragment>
      <RouterProvider router={router} />
    </React.Fragment>
  );
};
