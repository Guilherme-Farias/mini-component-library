import React from 'react';

import Icon from '../Icon';

import { getDisplayedValue } from './Select.helpers';

import * as S from './styles'

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <S.Wrapper>
      <S.NativeSelect value={value} onChange={onChange}>
        {children}
      </S.NativeSelect>
      <S.PresentationalBit>
        {displayedValue}{' '}
        <S.IconWrapper
          style={{ '--size': 24 + 'px' }}
        >
          <Icon
            id="chevron-down"
            strokeWidth={1}
            size={24}
          />
        </S.IconWrapper>
      </S.PresentationalBit>
    </S.Wrapper>
  );
};

export default Select;
