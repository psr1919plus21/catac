import React, { Component } from 'react';
import Header from '../Header';
import './_app.scss';

export default class App extends Component {
  render() {
    return (
      <main>
        <Header />
        <div className="container">
          <h1 className="title">catac</h1>
        </div>
      </main>
    );
  }
}
