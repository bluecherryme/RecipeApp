import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from './Components/Home/Home';
import Search from './Components/Search/search';
import More from './Components/More/More';
import Footer from './Components/Footer/footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home/>
        <Search/>
        <More/>
        {Footer()}
      </div>
    );
  }
}

export default connect()(App);
