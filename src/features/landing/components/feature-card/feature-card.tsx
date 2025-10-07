import { Card } from 'antd';
import React from 'react';

type Props = {
  readonly title: string;
};
export const FeatureCard: React.FC<Props> = props => {
  return (
    <React.Fragment>
      <Card style={{ marginTop: 24, marginBottom: 24 }} title={props.title}>
        Card content
      </Card>
    </React.Fragment>
  );
};
