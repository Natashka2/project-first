import React, { FC } from 'react';
import cx from 'classnames';
import { WithOptionalDataTest } from 'types';

import styles from './content.module.scss';

export namespace Content {
  export type Props = {
    background?: Background;
    spacing?: Spacing;
    className?: string;
    children: React.ReactNode;
  } & WithOptionalDataTest;

  export enum Background {
    Transparent = 'transparent',
    Grey = 'grey',
    Light = 'light',
  }

  export enum Spacing {
    Default = 'default',
    Narrow = 'narrow',
    Large = 'large',
  }

  const backgroundMap = {
    [Background.Transparent]: styles.content_backgroundTransparent,
    [Background.Grey]: styles.content_backgroundGrey,
    [Background.Light]: styles.content_backgroundLight,
  };

  const spacingMap = {
    [Spacing.Default]: styles.content__inner_spacingDefault,
    [Spacing.Narrow]: styles.content__inner_spacingNarrow,
    [Spacing.Large]: styles.content__inner_spacingLarge,
  };

  export const $: FC<Props> = (props) => {
    const {
      background = Background.Transparent,
      spacing = Spacing.Default,
      className,
      children,
      dataTestId,
    } = props;

    return (
      <div
        className={cx(styles.content, backgroundMap[background])}
        data-test={dataTestId}
      >
        <div
          className={cx(
            styles.content__inner,
            spacingMap[spacing],
            className && className,
          )}
        >
          {children}
        </div>
      </div>
    );
  };
}
