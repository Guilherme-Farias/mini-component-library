/* eslint-disable no-unused-vars */
import React from 'react';
import VisuallyHidden from '../VisuallyHidden';

import * as S from './styles'

const STYLES = {
  small: {
    height: 8,
    padding: 0,
    radius: 4,
  },
  medium: {
    height: 12,
    padding: 0,
    radius: 4,
  },
  large: {
    height: 16,
    padding: 4,
    radius: 8,
  },
}

const ProgressBar = ({ value, size }) => {
  const styles = STYLES[size];

  if (!styles) {
    throw new Error(`Unknow size passed to ProgressBar: ${size}`)
  }

  return (
    <S.Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={{
        '--padding': styles.padding + 'px',
        '--radius': styles.radius + 'px',
      }}
    >
      <VisuallyHidden>{value} %</VisuallyHidden>
      <S.BarWrapper>
        <S.Bar
          style={{
            '--width': value + '%',
            '--height': styles.height + 'px',
          }}
        />
      </S.BarWrapper>
    </S.Wrapper >)

};

export default ProgressBar;
