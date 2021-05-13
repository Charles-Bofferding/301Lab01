import React from 'react';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component() {


  constructor(props){
    super(props);
    this.state = {
      show: false,
      setShow: false
    }
  }

  // 
  handleClose = () => setShow(false);
  handleShow = () => setShow(true);

  //Currently an example taken from https://react-bootstrap.github.io/components/modal/
  //Well mostly, I am making it a class to be able to use it as a component instead of a function
  render() {
    return (
      <>
        {/* <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
   */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default SelectedBeast
