import React, { Component } from 'react';
import styled from 'styled-components';
import UserInfo from 'components/User/UserInfo';
import PlaylistGrid from 'components/Playlists/PlaylistGrid';
import { connect } from 'react-redux';
import Sidebar from '../components/Sidebar/Sidebar';
import { getUser } from 'actions/UserActions';
import { getAllPlaylists } from 'actions/PlaylistsActions';
import { getRecentlyPlayed } from 'actions/PlaylistsActions';
import { playSong } from 'actions/PlayerActions';

const StyledWrapper = styled.div``;
const StyledFlex = styled.div`
  grid-column-start: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;
const StyledHeading = styled.h2`
  grid-column: 1/-1;
  margin-top: 20rem;
  text-align: center;
  font-size: 5rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

class HomePage extends Component {
  componentDidMount() {
    const { token, getAllPlaylists, getUser, getRecentlyPlayed } = this.props;
    getUser(token);
    getAllPlaylists(token);
    getRecentlyPlayed(token);
  }

  render() {
    const { userName, userImg, playlists, recentTracks, playSong, isPlaying, songId } = this.props;
    return (
      <>
        {playlists && recentTracks ? (
          <StyledWrapper>
            <Sidebar playlists={playlists} />
            <StyledFlex>
              <UserInfo userImg={userImg} userName={userName} />
              <PlaylistGrid
                playlists={playlists}
                recentTracks={recentTracks}
                playSong={playSong}
                isPlaying={isPlaying}
                songId={songId}
              />
            </StyledFlex>
          </StyledWrapper>
        ) : (
          <StyledHeading>Loading...</StyledHeading>
        )}
      </>
    );
  }
}

const mapStateToProps = ({
  token,
  playlists,
  userName,
  userImg,
  recentTracks,
  isPlaying,
  songId,
}) => ({
  token,
  userName,
  userImg,
  playlists,
  recentTracks,
  isPlaying,
  songId,
});

const mapDispatchToProps = dispatch => ({
  getUser: token => dispatch(getUser(token)),
  getAllPlaylists: token => dispatch(getAllPlaylists(token)),
  getRecentlyPlayed: token => dispatch(getRecentlyPlayed(token)),
  playSong: song => dispatch(playSong(song)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
