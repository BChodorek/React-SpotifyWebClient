import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Player extends Component {
  componentDidUpdate(prevProps) {
    const { url } = this.props;
    if (prevProps.url !== url) {
      this.audio.play();
    }
  }

  render() {
    const { url } = this.props;
    return (
      <div>
        <audio src={url} ref={ref => (this.audio = ref)}></audio>
      </div>
    );
  }
}

const mapStateToProps = ({ url }) => ({
  url,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Player);
