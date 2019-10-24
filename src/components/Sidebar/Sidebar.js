import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const StyledContainer = styled.div`
  background-color: ${({ theme }) => theme.black};
  grid-area: sidebar;
`;
const StyledGrid = styled.div`
  position: fixed;
`;

const StyledList = styled.ul`
  list-style: none;
  height: 50rem;
  overflow: hidden;
  overflow-y: scroll;
`;

class Sidebar extends Component {
  render() {
    const { playlists } = this.props;
    return (
      <StyledContainer>
        <StyledGrid>
          <StyledList>
            {playlists && playlists.map(playlist => <li key={playlist.id}>{playlist.name}</li>)}
          </StyledList>
        </StyledGrid>
      </StyledContainer>
    );
  }
}

const mapStateToProps = ({ playlists }) => ({
  playlists,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar);
