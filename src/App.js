import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from './Components/Home/Home';
import Search from './Components/Search/search';
import Cards from './Components/Cards/Cards';
import More from './Components/More/More';
import Footer from './Components/Footer/footer';
import RecipeDetail from './Components/Cards/RecipeDetail/RecipeDetail';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>App</h1>
        <Home/>
        <Search/>
        <Cards/>
        <RecipeDetail/>
        {More()}
        {Footer()}
      </div>
    );
  }
}

export default connect()(App);
