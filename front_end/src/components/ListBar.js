import React, {Component} from 'react';

class ListBar extends Component {
  render() {
    // console.log('Im in ListaBat');
    return (
      <div className="barList">
        <h4>Saved Places</h4>
        <p>{this.props.name}</p>
        <img className="barImg" src={this.props.featured_image} alt="image not available"/>
        <br/>
        <p>{this.props.locality}</p>
        <p>{this.props.cuisine}</p>
        <br/>
        <p className="hiddenCords">{this.props.latitude}</p>
        <p className="hiddenCords">{this.props.longitude}</p>
        <button onClick={(e)=> this.props.delete(this.props)}>Delete</button>
      </div>
    )
  }
}

export default ListBar
