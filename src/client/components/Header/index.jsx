import React, { Component } from 'react';
import './_header.scss';

export default class Header extends Component {
  render() {
    return(
      <header className="header">
        <div className="container">
          <div className="header__title">Header</div>
          <nav className="header__nav">
            <ul className="nav-list">
              <li className="nav-list__item">feed</li>
              <li className="nav-list__item">profile</li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
