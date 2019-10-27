import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  height: 100%;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  div {
    height: 100%;
  }

  img {
    width: 75%;
    box-shadow: ${({ theme }) => theme.boxShadow};
  }

  p {
    padding-top: 1rem;
  }
`;

const Card = ({ imageUrl, name, artistName }) => {
  return (
    <StyledContainer>
      <div>
        <img src={imageUrl} />
      </div>
      <p>{name}</p>
      {artistName && <p>{artistName}</p>}
    </StyledContainer>
  );
};

export default Card;
