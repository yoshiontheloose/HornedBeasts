import React from 'react';

import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import './HornedBeast.css'

class HornedBeast extends React.Component {

  // adding the state for user interaction with votes
  constructor(props){
    super(props);
    this.state = {
      timesClicked: 0,
      showFavorite: false,
    }
  }

  addClick = () => {
    this.setState({
      timesClicked: this.state.timesClicked + 1,
    })
  }

  favorite = () => {
    this.setState({
      showFavorite: true,
    })
  }

  render() {
    return (
      <CardColumns>
        <Card className="text-center" border="info" style={{ width: '18rem' }}>


          <Card.Title>{this.props.title}</Card.Title>
          <Card.Img 
            src={this.props.imageUrl}
            alt={this.props.description}
            title={this.props.title}
            onClick={this.addClick}
            />
          <Card.Text>{this.state.timesClicked ? this.state.timesClicked + ':heart:' : ''}</Card.Text>  
          <Card.Text>{this.props.description}</Card.Text>
        </Card>
      </CardColumns>
    )
  }
}

export default HornedBeast;

