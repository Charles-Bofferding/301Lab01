import React from 'react';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {

  constructor(props){
    super(props);
  }

  closeModal = () => {
    this.setState({ show: false });
  }

  //Currently an example taken from https://react-bootstrap.github.io/components/modal/
  //Well mostly, I am making it a class to be able to use it as a component instead of a function
  render() {
    console.log('modal form render attempt');
    console.log(this.props.targetShow);
    console.log(this.props.handleClose);
    return (
      <>
        <Modal show={this.props.targetShow} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src = {this.props.image_url}
              alt = {this.props.keyword}
              title = {this.props.title}
              style = {{ width: '300px' }}
            />
            <p>{this.props.description}</p>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default SelectedBeast;
