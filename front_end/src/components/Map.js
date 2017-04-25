import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import Places from './Places';

class Map extends Component {

  renderMarkers(){
    console.log('HERE!')
    if(this.props.locations){
      return this.props.locations.map((loc) => {
        return (
          <Places lat= {loc.restaurant.location.latitude} lng = {loc.restaurant.location.longitude} name={loc.restaurant.name}/>
        )
      })
    }
  }
  /*create a function renderMarkers that returns an array of place components

  maps through prop "location"
    returns an array of location

  renderMarkers(){
    return this.props.locations.map((location) => {
      return (
        <Place lat= location.lat lng = location.lng />
      )
    })
  }
  */
//how would I implement this into places.
  render(){
    return (
      <GoogleMapReact
        defaultCenter={{lat:40.742164, lng:-73.989894}}
        defaultZoom={15}>
        { this.renderMarkers() }
      </GoogleMapReact>
    );
  }//end of render
}//end of map class

export default Map;
