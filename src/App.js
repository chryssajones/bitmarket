import React, { Component } from 'react';
import './App.css';
import Today from './Today/Today'
import History from './History/History'

class App extends Component {
  render() {
    return (
      <div className="">
          <div className="topheader">
              <header className="container">
                  <nav className="navbar">
                      <div className="navbar-brand">
                          <span className="navbar-item">BitMarket</span>
                      </div>
                  </nav>
              </header>
          </div>
          <section className="results--section">
              <div className="container">
                  <h1>BitMarket displays real-time US$ market prices for the cryptocurrencies Bitcoin (BTC), Ethereum (ETH), and Litecoin (LTC)</h1>
              </div>
              <hr />
              <div className="results--section__inner">
                  <Today />
                  <hr />
                  <History />
              </div>
          </section>
      </div>
    );
  }
}

export default App;