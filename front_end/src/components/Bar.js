import React, {Component} from 'react';

class Bar extends Component {
  render() {
    return(
      <section className="barAoe">
        <h3>{this.props.bar.name}</h3>
        <img className="barImg" src={this.props.bar.image} alt="image not available" />
        <p>{this.props.bar.cuisine}</p>
        <p>{this.props.bar.location}</p>
        <p className="hiddenCords">{this.props.bar.lat}</p>
        <p className="hiddenCords">{this.props.bar.lng}</p>
        <button onClick={(e)=> this.props.save(this.props.bar)}>Save</button>
        </section>
    )
  }
}

export default Bar;
