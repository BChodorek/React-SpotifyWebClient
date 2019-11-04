import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import UserInfo from 'components/User/UserInfo';
import PlaylistGrid from 'components/Playlists/PlaylistGrid';
import Sidebar from 'components/Sidebar/Sidebar';
import Player from 'components/Player/Player';
import { getUser } from 'actions/UserActions';
import { getAllPlaylists } from 'actions/PlaylistsActions';
import { getRecentlyPlayed } from 'actions/PlaylistsActions';

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
    const { userName, userImg, playlists, recentTracks } = this.props;
    return (
      <>
        {playlists && recentTracks ? (
          <StyledWrapper>
            <Sidebar playlists={playlists} />
            <StyledFlex>
              <UserInfo userImg={userImg} userName={userName} />
              <PlaylistGrid playlists={playlists} recentTracks={recentTracks} />
            </StyledFlex>
            <Player />
          </StyledWrapper>
        ) : (
          <StyledHeading>Loading...</StyledHeading>
        )}
      </>
    );
  }
}

const mapStateToProps = ({ token, playlists, userName, userImg, recentTracks }) => ({
  token,
  userName,
  userImg,
  playlists,
  recentTracks,
});

const mapDispatchToProps = dispatch => ({
  getUser: token => dispatch(getUser(token)),
  getAllPlaylists: token => dispatch(getAllPlaylists(token)),
  getRecentlyPlayed: token => dispatch(getRecentlyPlayed(token)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
