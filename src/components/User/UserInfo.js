import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getUser } from 'actions/UserActions';
import Button from 'components/utilities/Button';

const StyledWrapper = styled.div`
  grid-area: userinfo;
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledImg = styled.img`
  max-width: 12rem;
  border-radius: 50%;
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

class UserInfo extends Component {
  componentDidMount() {
    const { getUser, token } = this.props;
    getUser(token);
  }

  render() {
    const { userName, userImg } = this.props;
    return (
      <>
        <StyledWrapper>
          <StyledImg src={userImg} alt="avatar" />
          <h1>{userName}</h1>
        </StyledWrapper>
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
