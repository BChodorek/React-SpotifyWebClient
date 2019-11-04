import React, { Component } from 'react';
import styled from 'styled-components';
import Card from './Card';

const StyledContainer = styled.div`
  padding: 2rem;
  margin-left: 25rem;
  @media (max-width: 767px) {
    margin-left: 0;
  }
`;

const StyledGrid = styled.div`
  justify-content: stretch;
  margin-bottom: 8rem;
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
`;
const StyledHeading = styled.h3`
  font-weight: ${({ theme }) => theme.fontWeight.light};
`;

const StyledHeading = styled.h1`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 3rem;
  margin: 3rem 0;
`;

class PlaylistGrid extends Component {
  render() {
    const { recentTracks } = this.props;
    const newestPlaylists = this.props.playlists
      .slice(0, 8)
      .map(playlist => <Card {...playlist} imageUrl={playlist.images[0].url} key={playlist.id} />);
    return (
      <StyledContainer>
        <StyledHeading>Your recently played:</StyledHeading>
        <StyledGrid>
          {recentTracks.map(recentTrack => (
            <Card
              name={recentTrack.track.name}
              imageUrl={recentTrack.track.album.images[0].url}
              previewUrl={recentTrack.track.preview_url}
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
