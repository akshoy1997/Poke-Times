import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

function NavBar(props) {
  // setTimeout(() => {
  //   props.history.push('/about')
  // }, 2000);
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
          <Link to="/" className="brand-logo">Poke'Times</Link>
          <ul className="right">
              <li><Link to="/">Home</Link></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/posts">More Posts</NavLink></li>
          </ul>
      </div>
    </nav>
  );
}

export default withRouter(NavBar);