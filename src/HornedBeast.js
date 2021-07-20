import React from 'react';

import Card from 'react-bootstrap/Card'
import './HornedBeast.css'

class HornedBeast extends React.Component {

  // adding the state for user interaction with votes
  constructor(props) {
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

    this.props.handleShowModal(this.props.beast);
  }

  favorite = () => {
    this.setState({
      showFavorite: true,
    })
  }

  render() {
    return (
      <Card
        className="text-center"
        border="info"
        style={{ width: '18rem' }}>
        <Card.Title>{this.props.beast.title}</Card.Title>
        <Card.Img
          src={this.props.beast.image_url}
          alt={this.props.beast.description}
          title={this.props.beast.title}
          onClick={this.addClick}
        />
        <Card.Text>{this.state.timesClicked ? this.state.timesClicked + ' 💖 ' : ''}</Card.Text>
        <Card.Text>{this.props.beast.description}</Card.Text>
      </Card>
    )
  }
}

export default HornedBeast;

