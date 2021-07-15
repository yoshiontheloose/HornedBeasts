import React from 'react';

import './HornedBeast.css'

class HornedBeast extends React.Component {

  // Add clicker
  constructor(props){
    super(props);
    this.state = {
      timesClicked: 0,
    }
  }


  render() {
    return (
      <article className="beast">
        <h2>{this.props.title}</h2>
        <img 
          src={this.props.imageUrl}
          alt={this.props.description}
          title={this.props.title}
          />
        <p>{this.state.timesClicked} available</p>  
        <p>{this.props.description}</p>
      </article>
    )
  }
}

export default HornedBeast;

