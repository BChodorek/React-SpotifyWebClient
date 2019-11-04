import styled from 'styled-components';

const Button = styled.button`
  padding: 0.4rem 1.6rem;
  border-radius: 50px;
  border: 0.2rem solid ${({ theme }) => theme.grey};
  background-color: transparent;
  color: ${({ theme }) => theme.lightGrey};
  border-color: #fff;
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.activeGreen};
    border-color: ${({ theme }) => theme.activeGreen};
  }
`;

export default Button;
