import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="home_active">home</NavLink>
        </li>
        <li>
          <NavLink to="/aboutUs" activeClassName="aboutus_active">about us</NavLink>
        </li>
        <li>
          <NavLink to="/products" activeClassName="products_active">products</NavLink>
        </li>
        <li>
          <NavLink to="/gallery" activeClassName="gallery_active">gallery</NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="contact_active">contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;