import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 25rem;
  @media (max-width: 767px) {
    margin-left: 0;
  }
`;

const ImgWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  box-shadow: ${({ theme }) => theme.boxShadow};
  margin-bottom: 2rem;
`;
const StyledImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  height: auto;
  width: 100%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

const UserInfo = ({ userName, userImg }) => {
  return (
    <>
      <StyledWrapper>
        {userImg && (
          <ImgWrapper>
            <StyledImg src={userImg} alt="User avatar" />
          </ImgWrapper>
        )}
        <h1>{userName}</h1>
      </StyledWrapper>
    </>
  );
};

export default UserInfo;
