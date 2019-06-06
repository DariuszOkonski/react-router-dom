import React from 'react';
import './App.css';
import { BrowserRouter, Router, NavLink, Switch } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import DisplayBoard from './DisplayBoard';

class App extends React.Component {
  state = {}
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Navigation />

          <DisplayBoard />

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;