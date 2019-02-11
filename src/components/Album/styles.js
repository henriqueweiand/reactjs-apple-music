import styled, { css } from 'styled-components';
import { metrics, colors } from '~/styles';

export const Item = styled.div`
  font-size: 1rem;
  margin: 1rem 0;
  ${props => (props.cover
    ? css`
          width: 100%;
          padding-top: 100%;
          background: #000;
          border-radius: 5px;
          margin: 0 0 1rem 0;
        `
    : '')}

${props => (props.song
    ? css`
        color: ${colors.secondary};
      `
    : '')}

${props => (props.bar
    ? css`
        background: ${colors.lighter};
        height: 1px;
        width: 100%;
      `
    : '')}

${props => (props.notes
    ? css`
        color: ${colors.darker};
        text-transform: uppercase;
      `
    : '')}

${props => (props.description
    ? css`
        font-size: 1rem;
        line-height: 1.5rem;
        color: ${colors.alternative};

        word-break: break-all;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -moz-box-orient: vertical;
        -ms-box-orient: vertical;
        box-orient: vertical;
        line-clamp: 5;
        overflow: hidden;
        -webkit-line-clamp: 5;
        -moz-line-clamp: 5;
        -ms-line-clamp: 5;

        @media (max-width: 767.98px) {
          -webkit-line-clamp: 3;
          -moz-line-clamp: 3;
          -ms-line-clamp: 3;
        }
      `
    : '')}
`;

export const Cover = styled.div`
  width: 30%;
  padding-top: 25%;
  background: #000;
  border-radius: 5px;
  margin-right: 1.5rem;
`;

export const Title = styled.h2``;

export const ButtonSpace = css`
  margin: ${metrics.default} 0 ${metrics.small} 0;
`;
