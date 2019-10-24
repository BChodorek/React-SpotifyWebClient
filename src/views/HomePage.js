import React, { Component } from 'react';
import styled from 'styled-components';
import UserInfo from 'components/User/UserInfo';
import PlaylistGrid from 'components/Playlists/PlaylistGrid';
import LogoutButton from 'components/User/LogoutButton';
import { connect } from 'react-redux';

const StyledWrapper = styled.div`
  width: 75%;
  margin: auto;
`;

const HomePage = ({ token }) => {
  return (
    <>
      <StyledWrapper>
        <LogoutButton />
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
