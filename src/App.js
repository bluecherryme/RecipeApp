import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from './Components/Home/Home';
import Search from './Components/Search/search';
import Video from './Components/Video/SearchVideo';
import Footer from './Components/Footer/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home/>
        <Search/>
        <Footer/>
      </div>
    );
  }
}

export default connect()(App);
