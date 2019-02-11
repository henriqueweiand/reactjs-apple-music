import styled, { css } from 'styled-components';
import { metrics, colors } from '~/styles';

export const List = css`
  border-top: 1px solid ${colors.lighter};
  padding: ${metrics.small} 0;
`;

export const Label = styled.div`
  color: ${colors.secondary};
  font-size: 0.7rem;
`;

export const Value = styled.div`
  color: ${colors.default};
`;
