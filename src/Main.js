import React from 'react';
import { CardColumns } from 'react-bootstrap';
import HornedBeast from './HornedBeast';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <div id='main'>
        <CardColumns>
          {this.props.dataToMain.map((beast, idx) => (
            <HornedBeast
              key = {idx}
              title = {beast.title}
              src = {beast.image_url}
              alt = {beast.keyword}
              description = {beast.description}
              horns={beast.horns}
              selectBeast={() => this.props.selectBeast(beast)}
            />
          ))}
        </CardColumns>
      </div>
    );
  }



}

export default Main;
