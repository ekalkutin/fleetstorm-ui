import { ArrowRightOutlined } from '@ant-design/icons';
import { Button, Typography, Image, Flex, Row, Col, Space, theme } from 'antd';
import React from 'react';

import { AppContainer } from 'ui/components/app-container/app-container';

import styles from './hero.module.css';

const { Title, Text } = Typography;

export const Hero: React.FC = () => {
  const { token } = theme.useToken();

  return (
    <section className={styles.container}>
      <AppContainer>
        <Row style={{ minHeight: '50vh' }} align={'middle'} gutter={[48, 48]}>
          <Col sm={24} md={12}>
            <Flex vertical gap={48}>
              <div>
                <Title level={3} style={{ color: token.colorPrimary }}>
                  Simply the best online tools for fleet management
                </Title>
                <Title level={2}>The Future of Fleet Management is Here.</Title>
                <Text>
                  Automate repetitive car-sharing fleet tasks to improve your
                  efficiency. Auto-sync platform calendars to limit double
                  bookings, auto-send customizable templated messages to
                  travelers to improve response times, and much more!
                </Text>
              </div>
              <Space>
                <Button size='large' type='primary'>
                  Get started
                  <ArrowRightOutlined />
                </Button>
                <Button color='default' variant='solid' size='large'>
                  See demo
                </Button>
              </Space>
            </Flex>
          </Col>
          <Col sm={24} md={12} className={styles.img}>
            <Image
              preview={false}
              src='https://fleetwire.io/wp-content/uploads/2023/08/easy_online_tool-1-jpeg.webp'
            />
          </Col>
        </Row>
      </AppContainer>
    </section>
  );
};
