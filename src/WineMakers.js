import React from 'react';
import WineMaker from './WineMaker';
import { Routes, Route, Link } from 'react-router-dom';

function WineMakersList() {
  return (
    <ul>
      <li><Link to="WM1">Wine & Wine</Link></li>
      <li><Link to="WM2">Wine & Co</Link></li>
    </ul>
  );
}

export default class WineMakers extends React.Component {
  render() {
    return (
      <Routes>
        <Route index element={<WineMakersList />} />
        <Route path=':code' element={<WineMaker />} />
      </Routes>
    );
  }
}
