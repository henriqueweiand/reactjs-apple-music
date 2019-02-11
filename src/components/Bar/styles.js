import styled, { css } from 'styled-components';

export const Container = styled.div`
  border-top: 2px solid #e6e6e6;

  ${props => css`
    ${props.style && props.style}
  `}
`;

export const Title = styled.h4`
  margin: 1rem 0;
`;
