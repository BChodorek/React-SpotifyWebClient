import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components';
import { connect } from 'react-redux'

const StyledWrapper = styled.div`
  padding-top:1rem;
  margin-left: 25rem;
  background-color:rgba(0, 0, 0, 0.7);
  @media (max-width: 767px) {
    margin-left: 0;
  }
`;
const FlexWrapper = styled.div`
  display: flex;
  flex-wrap:no-wrap;
  @media (max-width: 767px) {
    flex-wrap:wrap;
    justify-content: center;
  }
`;
const InfoWrapper = styled.div`
  flex-basis:50%;
  display:flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 767px) {
  flex-basis:100%;
    align-items: center;
    text-align: center;
    padding-bottom: 2rem;
  }
`;
const PlaylistImage = styled.div`
  width: 20rem;
  height: 20rem;
  margin: 0 2rem 1rem;
  background-image: url(${({url}) => url });
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 767px) {
    width: 15rem;
    height: 15rem;
    }
`;

const PlaylistName = styled.h1`
  font-weight: ${({theme}) => theme.fontWeight.bold};
`;
const Description = styled.p``;

const Owner = styled.p`
  padding-top:2rem;
`;

const StyledTrackList = styled.ul`

  margin-bottom: 10vh;
  padding: 2rem;
  @media (max-width: 767px) {
    padding:0.6rem;
  }
`;

const StyledHeader = styled.div`
  display: flex;
  flex-direction:row;
  justify-content: center;
  text-align:center;
  margin-bottom:1em;
  color: ${({theme}) => theme.lightGrey};
  font-size: ${({theme}) => theme.fontSize.small};
  & p{
  flex-basis: 33.3%;
    }
`;

const StyledListItem = styled.li`
  display: flex;
  flex-direction:row;
  flex-wrap: no-wrap;
  text-align:center;
  align-items:center;
  padding: 1em;
  border-top: 1px rgba(255,255,255, 0.2) solid;
  & p {
    flex-basis:100%;
  }
  @media (max-width: 767px) {
    font-size: ${({theme}) => theme.fontSize.small}
  }
`;

class PlaylistDetails extends Component {

  state = {
    playlistName:null,
    description: null,
    image: null,
    owner: null,
    album: null,
    tracks: null,
  }

  getPlaylistDetails = (id, token) => {
    axios
      .get(`https://api.spotify.com/v1/playlists/${id}`, {
        headers: { Authorization: 'Bearer ' + token },
      })
      .then(({data}) => this.setState({
          playlistName: data.name,
          description: data.description,
          image: data.images[0].url,
          owner: data.owner.display_name,
          tracks: data.tracks.items,
      }))
      .catch(err => err);
  }

  componentDidMount() {
    const {match: {params},token} = this.props;
    this.getPlaylistDetails(params.id, token)
  }

  componentDidUpdate(prevProps) {
    const {match: {params},token} = this.props;
    if(prevProps.match.params.id!== params.id){
      this.getPlaylistDetails(params.id, token)
    }
  }

render() {
  const {tracks} = this.state;
    return (
      <StyledWrapper>
        <FlexWrapper>
          <PlaylistImage url={this.state.image}/>
        <InfoWrapper>
          <PlaylistName>{this.state.playlistName}</PlaylistName>
          <Description>{this.state.description}</Description>
          <Owner>Created by: <b>{this.state.owner}</b></Owner>
        </InfoWrapper>
        </FlexWrapper>
        <StyledTrackList>
          <StyledHeader><p>Title</p><p>Author</p> <p>Album</p></StyledHeader>
          {tracks && tracks.map( item => {
            return <StyledListItem key={item.track.id}><p>{item.track.name}</p><p>{item.track.artists[0].name}</p><p>{item.track.album.name}</p></StyledListItem>
          })}
        </StyledTrackList>
      </StyledWrapper>
    )
  }
}

const mapStateToProps = ({token}) => ({
  token
})

export default connect(mapStateToProps)(PlaylistDetails);