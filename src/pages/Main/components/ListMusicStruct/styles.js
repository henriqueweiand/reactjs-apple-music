import styled, { css } from 'styled-components';
import { metrics, colors } from '~/styles';

export const List = css`
  border-top: 1px solid ${colors.lighter};
  padding: ${metrics.small} 0;
`;

export const Title = styled.div`
  color: ${colors.secondary};
  font-size: 0.7rem;
  line-height: 1rem;
`;

export const Artist = styled.div`
  color: ${colors.default};
  font-size: 0.7rem;
`;

export const Cover = styled.div`
  img {
    width: 42px;
    height: 42px;
    border: 1px solid ${colors.third};
    margin-right: 0.5rem;
    border-radius: 5px;
    margin-top: 4px;
  }
`;

export const Time = styled.span`
  color: ${colors.secondary};
  font-size: 0.7rem;
`;
