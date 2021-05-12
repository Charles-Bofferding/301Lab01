import React from 'react';
import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  constructor() {
    super();
  }

  render(){
    //Return back everything wrapped in only one element or everything breaks
    return (
      <div id = 'app'>
        <Header />
        <Main />
        <Footer />
      </div>
    );

  }

}


export default App;
