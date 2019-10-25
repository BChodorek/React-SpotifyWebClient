import React, { Component } from 'react';
import styled from 'styled-components';
import PlaylistCard from './PlaylistCard';

const StyledContainer = styled.div`
  grid-area: playlistgrid;
  padding: 4rem;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-gap: 0.4rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
`;

const StyledHeading = styled.h1`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 3rem;
`;

class PlaylistGrid extends Component {
  componentDidMount() {}

  render() {
    const { recentTracks } = this.props;
    const newestPlaylists = this.props.playlists
      .slice(0, 7)
      .map(playlist => (
        <PlaylistCard {...playlist} imageUrl={playlist.images[0].url} key={playlist.id} />
      ));
    console.log(...recentTracks);
    return (
      <StyledContainer>
        <StyledHeading>Your recently played:</StyledHeading>
        <StyledGrid>
          {recentTracks.map(recentTrack => (
            <PlaylistCard
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
