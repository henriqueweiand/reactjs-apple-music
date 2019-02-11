import styled, { css } from 'styled-components';

export const Container = styled.div`
  @media (max-width: 768px) {
    ${props => css`
      ${props.mobile
        && `
        width: ${props.mobile}%;
      `}
    `}
  }

  @media (min-width: 768px) {
    ${props => css`
      ${props.desktop
        && `
        width: ${props.desktop}%;
      `}
    `}
  }

  ${props => css`
    ${props.container && 'display: flex'};
    flex-grow: ${props.item ? 1 : 0};
    flex-direction: ${props.direction || 'row'};
    justify-content: ${props.justify || 'flex-start'};
    align-items: ${props.alignItems || 'stretch'};
    align-content: ${props.alignContent || 'stretch'};
    flex-wrap: ${props.wrap || 'nowrap'};
    ${props.styles && props.styles}
  `}
`;
