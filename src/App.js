import React from 'react';
import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import dataIn from './data.json';
import SelectedBeast from './SelectedBeast';
import BeastForm from './BeastForm';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      data: dataIn,
      target: {},
      targetShow: false,
      hornSearch: 0
    };
  }

  selectBeast = (beast) => {
    console.log('selectBeast was run');
    this.setState({ targetShow: true});
    this.setState({ target: beast });
  }

  setSearch = (search) => {
    this.setState({ hornSearch: search }, this.filterData); // we are running the filterData method as a callback.
  }

  filterData = () => {
    const filterBeasts = (beast) => {
      // filter our array based on a title
      console.log(beast.title, this.state.searchTitle);
      if (beast.horns === (this.state.hotnSearch)) {
        return true;
      }
      return false;
    };

    if (this.state.hornSearch) {
      this.setState({ data: this.state.data.filter(filterBeasts) });
    } else {
      this.setState({ data: dataIn });
    }
  }

  render(){
    //Return back everything wrapped in only one element or everything breaks
    console.log(this.state.target);
    return (
      <div id = 'app'>
        <SelectedBeast
          beastTarget={this.state.target}
          show={this.state.targetShow}
        />
        <BeastForm setSearch={this.setSearch} />
        <Header />
        <Main
          dataToMain={this.state.data}
          selectBeast = {this.selectBeast}
        />
        <Footer />
      </div>
    );
  }

}


export default App;
