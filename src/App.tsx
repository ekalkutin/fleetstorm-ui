import { ConfigProvider } from 'antd';
import React from 'react';
import { RouterProvider } from 'react-router';
import './theme/index.css';

import { theme } from 'theme/antd-theme';

import router from './router';

export const App: React.FC = () => {
  return (
    <React.Fragment>
      <ConfigProvider theme={theme}>
        <RouterProvider router={router} />
      </ConfigProvider>
    </React.Fragment>
  );
};
