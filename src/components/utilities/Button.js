import styled, { css } from 'styled-components';

const Button = styled.button`
  padding: 0.4rem 1.6rem;
  border: 0.2rem solid ${({ theme }) => theme.grey};
  border-radius: 50px;
  background-color: transparent;
  color: ${({ theme }) => theme.lightGrey};
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-family: 'Open Sans';
  font-weight: 300;
  text-transform: uppercase;
`;

export default Button;
