import styled from 'styled-components';

export const Container = styled.div`
  color: #3e3e3e;
  line-height: 24px;

  @media (max-width: 767.98px) {
    word-break: break-all;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -moz-box-orient: vertical;
    -ms-box-orient: vertical;
    box-orient: vertical;
    -webkit-line-clamp: 5;
    -moz-line-clamp: 5;
    -ms-line-clamp: 5;
    line-clamp: 5;
    overflow: hidden;
  }
`;
