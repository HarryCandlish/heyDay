import React from "react";
import { Link } from "react-router-dom";


import navigationStyles from '../modules/navigationStyles.module.scss'

var ns = navigationStyles

const Navigation = () => (
  <nav>
    <h1 className={ns.title}>Hey Day</h1>
    <ul className={ns.list}>
      <Link className={ns.links} to='/'>
        <li>Our Beer</li>
      </Link>
      <Link className={ns.links} to='/'>
        <li>Events</li>
      </Link>
      <Link className={ns.links}to='/'>
        <li>Food</li>
      </Link>
      <Link className={ns.links} to='/'>
        <li>About</li>
      </Link>
      <Link className={ns.tableButton} to='/reservations'>
        <button>Book a Table</button>
      </Link>
    </ul>
  </nav>
);


export default Navigation;