import React, { Component } from 'react';
import styled from 'styled-components';
import UserInfo from 'components/User/UserInfo';
import PlaylistGrid from 'components/Playlists/PlaylistGrid';
import LogoutButton from 'components/User/LogoutButton';
import { connect } from 'react-redux';
import Sidebar from '../components/Sidebar/Sidebar';

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr repeat(3, 2fr);
  grid-template-rows: repeat(auto-fill, minmax(100px, 1fr));
  grid-template-areas:
    'sidebar userinfo userinfo userinfo'
    'sidebar  playlistgrid playlistgrid playlistgrid'
    'sidebar  playlistgrid playlistgrid playlistgrid';
`;
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

const mapStateToProps = ({ token }) => ({
  token,
});

export default connect(mapStateToProps)(HomePage);
