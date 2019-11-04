import React, { Component } from 'react';
<<<<<<< HEAD
import styled from 'styled-components';
<<<<<<< Updated upstream
import UserInfo from 'components/User';
import AllPlaylists from 'components/Playlists';
import { connect } from 'react-redux';
import { setToken } from 'actions/AuthActions';
=======
import Sidebar from 'components/Sidebar/Sidebar';
=======
import { connect } from 'react-redux';
import styled from 'styled-components';
>>>>>>> 30df226a156b43f28b8d4dea001f64add5e655b2
import UserInfo from 'components/User/UserInfo';
import PlaylistGrid from 'components/Playlists/PlaylistGrid';
import Sidebar from 'components/Sidebar/Sidebar';
import Player from 'components/Player/Player';
import { getUser } from 'actions/UserActions';
import { getAllPlaylists } from 'actions/PlaylistsActions';
import { getRecentlyPlayed } from 'actions/PlaylistsActions';
<<<<<<< HEAD
>>>>>>> Stashed changes
=======
>>>>>>> 30df226a156b43f28b8d4dea001f64add5e655b2

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

<<<<<<< Updated upstream
class HomePage extends Component {
<<<<<<< HEAD
<<<<<<< Updated upstream
=======
=======
>>>>>>> 30df226a156b43f28b8d4dea001f64add5e655b2
  componentDidMount() {
    const { token, getAllPlaylists, getUser, getRecentlyPlayed } = this.props;
    getUser(token);
    getAllPlaylists(token);
    getRecentlyPlayed(token);
  }
<<<<<<< HEAD
=======
const HomePage = ({ token }) => {
  return (
    <>
      <StyledWrapper>
        <LogoutButton />
        <Sidebar />
        <UserInfo token={token} />
        <PlaylistGrid token={token} />
      </StyledWrapper>
    </>
  );
};
>>>>>>> Stashed changes

>>>>>>> Stashed changes
=======

>>>>>>> 30df226a156b43f28b8d4dea001f64add5e655b2
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
