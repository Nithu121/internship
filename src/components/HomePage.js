
import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="home">
      <h1>Welcome to Our Bank</h1>
      <p>Your trusted financial partner.</p>
      <Link className="button" to="/login">Login to Bank</Link>
    </div>
  );
}

export default HomePage;
