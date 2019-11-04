import React, { Component } from 'react';
import styled from 'styled-components';
<<<<<<< Updated upstream
import UserInfo from 'components/User';
import AllPlaylists from 'components/Playlists';
import { connect } from 'react-redux';
import { setToken } from 'actions/AuthActions';
=======
import Sidebar from 'components/Sidebar/Sidebar';
import UserInfo from 'components/User/UserInfo';
import PlaylistGrid from 'components/Playlists/PlaylistGrid';
import Sidebar from 'components/Sidebar/Sidebar';
import Player from 'components/Player/Player';
import { getUser } from 'actions/UserActions';
import { getAllPlaylists } from 'actions/PlaylistsActions';
import { getRecentlyPlayed } from 'actions/PlaylistsActions';
>>>>>>> Stashed changes

const StyledWrapper = styled.div`
  width: 75%;
  margin: auto;
`;

<<<<<<< Updated upstream
class HomePage extends Component {
<<<<<<< Updated upstream
=======
  componentDidMount() {
    const { token, getAllPlaylists, getUser, getRecentlyPlayed } = this.props;
    getUser(token);
    getAllPlaylists(token);
    getRecentlyPlayed(token);
  }
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
  render() {
    const { token } = this.props;
    return (
      <>
        <StyledWrapper>
          <UserInfo token={token} />
          <AllPlaylists token={token} />
        </StyledWrapper>
      </>
    );
  }
}

const mapStateToProps = ({ token }) => ({
  token,
});

const mapDispatchToProps = dispatch => ({
  setToken: token => dispatch(setToken(token)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
