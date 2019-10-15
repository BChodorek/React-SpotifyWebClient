import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  .image {
    width: 20rem;
    position: relative;
  }

  img {
    width: 100%;
    vertical-align: top;
    box-shadow: ${({ theme }) => theme.boxShadow};
    transition: 0.2s ease-in;
  }

  .image:after {
    content: '${({ children }) => children[0].props.name}';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    padding-top: 50%;
    text-align:center;
    font-weight: ${({ theme }) => theme.fontWeight.light};
    background-color: rgba(0, 0, 0, 0.6);
    opacity: 0;
    transition: ease-in-out 0.2s;
  }
  .image:hover:after {
    opacity: 1;
  }
`;

const PlaylistCard = ({ images, name }) => {
  return (
    <StyledCard>
      <div name={name} className="image">
        <img src={images[0].url} />
      </div>
      <p>{name}</p>
    </StyledCard>
  );
};

export default PlaylistCard;
