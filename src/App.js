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

  //Input of E because we will tie this as a reaction to an update in the form through an event
  setSearch = (e) => {
    let hornSearchVal = parseInt(e.target.value);
    this.setState({ hornSearch: hornSearchVal }, this.filterData);
  }

  filterData = () => {
    const filterBeasts = (beast) => {
      // filter our array based on a title
      if (beast.horns === (this.state.hornSearch)) {
        console.log('I saw a match');
        return true;
      } else {
        return false;
      }
    };

    console.log(this.state.hornSearch);
    if (this.state.hornSearch) {
      console.log('I changed the data state');
      this.setState({ data: dataIn.filter(filterBeasts) });
    } else {
      this.setState({ data: dataIn });
    }
  }

  handleClose = () => {
    console.log('handleClose function run');
    this.setState({ targetShow: false });
  }

  render(){
    //Return back everything wrapped in only one element or everything breaks
    return (
      <div id = 'app'>
        <SelectedBeast
          image_url={this.state.target.image_url}
          title={this.state.target.title}
          description={this.state.target.description}
          keyword={this.state.target.keyword}
          targetShow={this.state.targetShow}
          handleClose={this.handleClose}
        />
        <BeastForm setSearch={this.setSearch} />
        <Header />
        <Main
          dataToMain= {this.state.data}
          selectBeast = {this.selectBeast}
          handleClose = {this.handleClose}
        />
        <Footer />
      </div>
    );
  }

}


export default App;
