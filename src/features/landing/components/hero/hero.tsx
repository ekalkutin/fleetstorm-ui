import { Button, Typography, Image } from 'antd';
import React from 'react';

import styles from './hero.module.css';

const { Title } = Typography;

export const Hero: React.FC = () => {
  return (
    <section className={styles.container}>
      <div>
        <div>
          <Title>The Future of Fleet Management is Here.</Title>
          <Title className={styles.subtitle} level={3}>
            Streamline operations, boost efficiency, and gain total visibility
            with Fleetstorm's powerful cloud platform.
          </Title>
        </div>
        <div className={styles.cta}>
          <Button size='large' type='primary'>
            Start free trial
          </Button>
          <Button size='large' type='dashed'>
            See demo
          </Button>
        </div>
      </div>
      <div>
        <Image
          preview={false}
          src='https://eliteextra.com/wp-content/uploads/2022/10/8-essential-features-of-fleet-management-software-1-1200x675.jpg'
        />
      </div>
    </section>
  );
};
