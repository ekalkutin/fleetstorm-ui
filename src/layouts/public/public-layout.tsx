import { Layout } from 'antd';
import React from 'react';
import { Outlet } from 'react-router';

import { FleetstormHeader } from 'features/landing/components/header/header';

const { Content } = Layout;

export const PublicLayout: React.FC = () => {
  return (
    <Layout>
      <FleetstormHeader />
      <Content>
        <Outlet />
      </Content>
    </Layout>
  );
};
