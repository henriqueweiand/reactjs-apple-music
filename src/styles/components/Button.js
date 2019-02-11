import styled, { css } from 'styled-components';
import { colors } from '~/styles';

export const Button = styled.button`
  border: 1px solid ${colors.danger};
  color: ${colors.danger};
  padding: 0.5rem 0.7rem;
  border-radius: 5px;
  font-weight: 500;
  background: transparent;
  cursor: pointer;

  ${props => css`
    ${props.style && props.style}
  `}

  @media (max-width: 767.98px) {
    font-size: 1rem;
    font-weight: normal;
  }
`;

export default Button;
