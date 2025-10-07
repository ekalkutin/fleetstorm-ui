import { Button, Flex, Layout, theme } from 'antd';
import React from 'react';

import { AppLogo } from 'ui/components/app-logo/app-logo';

import styles from './header.module.css';

const { Header } = Layout;

export const FleetstormHeader: React.FC = () => {
  const { token } = theme.useToken();

  return (
    <Header style={{ boxShadow: token.boxShadow }}>
      <Flex className={styles.container} align='center' justify='space-between'>
        <AppLogo />
        <Flex gap={'middle'}>
          <Button type='text'>Home</Button>
          <Button type='text'>Features</Button>
          <Button type='text'>Pricing</Button>
          <Button type='text'>Contact</Button>
        </Flex>
        <Button type='primary'>Sign in</Button>
      </Flex>
    </Header>
  );
};
