import React from 'react';

import { FleetstormHeader } from 'features/landing/components/header/header';
import { Hero } from 'features/landing/components/hero/hero';

export const HomePage: React.FC = () => {
  return (
    <React.Fragment>
      <FleetstormHeader />
      <Hero />
    </React.Fragment>
  );
};
