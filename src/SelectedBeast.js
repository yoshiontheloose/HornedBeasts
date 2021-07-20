import React from 'react';

import Modal from 'react-bootstrap/Modal';


class SelectedBeast extends React.Component {

  render() {
    return (
      <Modal
        dialogClassName="modal-90w"
        show={this.props.showModal}
        onHide={this.props.handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.beast.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={this.props.beast.image_url}
            alt={this.props.beast.description}
            title={this.props.beast.title}
          />
        </Modal.Body>
        <Modal.Footer>{this.props.beast.description}</Modal.Footer>
      </Modal>
    );
  }
}

export default SelectedBeast;