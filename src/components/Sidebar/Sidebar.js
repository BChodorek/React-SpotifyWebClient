import React from 'react';
import styled from 'styled-components';
import LogoutButton from 'components/User/LogoutButton';

const StyledContainer = styled.div`
  background-color: ${({ theme }) => theme.black};
  grid-area: sidebar;
  grid-column: span 1;
`;
const StyledGrid = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
`;

const StyledList = styled.ul`
  list-style: none;
  width: 12vw;
  height: 50rem;
  overflow: hidden;
  overflow-y: scroll;
`;

const Sidebar = ({ playlists }) => {
  return (
    <StyledContainer>
      <LogoutButton />
      <StyledGrid>
        <StyledList>
          {playlists.map(playlist => (
            <li key={playlist.id}>{playlist.name}</li>
          ))}
        </StyledList>
      </StyledGrid>
    </StyledContainer>
  );
};

export default Sidebar;
