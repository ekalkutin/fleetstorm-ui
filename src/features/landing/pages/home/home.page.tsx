import { Col, Row, Typography } from 'antd';
import React from 'react';

import { FeatureCard } from 'features/landing/components/feature-card/feature-card';
import { Hero } from 'features/landing/components/hero/hero';
import { AppContainer } from 'ui/components/app-container/app-container';

import { features } from './features';

const { Title } = Typography;

export const HomePage: React.FC = () => {
  return (
    <React.Fragment>
      <Hero />
      <AppContainer>
        <Title
          style={{
            textAlign: 'center',
            marginBottom: '64px',
          }}
        >
          🚀 Функции, упрощающие вашу работу
        </Title>

        <Row gutter={[24, 24]}>
          {features.map((feature, index) => (
            <Col key={index} xs={24} sm={12} md={8}>
              <FeatureCard
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            </Col>
          ))}
        </Row>
      </AppContainer>
    </React.Fragment>
  );
};
