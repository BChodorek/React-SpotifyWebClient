import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  img {
    width: 15rem;
    box-shadow: ${({ theme }) => theme.boxShadow};
    transition: 0.2s ease-in;
  }

  p {
    text-align: center;
    padding: 0.5rem;
  }
`;

const PlaylistCard = ({ imageUrl, name, artistName }) => {
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

export default PlaylistCard;
