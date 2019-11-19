import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import playButton from 'assets/play-button.svg';

const PlayerWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 10vh;
  padding: 3rem;
  background-color: ${({ theme }) => theme.black};
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  margin-left: 25rem;
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

const ProgressBar = styled.div`
  width: 70%;
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
`;

export class Player extends Component {
  state = {
    audioProgress: 0,
  };

  componentDidUpdate(prevProps) {
    const { url } = this.props;
    if (prevProps.url !== url) {
      this.audio.play();
    }
  }

  timeUpdate = () => {
    this.setState({ audioProgress: (this.audio.currentTime / this.audio.duration) * 100 });
  };

  render() {
    const { url } = this.props;
    return (
      <PlayerWrapper>
        <audio onTimeUpdate={this.timeUpdate} src={url} ref={ref => (this.audio = ref)}></audio>
        <PlayButton />
        <ProgressBar audioProgress={this.state.audioProgress}>
          <div className="progressFill"></div>
        </ProgressBar>
      </PlayerWrapper>
    );
  }
}

const mapStateToProps = ({ url }) => ({
  url,
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Player);
