import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${(props) => {
    let style = false;
    switch (props.to) {
      case 'desktop':
        style = css`
          @media (min-width: 768px) {
            display: none;
          `;
        break;

      case 'mobile':
        style = css`
          @media (max-width: 767.98px) {
            display: none;
          }
        `;
        break;
      default:
        style = css`
          display: block;
        `;
    }
    return style;
  }}
`;
