import React, { FC } from 'react';
import cx from 'classnames';

import { Loader } from 'components/common/loader';

import styles from './page.module.scss';

export namespace Page {
  export type Props = Readonly<{
    header?: boolean;
    isLoading?: boolean;
    children: React.ReactNode;
  }>;

  export const $: FC<Props> = (props) => {
    const { header = true, isLoading } = props;

    return (
      <div className={styles.page}>
        {header && <header>Header component here</header>}
        <main className={styles.page__container}>
          <div className={cx(styles.page__content)}>
            <>{isLoading ? <Loader /> : props.children}</>
          </div>
        </main>
      </div>
    );
  };
}
