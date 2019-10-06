import React, { Component } from 'react';
import UserInfo from 'components/User';
import AllPlaylists from 'components/Playlists';
import { connect } from 'react-redux';
import { setToken } from 'actions/AuthActions';

class HomePage extends Component {
  render() {
    const { token } = this.props;
    return (
      <>
        <UserInfo token={token} />
        <AllPlaylists token={token} />
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
