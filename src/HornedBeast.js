import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0
    };
  }

  render() {
    return (
      <Card bg='primary' style = {{ width: '300px' }}>
        <Card.Img variant="top"
          src = {this.props.src}
          alt = {this.props.keyword}
          onClick = {this.props.selectBeast}
          style = {{ width: '300px' }}
        />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
          <Card.Text>{this.props.horns}</Card.Text>
        </Card.Body>
        <div>
          <Button variant="secondary" onClick={this.likeIt}>
              Like It
          </Button>
          <img className = 'heart' src = 'https://cdn.pixabay.com/photo/2013/07/13/10/50/heart-157895_960_720.png'/>
          <h1 className = 'likeCounter'>{this.state.likes}</h1>
        </div>
        <br />
      </Card>
    );
  }

  //Function to handle the image getting clicked
  likeIt = () => {
    this.setState({ likes: this.state.likes + 1 });
  }

}

export default HornedBeast;
