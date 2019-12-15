import React, { Component } from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import styled from "styled-components";
import LogoutButton from "components/User/LogoutButton";
import spotify_logo from "assets/spotify_logo.svg";

const StyledButton = styled.p`
  transition: 0.52s ease;
  @media (max-width: 767px) {
    position: fixed;
    top: 1rem;
    left: 1rem;
    width: 2rem;
    height: 2rem;
    padding: 1.5rem;
    border-radius: 100%;
    border: 0.2rem solid ${({ theme }) => theme.white};
    z-index: 1000;

    &.opened {
      padding: 1rem;
      border: none;
      font-weight: ${({ theme }) => theme.fontWeight.light};
      font-size: ${({ theme }) => theme.fontSize.big};
    }
  }
`;

const StyledBar = styled.div`
  background-color: ${({ theme }) => theme.black};
  position: fixed;
  top: 0;
  width: 25rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: ease-in-out 0.6s;
  z-index: 999;

  @media (max-width: 767px) {
    transform: translateX(-50rem);
    &.active {
      transform: translateX(0px);
      width: 100vw;
      opacity: 0.99;
    }
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  &:hover {
    color: ${({ theme }) => theme.activeGreen};
  }
`;

const SpotifyLogo = styled.div`
  background: url(${spotify_logo});
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: center;
  width: 10rem;
  height: 10rem;
  margin: 1rem;
  @media (max-width: 767px) {
    width: 8rem;
    height: 6rem;
  }
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

  @media (max-width: 767px) {
    width: 100vw;
    font-size: 1.6rem;
    height: 80vh;
  }
`;

const ListElement = styled.li`
  padding: 0.75rem;

`;




class Sidebar extends Component {
  state = {
    visible: false
  };

  handleClick = () => {
    this.setState({
      visible: !this.state.visible
    });
  };

  render() {
    const { playlists } = this.props;
    return (
      <>
        <StyledButton
          onClick={this.handleClick}
          className={this.state.visible ? "opened" : null}
        >
          {this.state.visible ? "x" : null}
        </StyledButton>

        <StyledBar className={this.state.visible ? "active" : null}>
          <StyledLink to="/home">
            <SpotifyLogo />
            <StyledTitle>
              Spotify <span>&copy;</span>
            </StyledTitle>
          </StyledLink>
          <StyledList>
            {playlists.map(playlist => (
              <ListElement key={playlist.id}><StyledLink to={`/home/${playlist.id}`}>{playlist.name}</StyledLink></ListElement>
            ))}
          </StyledList>
          <LogoutButton />
        </StyledBar>
      </>
    );
  }
}

const mapStateToProps = ({playlists}) => ({
  playlists
})

export default connect(mapStateToProps)(Sidebar);
