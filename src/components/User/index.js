import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from 'actions/UserActions';

class UserInfo extends Component {
  componentDidMount() {
    const { getUser, token } = this.props;
    getUser(token);
  }

  render() {
    const { userName, userImg } = this.props;
    return (
      <>
        <img src={userImg} alt="avatar" />
        <h1>{userName}</h1>
      </>
    );
  }
}

const mapStateToProps = ({ userName, userImg }) => ({
  userName,
  userImg,
});

const mapDispatchToProps = dispatch => ({
  getUser: token => dispatch(getUser(token)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserInfo);
