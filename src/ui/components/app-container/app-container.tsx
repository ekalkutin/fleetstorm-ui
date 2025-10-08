import React, { PropsWithChildren } from 'react';

import styles from './app-container.module.css';

type Props = PropsWithChildren;

export const AppContainer: React.FC<Props> = props => {
  return <div className={styles.container}>{props.children}</div>;
};
