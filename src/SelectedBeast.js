import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class SelectedBeast extends React.Component {


  constructor(props){
    super(props);
    this.state = {
      show: this.props.show
    };
  }

  handleClose = () => {
    this.setState({ show: false });
  }

  handleShow = () => {
    this.setState({ show: true });
  }

  //Currently an example taken from https://react-bootstrap.github.io/components/modal/
  //Well mostly, I am making it a class to be able to use it as a component instead of a function
  render() {
    console.log(this.state.show);
    return (
      <>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default SelectedBeast;
