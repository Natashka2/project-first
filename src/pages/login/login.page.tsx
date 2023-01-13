import React, { FC } from 'react';
import { Page } from 'layouts/page';
import { Button } from 'components/common/button';

import styles from './login.module.scss';

export const LoginPage: FC = () => {
  const handleLogin = (userName: string) => {
    console.log(userName);
    // TODO: check user and redirect to home
    // ReactRouter v6 url push
    // create input with react (mutable compoennts)
  };

  return (
    <Page.$ header={false}>
      <div className={styles.login}>Login page</div>
      <input type="text" />
      {/* {error && <>error</>} */}
      <Button.$ onClick={() => handleLogin('tete')} theme={Button.Theme.Black} dataTestId='login-button'>test</Button.$>
    </Page.$>
  );
};
