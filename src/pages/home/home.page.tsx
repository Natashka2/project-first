/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { FC } from 'react';

import { Page } from 'layouts/page/page.component';

import styles from './home.module.scss';

export const HomePage: FC = () => {
  return (
    <Page.$>
      <div data-testid="home-page" className={styles.home}>
        Home page
      </div>
    </Page.$>
  );
};
