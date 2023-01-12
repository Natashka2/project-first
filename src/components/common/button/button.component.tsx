import React, { FC } from 'react';
import cx from 'classnames';
import { WithDataTest } from 'types';

import styles from './button.module.scss';

export namespace Button {
  export type Props = {
    size?: Size;
    theme?: Theme;
    disabled?: boolean;
    fullWidth?: boolean;
    children: React.ReactNode;
    onClick: () => void;
  } & WithDataTest;

  export enum Size {
    Small = 'small',
    Medium = 'medium',
  }

  export enum Theme {
    Primary = 'primary',
    Black = 'black',
  }

  const colorMap = {
    [Theme.Primary]: styles.button_themePrimary,
    [Theme.Black]: styles.button_themeBlack,
  };

  const sizeMap = {
    [Size.Small]: styles.button_sizeSmall,
    [Size.Medium]: styles.button_sizeMedium,
  };

  export const $: FC<Props> = (props) => {
    const {
      disabled,
      fullWidth,
      size = Size.Medium,
      theme = Theme.Primary,
      children,
      onClick,
      dataTestId,
    } = props;

    return (
      <button
        disabled={disabled}
        onClick={onClick}
        data-test={dataTestId}
        className={cx(
          styles.button,
          colorMap[theme],
          sizeMap[size],
          disabled && styles.button_disabled,
        )}
      >
        {children}
      </button>
    );
  };
}
