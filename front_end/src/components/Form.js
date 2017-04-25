import React, { Component } from 'react';


class Form extends Component {
  constructor(){
    super();
    this.state = {
      bar: ''
    }
    // console.log("line10 constructor",this.state.bar);
  }

  handleChange(e){
    console.log(e.target.value);
    this.setState({bar: e.target.value});
  }//end of handleChange
  handleSubmit(e){
    e.preventDefault();
    const bar = this.state.bar;
    this.props.barInfo(bar);
    this.setState({bar: ''});
  }//endofhandlesubmit

  render(){
    return(
      <div className="barForm">
        <form className="hitMe" onSubmit={(e)=> this.handleSubmit(e)}>
          <label className="searchB">
            Eat Drink Party:

          </label>
          <input className="searchButton" type="submit" value="Hit Me" />
        </form>
      </div>
    )
  }
}//end of class form

export default Form;
