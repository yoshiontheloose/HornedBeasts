import React from 'react';

import Modal from 'react-bootstrap/Modal';
import HornedBeast from './HornedBeast';


class SelectedBeast extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
    }
  }

  toggleModal = () => {
    this.setState({
      toggleModal: true,
    })
  }

  render() {
    return (
      <Modal show={this.state.showModal}>
          <Modal.Header onClick={this.toggleModal}>close X</Modal.Header>
          <Modal.Title>Selected Beast</Modal.Title>
          <Modal.Body>
            <img
              src={beast.image_Url}
              alt={beast.description}
              title={beast.title}
            />
          </Modal.Body>
        </Modal>
    )
  }
}

export default SelectedBeast;