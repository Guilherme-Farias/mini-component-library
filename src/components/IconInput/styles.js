import styled from 'styled-components';
import { COLORS } from '../../constants';


export const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
`;

export const TextInput = styled.input`
  width: var(--width);
  height: var(--height);
  font-size: var(--font-size);
  padding-left: var(--height);
  border: none;
  border-bottom: var(--border-thickness) solid ${COLORS.black};

  color: inherit;
  font-weight: 700;
  outline-offset: 2px;
  
  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;