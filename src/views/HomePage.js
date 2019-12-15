import React, { Component } from 'react';
import {connect} from 'react-redux'
import styled from 'styled-components';
import Sidebar from 'components/Sidebar/Sidebar'
import Player from 'components/Player/Player'
import MainPage from 'views/MainPage'
import { getAllPlaylists } from 'actions/PlaylistsActions';

const StyledHeading = styled.h2`
  margin-top: 20rem;
  text-align: center;
  font-size: 5rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

class HomePage extends Component {
  componentDidMount() {
    const { token, getAllPlaylists } = this.props;
    getAllPlaylists(token);
  }
  render() {
    const {  playlists } = this.props;
    return (
      <>
        {playlists ? (
          <>
            <Sidebar />
            <Player />
            <MainPage/>
          </>
        ) : (
          <StyledHeading>Loading...</StyledHeading>
        )}
      </>
    );
  }
}

const mapStateToProps = ({ token, playlists}) => ({
  token,
  playlists,
});

const mapDispatchToProps = dispatch => ({
  getAllPlaylists: token => dispatch(getAllPlaylists(token)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
