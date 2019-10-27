import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LogoutButton from 'components/User/LogoutButton';
import Button from 'components/utilities/Button.js';
import spotify_logo from 'assets/spotify_logo.svg';

const StyledButton = styled(Button)`
  @media (max-width: 767px) {
    position: fixed;
    top: 1rem;
    left: 1rem;
    padding: 1rem;
    border-radius: 100%;
    border-color: white;
    z-index: 1000;
  }
`;

const StyledBar = styled.div`
  background-color: ${({ theme }) => theme.black};
  position: fixed;
  width: 25rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  transition: ease-in 0.3s;

  @media (max-width: 767px) {
    display: none;
    width: 0vw;
    &.active {
      display: flex;
      width: 100vw;
      opacity: 0.9;
    }
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
`;

const SpotifyLogo = styled.div`
  background: url(${spotify_logo});
  background-size: 60%;
  background-repeat: no-repeat;
  background-position: center;
  width: 12rem;
  height: 10rem;
`;

const StyledTitle = styled.h3`
  text-align: center;
  color: white;
  text-decoration: none;
  margin-bottom: 2rem;
  span {
    font-weight: ${({ theme }) => theme.fontWeight.light};
    font-size: 1rem;
  }
`;

const StyledList = styled.ul`
  height: 75vh;
  padding: 1.6rem;
  overflow: hidden;
  overflow-y: scroll;
  list-style: none;
`;

const ListElement = styled.li`
  padding: 0.5rem;
  &:hover {
    color: ${({ theme }) => theme.activeGreen};
  }
`;

class Sidebar extends Component {
  state = {
    visible: false,
  };

  handleClick = () => {
    this.setState({
      visible: !this.state.visible,
    });
  };

  render() {
    const { playlists } = this.props;
    return (
      <>
        <StyledButton onClick={this.handleClick}>
          <div className="bar-1"></div>
          <div className="bar-2"></div>
          <div className="bar-3"></div>
        </StyledButton>
        <StyledBar className={this.state.visible ? 'active' : null}>
          <StyledLink to="/home">
            <SpotifyLogo />
            <StyledTitle>
              Spotify <span>&copy;</span>
            </StyledTitle>
          </StyledLink>
          <StyledList>
            {playlists.map(playlist => (
              <ListElement key={playlist.id}>{playlist.name}</ListElement>
            ))}
          </StyledList>
          <LogoutButton />
        </StyledBar>
      </>
    );
  }
}

export default Sidebar;
