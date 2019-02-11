import styled, { css } from 'styled-components';
import { metrics, colors } from '~/styles';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  width: ${metrics.defaultWidthContainer};
  margin: ${metrics.bigger} auto 0;
`;

export const Title = styled.h1`
  color: ${colors.dark};
  margin-bottom: ${metrics.smaller};
`;

export const ButtonSpace = css`
  margin: ${metrics.default} 0;
`;

export const ListSpace = css`
  margin-top: ${metrics.small};
`;
