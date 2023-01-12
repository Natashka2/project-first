/* eslint-disable react/prop-types */
import React, { FC } from 'react';
import cx from 'classnames';
import { WithDataTest } from 'types';

import styles from './input.module.scss';

export namespace Input {
  export type Props = {
    // value?: string;
    error?: string;
    disabled?: boolean;
    readonly?: boolean;
    placeholder?: string;
    fullWidth?: boolean;
    // onChange: (e: InputCustomEvent) => void;
  } & WithDataTest;

  export enum Style {
    Grey = 'grey',
    Transparent = 'transparent',
  }

  export const $: FC<Props> = (props) => {
    const {
      // value,
      disabled,
      placeholder,
      // onChange,
      error,
      dataTestId,
    } = props;

    return (
      <div className={styles.input}>
        <input
          placeholder={placeholder}
          data-test={dataTestId}
          // value={value}
          type={'text'}
          disabled={disabled}
          className={cx(
            styles.input__control,
            disabled && styles.input__control_disabled,
          )}
        />
        {error && (
          <div slot="error" className={styles.input__error}>
            {error}
          </div>
        )}
      </div>
    );
  };
  // );
}
