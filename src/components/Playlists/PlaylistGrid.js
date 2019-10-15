import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PlaylistCard from './PlaylistCard';
import { getAllPlaylists } from 'actions/PlaylistsActions';

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 1rem;
`;

export class PlaylistGrid extends Component {
  componentDidMount() {
    const { getAllPlaylists, token } = this.props;
    getAllPlaylists(token);
  }

  render() {
    const { playlists } = this.props;
    return (
      <>
        <h3>Your newest playlists:</h3>
        <StyledGrid>
          {playlists && playlists.map(playlist => <PlaylistCard {...playlist} key={playlist.id} />)}
        </StyledGrid>
      </>
    );
  }
}

const mapStateToProps = ({ playlists }) => ({
  playlists,
});

const mapDispatchToProps = dispatch => ({
  getAllPlaylists: token => dispatch(getAllPlaylists(token)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlaylistGrid);
