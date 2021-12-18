import styled from 'styled-components';
import { COLORS } from '../../constants';

export const Wrapper = styled.div`
  border-radius: var(--radius);
  padding: var(--padding);
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};
`;

export const BarWrapper = styled.div`
  border-radius: 4px;

  /* Trim off corners when progress bar is near-full. */
  overflow: hidden;
`

export const Bar = styled.div`
    width: var(--width);
    height: var(--height);
    border-radius: 4px 0 0 4px;
    background-color: ${COLORS.primary};
`;