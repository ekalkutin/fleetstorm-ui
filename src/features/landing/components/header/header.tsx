import { Button, Layout } from 'antd';
import React from 'react';

import { AppLogo } from 'ui/components/app-logo/app-logo';

import styles from './header.module.css';

const { Header } = Layout;

export const FleetstormHeader: React.FC = () => {
  return (
    <Header className={styles.header}>
      <AppLogo />
      <Button type='primary'>Sign in</Button>
    </Header>
  );
};
