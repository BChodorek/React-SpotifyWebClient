import React, { Component } from 'react';
import { connect } from 'react-redux';

export class AllPlaylists extends Component {
  componentDidMount() {
    const { getAllPlaylists } = this.props;
  }

  render() {
    return <div></div>;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AllPlaylists);
