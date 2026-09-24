import React, { Component } from 'react';
import './App.css';
import Catalog from './Catalog';
import About from './About';
import WineMakers from './WineMakers';
import { Routes, Route, Link } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">The Catalog App</h1>
          <nav>
            <ul>
              <li><Link to='/'>Catalog</Link></li>
              <li><Link to='/winemakers'>WineMakers</Link></li>
              <li><Link to='/about'>About</Link></li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path='/' element={<Catalog />} />
          <Route path='/winemakers/*' element={<WineMakers />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    );
  }
}
