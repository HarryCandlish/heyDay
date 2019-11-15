import React from "react";
import { Link } from "react-router-dom";


import styles from '../modules/navigationStyles.module.scss'

const Navigation = () => (
  <div>
  <nav>
    <h1 className={styles.title}>Hey Day</h1>
    <ul className={styles.list}>
      <Link className={styles.links} to='/'>
        <li><h4>Our Beer</h4></li>
      </Link>
      <Link className={styles.links} to='/'>
       <li><h4>Events</h4></li>
      </Link>
      <Link className={styles.links}to='/'>
        <li><h4>Food</h4></li>
      </Link>
      <Link className={styles.links} to='/'>
       <li><h4>About</h4></li>
      </Link>
      {/* <Link className={styles.tableButton} to='/reservations'>
        <button>Book a Table</button>
      </Link> */}
    </ul>
  </nav>
  </div>
);


export default Navigation;