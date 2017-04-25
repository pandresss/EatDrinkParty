import React, { Component } from 'react';

import GoogleMapReact from 'google-map-react';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  constructor() {
    super();
    this.state = {
      center: {lat:40.7575285,
      lng:-73.9884469},
      zoom: 15
    };
  }

  render() {
    const mapContainer = <div style={{height: '100%', width: '100%'}}></div>
    return (
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.state.zoom}
      >
      </GoogleMapReact>
    );
  }
}

export default Map;
