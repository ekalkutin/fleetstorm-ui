import { Button, Flex, Layout, Select, Space, theme } from 'antd';
import React from 'react';

import { useLocale } from 'features/i18n';
import { AppContainer } from 'ui/components/app-container/app-container';
import { AppLogo } from 'ui/components/app-logo/app-logo';

import styles from './header.module.css';

const { Header } = Layout;

export const FleetstormHeader: React.FC = () => {
  const { token } = theme.useToken();

  const { locale, setLocale } = useLocale();

  return (
    <Header
      style={{ boxShadow: token.boxShadow, paddingLeft: 0, paddingRight: 0 }}
    >
      <AppContainer>
        <Flex align='center' justify='space-between'>
          <AppLogo />
          <Flex gap={'middle'} className={styles.container}>
            <Button type='text'>Home</Button>
            <Button type='text'>Features</Button>
            <Button type='text'>Pricing</Button>
            <Button type='text'>Contact</Button>
          </Flex>
          <Space>
            <Select
              value={locale}
              style={{ width: 120 }}
              onChange={setLocale}
              options={[
                { value: 'en', label: 'English 🇺🇸' },
                { value: 'ru', label: 'Русский 🇷🇺' },
              ]}
            />
            <Button type='primary'>Sign in</Button>
          </Space>
        </Flex>
      </AppContainer>
    </Header>
  );
};
