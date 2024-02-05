import React from 'react';
import { Link } from "react-router-dom";

function Header() {

  return (
    <div>
      HEADER
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/a-propos">About</Link>
          </li>
      </ul>
      </nav>
    </div>
  );
}

export default Header;