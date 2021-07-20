import React from 'react';

import HornedBeast from './HornedBeast.js';
import CardColumns from 'react-bootstrap/CardColumns'


class Main extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render() {
    // main component should pass props for the title, image and description to each horned beast element
    // renders beast data from json file
    let beastsToRender = this.props.data.map((beast, i) => 
      <HornedBeast 
        handleShowModal={this.props.handleShowModal}
        key={i}
        beast={beast}
        />
      );

    return (
      <main>
        <CardColumns>
        {beastsToRender}
        </CardColumns>
      </main>
    )
  }
}

export default Main;  