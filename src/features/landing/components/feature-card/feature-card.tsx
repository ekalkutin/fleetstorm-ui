import { Card, theme } from 'antd';
import React, { JSX, PropsWithChildren } from 'react';

type Props = {
  readonly title: string;
  readonly description: string;
  readonly icon: JSX.Element;
} & PropsWithChildren;
export const FeatureCard: React.FC<Props> = props => {
  const { token } = theme.useToken();

  return (
    <React.Fragment>
      <Card hoverable style={{ textAlign: 'center', minHeight: '250px' }}>
        <div
          style={{
            marginBottom: '16px',
            color: token.colorPrimary,
            fontSize: 32,
          }}
        >
          {props.icon}
        </div>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </Card>
    </React.Fragment>
  );
};
