import React, { FC } from 'react';

import { Page } from 'layouts/page/page.component';

import styles from './home.module.scss';

export const HomePage: FC = () => {
  return (
    <Page.$>
      <div className={styles.home}>
        Home page
      </div>
    </Page.$>
  );
};
