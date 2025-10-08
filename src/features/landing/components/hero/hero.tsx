import { ArrowRightOutlined } from '@ant-design/icons';
import { Button, Typography, Image, Flex, Row, Col, Space, theme } from 'antd';
import React from 'react';
import { useIntl } from 'react-intl';

import { AppContainer } from 'ui/components/app-container/app-container';

import styles from './hero.module.css';

const { Title, Text } = Typography;

export const Hero: React.FC = () => {
  const { token } = theme.useToken();
  const intl = useIntl();

  return (
    <section className={styles.container}>
      <AppContainer>
        <Row style={{ minHeight: '50vh' }} align={'middle'} gutter={[48, 48]}>
          <Col sm={24} md={12}>
            <Flex vertical gap={48}>
              <div>
                <Title level={3} style={{ color: token.colorPrimary }}>
                  {intl.formatMessage({ id: 'app.heading' })}
                </Title>
                <Title level={2}>
                  {intl.formatMessage({ id: 'app.title' })}
                </Title>
                <Text>{intl.formatMessage({ id: 'app.subtitle' })}</Text>
              </div>
              <Space>
                <Button size='large' type='primary'>
                  {intl.formatMessage({ id: 'cta.start' })}
                  <ArrowRightOutlined />
                </Button>
                <Button color='default' variant='solid' size='large'>
                  {intl.formatMessage({ id: 'cta.demo' })}
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
