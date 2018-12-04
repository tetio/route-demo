import React, { Component } from 'react';
import Main from './containers/Main';
import {BrowserRouter, Switch} from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Main/>
      </BrowserRouter> 
    );
  }
}

export default App;
