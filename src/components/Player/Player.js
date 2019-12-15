import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import playButton from "assets/play-button.svg";
import pauseButton from "assets/pause-button.svg";
import { playSong, pauseSong } from "actions/PlayerActions";

const PlayerWrapper = styled.div`
  position: fixed;
  bottom: 0;
  margin-left: 25rem;
  width: 100%;
  height: 10vh;
  background-color: ${({ theme }) => theme.black};
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  z-index:999;
  @media (max-width: 767px) {
    margin-left: 0;
  }
`;

const PlayButton = styled.div`
  background: url(${playButton});
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: contain;
  width: 10%;
  height: 4rem;
  cursor: pointer;
  @media (max-width: 767px) {
    margin-left: 0;
    width: 25%;
  }
`;
const PauseButton = styled(PlayButton)`
  background: url(${pauseButton});
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: contain;
`;

const ProgressBar = styled.div`
  width: 60%;
  height: 4px;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.lightGrey};
  & .progressFill {
    border-radius: 2px;
    width: ${props => props.audioProgress}%;
    height: 4px;
    z-index: 12;
    background-color: ${({ theme }) => theme.activeGreen};
  }
  & div:last-of-type {
    padding-top:8px;
  }
`;

export class Player extends Component {
  state = {
    audioProgress: 0,
    currentTime: 0
  };

  componentDidUpdate(prevProps) {
    const { songUrl, isPlaying } = this.props;
    if (prevProps.songUrl !== songUrl) {
      this.playAudio();
    } else if (prevProps.isPlaying && !isPlaying) {
      this.pauseAudio();
    } else if (!prevProps.isPlaying && isPlaying) {
      this.playAudio();
    }
  }

  componentWillUnmount() {
    if (this.audio) {
      this.audio.removeEventListener("timeupdate", this.timeUpdate, false);
      this.audio.removeEventListener("ended", this.pauseAudio, false);
      this.audio.pause();
    }
  }

  playAudio = () => {
    const { playSong, songUrl } = this.props;
    if (this.audio === undefined) {
      this.audio = new Audio(songUrl);
      playSong();
      this.audio.play();
    } else if (this.audio.src === songUrl && this.audio.paused) {
      playSong();
      this.audio.play();
    } else if (this.audio.src !== songUrl){
      this.pauseAudio();
      this.audio = new Audio(songUrl);
      this.audio.play();
      playSong();
    }
    this.audio.addEventListener("timeupdate", this.timeUpdate);
    this.audio.addEventListener("ended", this.pauseAudio);
  };

  pauseAudio = () => {
    if (this.audio) {
      this.props.pauseSong();
      this.audio.pause();
    }
  };

  timeUpdate = () => {
    this.setState({
      audioProgress: (this.audio.currentTime / this.audio.duration) * 100,
      currentTime: Math.trunc(this.audio.currentTime)
    });
  };

  render() {
    const { isPlaying } = this.props;
    const { currentTime, audioProgress } = this.state;
    const formattedTime = currentTime <= 9 ? `0${currentTime}` : currentTime;
    return (
      <PlayerWrapper>
        {isPlaying ? (
          <PauseButton onClick={() => this.pauseAudio()} />
        ) : (
          <PlayButton onClick={() => this.playAudio()} />
        )}
        <ProgressBar audioProgress={audioProgress}>
          <div className="progressFill"></div>
          <div>
            0:{formattedTime && currentTime ? formattedTime : "00"}/0:30
          </div>
        </ProgressBar>
      </PlayerWrapper>
    );
  }
}

const mapStateToProps = ({ songUrl, isPlaying }) => ({
  songUrl,
  isPlaying
});

const mapDispatchToProps = dispatch => ({
  playSong: () => dispatch(playSong()),
  pauseSong: () => dispatch(pauseSong())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
