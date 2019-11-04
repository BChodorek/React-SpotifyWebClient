import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  .container {
    position: relative;
    width: 100%;
  }

  .placeholder {
    width: 100%;
    display: block;
    background-color: #000;
  }

  img {
    width: 100%;
    /* display: block; */
    box-shadow: ${({ theme }) => theme.boxShadow};
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    background: rgba(0, 0, 0, 0);
    padding: 1rem;
    transition: 0.15s ease;
    & p {
      display: none;

      &:hover {
        color: ${({ theme }) => theme.activeGreen};
        cursor: pointer;
      }
    }
    &:hover {
      background-color: rgba(0, 0, 0, 0.8);
      & p {
        display: block;
      }
    }
  }

  p {
    padding-top: 2rem;
  }
`;

const Card = ({ imageUrl, name, playPreview }) => {
  return (
    <StyledContainer>
      <div className="container">
        {!imageUrl && <div className="placeholder"></div>}
        {imageUrl && <img src={imageUrl} />}
        <div className="overlay">
          <p onClick={playPreview}>PLAY</p>
        </div>
      </div>
      <p>{name}</p>
    </StyledContainer>
  );
};

export default Card;
