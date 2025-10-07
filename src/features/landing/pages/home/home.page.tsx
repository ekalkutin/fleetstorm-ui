import { Col, Row } from 'antd';
import React from 'react';

import { FeatureCard } from 'features/landing/components/feature-card/feature-card';
import { Hero } from 'features/landing/components/hero/hero';

export const HomePage: React.FC = () => {
  return (
    <React.Fragment>
      <Hero />
      <React.Fragment>
        <Row gutter={24}>
          <Col xs={24} sm={12} lg={8}>
            <FeatureCard title='Rapid deployment' />
          </Col>
          <Col xs={24} sm={12} lg={8}>
            <FeatureCard title='Unified architecture' />
          </Col>
          <Col xs={24} sm={12} lg={8}>
            <FeatureCard title='Intelligent optimization' />
          </Col>
        </Row>
      </React.Fragment>
    </React.Fragment>
  );
};
