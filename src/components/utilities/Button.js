import styled from 'styled-components';

const Button = styled.button`
  padding: 0.4rem 1.6rem;
  border-radius: 50px;
  border: 0.2rem solid ${({ theme }) => theme.grey};
  background-color: transparent;
  color: ${({ theme }) => theme.lightGrey};
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  text-transform: uppercase;
`;

export default Button;
