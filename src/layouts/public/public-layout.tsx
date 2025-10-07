import { Layout } from 'antd';
import React from 'react';
import { Outlet } from 'react-router';

export const PublicLayout: React.FC = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};
