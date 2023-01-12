import React, { FC } from 'react';
import cx from 'classnames';
import { WithOptionalDataTest } from 'types';

import styles from './text.module.scss';

export namespace Text {
  export type Props = Readonly<{
    color?: Color;
    heading?: Heading;
    inline?: boolean;
    centered?: boolean;
    twoColumns?: boolean;
    noMargin?: boolean;
    className?: string;
    children: React.ReactNode;
  }> &
    WithOptionalDataTest;

  export enum Color {
    Black = 'black',
    Dark = 'dark',
    Light = 'light',
    Primary = 'primary',
    Tone4 = 'tone4',
  }

  export enum Heading {
    H1 = 'h1',
    H2 = 'h2',
    H3 = 'h3',
  }

  const colorMap = {
    [Color.Black]: styles.text_colorBlack,
    [Color.Dark]: styles.text_colorDark,
    [Color.Light]: styles.text_colorLight,
    [Color.Primary]: styles.text_colorPrimary,
    [Color.Tone4]: styles.text_colorTone4,
  };

  const headingMap = {
    [Heading.H1]: styles.text_heading1,
    [Heading.H2]: styles.text_heading2,
    [Heading.H3]: styles.text_heading3,
  };

  export const $: FC<Props> = (props) => {
    const {
      color = Color.Black,
      heading,
      centered,
      inline,
      noMargin,
      twoColumns,
      dataTestId,
      className,
      children,
    } = props;

    const textStyles = cx(
      styles.text,
      colorMap[color],
      centered && styles.text_centered,
      inline && styles.text_inline,
      noMargin && styles.text_noMargin,
      twoColumns && styles.text_twoColumns,
      className && className,
    );

    return heading ? (
      React.createElement(
        heading,
        {
          className: cx(textStyles, styles.text_heading, headingMap[heading]),
          'data-testid': dataTestId,
        },
        children,
      )
    ) : (
      <div data-testid={dataTestId} className={textStyles}>
        {children}
      </div>
    );
  };
}
