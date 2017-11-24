import React, { Component } from 'react';
import './_app.scss';

export default class App extends Component {
  render() {
    let x = 'test';
    return (
      <div>
        <h1 className="title">{x}</h1>

        <div className="cat-box">
          <div className="cat"></div>
          <div className="cat1"></div>
          <div className="cat2"></div>
          <div className="cat3"></div>
        </div>
      </div>
    );
  }
}
