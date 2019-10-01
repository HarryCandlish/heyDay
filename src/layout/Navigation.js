import React from "react";
import { Link } from "react-router-dom";





const Navigation = () => (
  <div>
    <ul>
      <Link to='/'>
        <li>Our Beer</li>
      </Link>
      <Link to='/'>
        <li>Events</li>
      </Link>
      <Link to='/'>
        <li>Food</li>
      </Link>
      <Link to='/'>
        <li>About</li>
      </Link>
      <Link to='/'>
        <li>Make Reservation</li>
      </Link>
    </ul>
  </div>
);


export default Navigation;