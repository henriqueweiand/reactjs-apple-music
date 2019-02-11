import styled, { css } from 'styled-components';
import { metrics } from '~/styles';

export const Container = styled.section`
  margin: 3rem auto 0;

  @media (max-width: 767.98px) {
    width: ${metrics.defaultWidthContainer};
  }

  @media (min-width: 767.98px) {
    width: ${metrics.smallWidthContainer};
  }
`;

export const Title = styled.h3`
  margin-top: ${metrics.smaller};
`;

export const ButtonSpace = css`
  margin: ${metrics.default} 0;
`;
