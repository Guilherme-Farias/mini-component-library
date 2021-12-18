import styled from 'styled-components';
import { COLORS } from '../../constants';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
`

export const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  border-radius: 8px;

  /* Allow the select to span the full height in Safari */
  -webkit-appearance: none;
`

export const PresentationalBit = styled.div`
  padding: 12px 16px;
  padding-right: 52px;
  font-size: ${16 / 16}rem;
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;


  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`

export const IconWrapper = styled.div`
  position: absolute;
  top:0;
  bottom: 0;
  right: 10px;
  margin: auto;
  height: var(--size);
  pointer-events: none;
`