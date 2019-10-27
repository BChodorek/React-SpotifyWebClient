import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledImg = styled.img`
  max-width: 12rem;
  border-radius: 50%;
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

const UserInfo = ({ userName, userImg }) => {
  return (
    <>
      <StyledWrapper>
        <StyledImg src={userImg} alt="avatar" />
        <h1>{userName}</h1>
      </StyledWrapper>
    </>
  );
};

export default UserInfo;
