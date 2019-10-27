import React, { Component } from 'react';
import styled from 'styled-components';
import Card from './Card';

const StyledContainer = styled.div`
  padding: 2rem;
`;

const StyledGrid = styled.div`
  text-align: center;
  margin-bottom: 8rem;
  display: grid;
  grid-gap: 1.6rem;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  @media (max-width: 411px) {
    grid-template-columns: repeat(auto-fit, minmax(13rem, auto));
    grid-gap: 1rem;
  }
`;

const StyledHeading = styled.h1`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 3rem;
  margin: 2rem 0;
`;

class PlaylistGrid extends Component {
  componentDidMount() {}

  render() {
    const { recentTracks } = this.props;
    const newestPlaylists = this.props.playlists
      .slice(0, 7)
      .map(playlist => <Card {...playlist} imageUrl={playlist.images[0].url} key={playlist.id} />);
    return (
      <StyledContainer>
        <StyledHeading>Your recently played:</StyledHeading>
        <StyledGrid>
          {recentTracks.map(recentTrack => (
            <Card
              name={recentTrack.track.name}
              imageUrl={recentTrack.track.album.images[0].url}
              key={recentTrack.track.id}
            />
          ))}
        </StyledGrid>
        <StyledHeading>Your newest playlists:</StyledHeading>
        <StyledGrid>{newestPlaylists}</StyledGrid>
      </StyledContainer>
    );
  }
}

export default PlaylistGrid;
