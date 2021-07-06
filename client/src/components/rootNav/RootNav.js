import React from 'react';
import { Link } from 'react-router-dom';
import './rootNav.css'


export default function RootNav() {

  return (
    <>
    <nav>
        <li><Link to="/login">Log In</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/about">About</Link></li>
    </nav>
    </>
  );
}