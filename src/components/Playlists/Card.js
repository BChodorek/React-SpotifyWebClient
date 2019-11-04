import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { playSong } from 'actions/PlayerActions';
import playButton from 'assets/play-button.svg';
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

  img {
    width: 100%;
    height: 100%;
    box-shadow: ${({ theme }) => theme.boxShadow};
  }

  p {
    padding: 2rem 0;
  }
`;
const StyledButton = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  background: rgba(0, 0, 0, 0);
  padding: 1rem;
  transition: 0.15s ease;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
    div {
      opacity: 1;
    }
  }
`;

const StyledIcon = styled.div`
  background: url(${playButton});
  background-size: 75%;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: 0.15s ease;
`;

const Card = ({ imageUrl, name, previewUrl, playSong }) => {
  const togglePlay = () => {
    playSong(previewUrl);
  };

  return (
    <StyledContainer>
      <div className="container">
        {previewUrl && (
          <StyledButton onClick={togglePlay}>
            <StyledIcon />
          </StyledButton>
        )}
        <img src={imageUrl} />
      </div>
      <p>{name}</p>
    </StyledContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  playSong: url => dispatch(playSong(url)),
});

export default connect(
  null,
  mapDispatchToProps,
)(Card);
