import React, { Component } from 'react';
import styled from 'styled-components';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setToken } from 'actions/AuthActions';
import { loginRoute } from '../authConfig';
import Button from 'components/utilities/Button';
import spotify_logo from 'assets/spotify_logo.svg';

const StyledWrapper = styled.div`
  margin-top: 25vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StyledButton = styled(Button)`
  border-color: ${({ theme }) => theme.activeGreen};
  background-color: ${({ theme }) => theme.activeGreen};
  color: #fff;
`;
const StyledLogo = styled.img`
  width: 7rem;
  padding: 1rem;
`;

const StyledLink = styled.a`
  font-size: inherit;
  color: inherit;
  text-decoration: inherit;
  margin: 0;
  padding: 0;
`;

const hash = window.location.hash
  .substring(1)
  .split('&')
  .reduce((initial, item) => {
    if (item) {
      const parts = item.split('=');
      initial[parts[0]] = decodeURIComponent(parts[1]);
    }
    return initial;
  }, {});

class LoginPage extends Component {
  componentDidMount() {
    const { setToken } = this.props;
    if (hash.access_token) {
      setToken(hash.access_token);
      hash.access_token = '';
    }
  }

  render() {
    const { token } = this.props;
    return (
      <>
        {!token && (
          <StyledWrapper>
            <StyledLogo src={spotify_logo} />
            <StyledButton>
              <StyledLink href={loginRoute}>Login with Spotify</StyledLink>
            </StyledButton>
          </StyledWrapper>
        )}
        {token && <Redirect to="/home" />}
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
)(LoginPage);
