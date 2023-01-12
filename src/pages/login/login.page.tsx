/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { FC } from 'react';
import { Page } from 'layouts/page';

import styles from './login.module.scss';

export const LoginPage: FC = () => {
  return (
    <Page.$ header={false}>
      <div className={styles.login}>Login page</div>
    </Page.$>
  );
};
