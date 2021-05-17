import React from 'react';
import Form from 'react-bootstrap/Form';

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
    this.props.setSearch(event);
  }

  render() {
    return (
      <Form>
        <Form.Label>Filter By Horns</Form.Label>
        <Form.Control onChange={this.handleHorns} as="select">
          <option>0</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>100</option>
        </Form.Control>
      </Form>
    );
  }

}

export default BeastForm;
