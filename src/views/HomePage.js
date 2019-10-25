import React, { Component } from 'react';
import styled from 'styled-components';
import UserInfo from 'components/User/UserInfo';
import PlaylistGrid from 'components/Playlists/PlaylistGrid';
import { connect } from 'react-redux';
import Sidebar from '../components/Sidebar/Sidebar';
import { getUser } from 'actions/UserActions';
import { getAllPlaylists } from 'actions/PlaylistsActions';
import { getRecentlyPlayed } from 'actions/PlaylistsActions';

const StyledWrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr repeat(3, 2fr);
  grid-template-rows: repeat(auto-fit, minmax(100px, 1fr));
  grid-template-areas:
    'sidebar userinfo userinfo userinfo'
    'sidebar  playlistgrid playlistgrid playlistgrid'
    'sidebar  playlistgrid playlistgrid playlistgrid';
`;

const StyledHeading = styled.h2`
  grid-column: 1/-1;
  text-align: center;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 5rem;
`;

class HomePage extends Component {
  componentDidMount() {
    const { token, getAllPlaylists, getUser, getRecentlyPlayed } = this.props;
    getUser(token);
    getAllPlaylists(token);
    getRecentlyPlayed(token);
  }

  render() {
    const { token, userName, userImg, playlists, recentTracks } = this.props;
    return (
      <>
        <StyledWrapper>
          {playlists && recentTracks ? (
            <>
              <Sidebar playlists={playlists} />
              <UserInfo userImg={userImg} userName={userName} />
              <PlaylistGrid token={token} playlists={playlists} recentTracks={recentTracks} />
            </>
          ) : (
            <StyledHeading>Loading...</StyledHeading>
          )}
        </StyledWrapper>
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
