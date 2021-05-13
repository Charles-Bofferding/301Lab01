import React from 'react';
import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import dataIn from './data.json';
import SelectedBeast from './SelectedBeast';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      data: dataIn,
      target: undefined
    };
  }

  render(){
    //Return back everything wrapped in only one element or everything breaks
    console.log(this.state.data);
    return (
      <div id = 'app'>
        <SelectedBeast
          beastTarget={this.state.target}
        />
        <Header />
        <Main
          dataToMain={this.state.data}
        />
        <Footer />
      </div>
    );
  }

}


export default App;
