import React, { Component } from 'react';
import { Link } from 'react-router';
import withContext from '../../decorators/withContext';
import withStyles from '../../decorators/withStyles';
import styles from './TopBar.scss';

@withContext
@withStyles(styles)
export default class TopBar extends Component {
  render() {
    return (
      <nav className="top-bar" data-topbar role="navigation">
        <ul className="title-area">
          <li className="name">
            <h1><Link to="/">YesYesCompany</Link></h1>
          </li>
        </ul>

        <section className="top-bar-section">
          <ul className="left">
            <li>
              <Link to="/">Who We Are</Link>
            </li>
            <li>
              <Link to="/">What We Do</Link>
            </li>
            <li>
              <Link to="/">Our Work</Link>
            </li>
            <li>
              <Link to="/">Contact Us</Link>
            </li>
          </ul>
        </section>
      </nav>
    );
  }
}
