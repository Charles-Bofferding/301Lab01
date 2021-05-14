import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class BeastForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfHorns: 0,
    };
  }

  handleHorns = (event) => {
    let hornCount = event.target.value;
    this.setState({ numberOfHorns: hornCount });
  }

  handleSubmit = (event) => {
    console.log(this.state.numberOfHorns);
    this.props.setSearch(event.target.value);
  }

  render() {
    return (
      <Form>
        <Form.Label>Filter By Horns</Form.Label>
        <Form.Control onChange={this.handleHorns} as="select">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>100</option>
        </Form.Control>
        <Button onClick={this.handleSubmit}>
          Submit Form
        </Button>
      </Form>
    );
  }

}

export default BeastForm;
