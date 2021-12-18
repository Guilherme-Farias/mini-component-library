import React from 'react';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

import * as S from './styles'

const STYLES = {
  small: {
    fontSize: 14 / 16,
    iconSize: 16,
    borderThickness: 1,
    height: 24/ 16,
  },
  large: {
    fontSize: 18 / 16,
    iconSize: 24,
    borderThickness: 2,
    height: 36/ 16,
  },
}


const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  ...delegated
}) => {
  const styles = STYLES[size];

  if (!styles) {
    throw new Error(`Unknow size passed to IconInput: ${size}`)
  }

  return (
    <S.Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <S.IconWrapper style={{ '--size': styles.iconSize + 'px' }}>
        <Icon id={icon} size={styles.iconSize} />
      </S.IconWrapper>
      <S.TextInput
        style={{
          '--width': width + 'px',
          '--height': styles.height + 'rem',
          '--border-thickness': styles.borderThickness + 'px',
          '--font-size': styles.fontSize + 'rem',
        }}
        {...delegated}
      />
    </S.Wrapper>
  );
};

export default IconInput;
