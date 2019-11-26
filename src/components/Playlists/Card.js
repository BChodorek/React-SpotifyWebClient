import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { setSong, pauseSong, playSong } from 'actions/PlayerActions';
import playButton from 'assets/play-button.svg';
import pauseButton from 'assets/pause-button.svg';

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
const PlayButton = styled.div`
  background: url(${playButton});
  background-repeat: no-repeat;
  background-size: 75%;
  background-position: center;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: 0.15s ease;
`;

const PauseButton = styled(PlayButton)`
  background: url(${pauseButton});
  background-repeat: no-repeat;
  background-size: 75%;
  background-position: center;
  opacity: 1;
`;

class Card extends Component {
  render() {
    const { imageUrl, name, previewUrl, songUrl, isPlaying, setSong, pauseSong } = this.props;
    return (
      <StyledContainer>
        <div className="container">
          {previewUrl && (
            <StyledButton>
              {songUrl === previewUrl && isPlaying ? (
                <PauseButton onClick={() => pauseSong()} />
              ) : (
                <PlayButton onClick={() => setSong(previewUrl)} />
              )}
            </StyledButton>
          )}
          <img src={imageUrl} alt={name + 'album cover'} />
        </div>
        <p>{name}</p>
      </StyledContainer>
    );
  }
}

const mapStateToProps = ({ songUrl, isPlaying }) => ({
  songUrl,
  isPlaying,
});

const mapDispatchToProps = dispatch => ({
  setSong: previewUrl => dispatch(setSong(previewUrl)),
  pauseSong: () => dispatch(pauseSong()),
  playSong: () => dispatch(playSong()),
});

export default connect(
  null,
  mapDispatchToProps,
)(Card);
