import React from 'react';

import HornedBeast from './HornedBeast.js';
import CardColumns from 'react-bootstrap/CardColumns'
import Form from 'react-bootstrap/Form'


class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      gallery: this.props.data,
    }
  }

  // event handler
  handleChange = e => {
    // gallery is all of the beast data
    let gallery = this.props.data

    // The event target is the value in Form Control
    // parseInt turns those event targets into numbers
    let numHorns = parseInt(e.target.value);
    console.log(numHorns);
    // if numHorns is true, gallery will be the following filtered gallery
    // the gallery filters through the beast data to get # of horns,
    // beast.horns is strictly equal to numHorns. 
    // if numHorns is false (not a number) then the gallery is not filtered
    if (numHorns){
      gallery = gallery.filter(beast => beast.horns === numHorns)
    }
    // changed data must be set to state
    // updates line 12, this.props.data is coming from app.js
    this.setState({
      gallery: gallery,
    })
  }

  render() {
    // main component should pass props for the title, image and description to each horned beast element
    // renders beast data from json file
    let beastsToRender = this.state.gallery.map((beast, i) =>
      <HornedBeast
        handleShowModal={this.props.handleShowModal}
        key={i}
        beast={beast}
      />
    );
    
    return (
      <main>
        <Form>
          <Form.Group>
            <Form.Label>View beasts by horn number</Form.Label>
            <Form.Control as="select" onChange={this.handleChange}>
              <option value="">All</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="100">100</option>
            </Form.Control>
          </Form.Group>
        </Form>
        <CardColumns>
          {beastsToRender}
        </CardColumns>
      </main>
    )
  }
}

export default Main;