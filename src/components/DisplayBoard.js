import React from 'react';
import { Switch, Router } from 'react-router-dom';
import AboutUs from './AboutUs';
import Home from './Home';
import Products from './Products';
import Gallery from './Gallery';
import Contact from './Contact';
import ErrorPage from './ErrorPage';

const DisplayBoard = () => {
  return (
    <div className="board">
      <Switch>
        <Home path="/" exact component={Home} />
        <AboutUs path="/aboutUs" component={AboutUs} />
        <Products path="/products" component={Products} />
        <Gallery path="/gallery" component={Gallery} />
        <Contact path="/contact" component={Contact} />
        <ErrorPage component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default DisplayBoard;