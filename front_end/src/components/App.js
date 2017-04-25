import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import Form from './Form';
import ListBar from './ListBar';
import Bar from './Bar';
import GoogleMapReact from 'google-map-react';
import Map from './Map';
import Navbar from './Navbar';
// import Barlist from './Barlist';



class App extends Component {
  constructor(){
    super();
    this.state={
      bars:[],
      result: null,
      lBar: ''
    }//end of state objects
  }//end of app constructor
  componentDidMount(){
    const self = this;
    //using self to invoke this inside the .then function.
    //grabbing information from the express server
    axios({
      method: 'get',
      url:'http://localhost:9000/bars'
    })
    .then(function(response){
      // console.log("componentDidMount ===> ", response);
      const bars = response.data;
      self.setState({lBar:bars});
      // console.log("componentDidMount", self.state.lBar);
    })
    .catch(function(error){
      if(error){
        console.log("error", error);
      }
    })
  }//end of componentDidMount
  handlebarInfo(bar){
    // console.log(bar);

    const self = this;
    //line 50 put a & instead of , incase case it doenst work.
    axios({
      method: 'get',
      url:`https://developers.zomato.com/api/v2.1/search?entity_id=280&entity_type=city&lat=40.742164&lon=-73.989894&radius=400&category=3&sort=real_distance&${bar}`,headers: {'user-key': 'c6dc40392af08897eafe323966c8dcf1'}
    })
    // name, locality, latitude, longitude, featured_image, cuisine
      .then(function(response){
        // console.log(response.data.restaurants);
        const bars = response.data.restaurants;
        self.setState({bars: bars});
        const result = response.data;
        const bar = {};
        // bar.name = result.Name;
        // // bar.location.locality = result.location.locality;
        // // bar.location.latitude = result.location.latitude;
        // // bar.location.longitude = result.location.longitude;
        // // bar.featured_image = result.Featured_image;
        // // bar.cuisine = result.Cuisine;
        // self.setState({bars: self.state.bars.concat([bar])});

      })
      .catch(function (error){
        if(error) {
          console.log("error", error);
        }
      })
      // console.log("bar:",this.state.bar);
    }
    updatelBar(){
      const self = this;
      axios({
        method: 'get',
        url: 'http://localhost:9000/bars'
      })
        .then(function(response){
          const bars = response.data;
          self.setState({lBar: bars});
        })
        .catch(function(error) {
          if(error){
            console.log("error", error);
          }
        })
    }//end of updatelbar
    savelBar(bar) {
      const self = this;
      axios({
        method: 'post',
        url: 'http://localhost:9000/bars',
        data: bar
      })
      .then(function(response){
        console.log("axios post", response);
        self.updatelBar();
      })
      .catch(function(error){
        if(error){
          console.log("error", error);
        }
      })
      this.setState({bars: []});
    }//endofsavelbar
//something needs to be binded here bar needs to be a file
  renderBars(bars){
    return bars.map((bar, index)=>{
      // console.log("renderBars", bar.restaurant.name, bar.restaurant.location.locality, bar.restaurant.featured_image);
      // name, locality, latitude, longitude, featured_image, cuisine
      const props = {
        image: bar.restaurant.featured_image,
        name: bar.restaurant.name,
        location: bar.restaurant.location.locality,
        cuisine: bar.restaurant.cuisine,
        lat: bar.restaurant.location.latitude,
        lng: bar.restaurant.location.longitude

      }

    return <Bar key={index} bar={{image: bar.restaurant.featured_image, name:bar.restaurant.name, location: bar.restaurant.location.locality,
      cuisine: bar.restaurant.cuisines,
      lat: bar.restaurant.location.latitude,
      lng: bar.restaurant.location.longitude  }}   save={this.savelBar.bind(this)}/>
      // console.log(bar);
      });
    }//endofrenderbars

    // Mapmarkers(bars){
    //   // return bars.map((bar, index)=>{
    //   //   console.log("mapmarkers=========", lat);
    //   //   // name, locality, latitude, longitude, featured_image, cuisine
    //   //   const props = {
    //   //     lat: bar.restaurant.location.latitude,
    //   //     lng: bar.restaurant.location.longitude
    //   //   }
    //   //
    //   // return <Map key={index} barLat={
    //   //   lat: bar.restaurant.location.latitude} barLng={lng: bar.restaurant.location.longitude }/>
    //   //
    //   //   });
    //   }//endofMapmarkers

  deletelBar(bar) {
    const self = this;
    axios({
      method: 'delete',
      url: 'http://localhost:9000/bars',
      data: bar
    })
    .then(function(response){
      self.updatelBar();
    })
    .catch(function(error){
      if(error){
        console.log("error", error);
      }
    })
  }

currentBars(bars){
  // console.log("currentBars()", bars);
  if(!bars) {return
    <p> Eat Drink Party soon..</p>
  }
  return bars.map((bar,index)=>{
    // console.log("currentBars", bar);

    return <ListBar key={index} id={bar.id} name={bar.name} locality={bar.locality} latitude={bar.latitude} longitude={bar.longitude} featured_image={bar.featured_image} cuisine={bar.cuisine}
      delete={this.deletelBar.bind(this)}
      {...this.props}/>

  });
  // name, locality, latitude, longitude, featured_image, cuisine


}
    render() {

      /* set locations = to this.state.bars (array of objects)*/


      return (
        <div className="App">
          <Navbar />
          <div className="container">
              <div className="gMap">
                <Map  locations={this.state.bars}  />
              </div>
              <div className="barsearch">
                <Form barInfo={this.handlebarInfo.bind(this)}/>
                {this.renderBars(this.state.bars)}
              </div>
              <div className="currentbars">
                {this.currentBars(this.state.lBar)}
              </div>
            </div>
        </div>
      );
    }
  }//end of class app

export default App;
