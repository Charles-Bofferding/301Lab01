import React from 'react';
import { CardColumns } from 'react-bootstrap';
import HornedBeast from './HornedBeast';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.dataToMain
    };
  }

  

  render() {
    console.log(this.state.data);
    console.log(this.props.dataToMain);
    return (
      <div id='main'>
        <CardColumns>
          {this.state.data.map((beast, idx) => (
            <HornedBeast
              key = {idx}
              title = {beast.title}
              src = {beast.image_url}
              alt = {beast.keyword}
              description = {beast.description}
            />
          ))}
        </CardColumns>
      </div>
    );
  }



}

export default Main;
