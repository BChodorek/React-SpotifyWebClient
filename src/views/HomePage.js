import React, { Component } from 'react';
import styled from 'styled-components';
import UserInfo from 'components/User/UserInfo';
import PlaylistGrid from 'components/Playlists/PlaylistGrid';
import { connect } from 'react-redux';
import { setToken } from 'actions/AuthActions';

const StyledWrapper = styled.div`
  width: 75%;
  margin: auto;
`;

class HomePage extends Component {
  render() {
    const { token } = this.props;
    return (
      <>
        <StyledWrapper>
          <UserInfo token={token} />
          <PlaylistGrid token={token} />
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
