import styled, { css } from 'styled-components';
import { metrics, colors } from '~/styles';

export const FeaturedArtistContent = css`
  @media (min-width: 767.98px) {
    margin: ${metrics.medium} auto 0;
    width: ${metrics.smallWidthContainer};
  }
`;

export const Label = styled.h4`
  color: #0a0a0a;
  border-top: 1px solid ${colors.lighter};
  padding: ${metrics.smaller} 0;

  @media (max-width: 767.98px) {
    margin: ${metrics.medium} auto 0;
    width: ${metrics.defaultWidthContainer};
  }
`;

export const FeaturedArtistList = css`
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;

  @media (max-width: 767.98px) {
    > div:first-child {
      margin-left: 7.5%;
    }
  }
`;

export const Item = css`
  font-size: 12px;
  margin-right: 1.5rem;

  @media (min-width: 768px) {
    &:last-child {
      margin-right: 0;
    }
  }
`;

export const List = styled.ul`
  list-style: none;
`;

export const ItemList = styled.li`
  margin-bottom: 0.5rem;

  img {
    width: 150px;
    flex: 1;
    border-radius: 50%;
  }

  ${props => css`
    ${props.autorName
      && `
      color: #0a0a0a;
      text-align: center;
    `}

    ${props.category
      && `
      color: #8b8b8b;
      text-align: center;
    `}
  `}
`;
