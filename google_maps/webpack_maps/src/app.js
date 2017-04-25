import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Map from './components/Map';
import Places from './components/Places';

class App extends Component {
  render(){
      const location = {
        lat:40.7575285,
        lng:-73.9884469
      }
    return (
      <div style = {{width:300, height:600, background:'red'}}>
        this is the react app!
          <div style = {{width:300, height:600}}>
            <Map center={location} />
          </div>
        <div>
          <Places />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
