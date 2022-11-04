import React from 'react'
import './header.css'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
<nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
        <a href="/contact">Contact</a>
        </li>
       
      </ul>

    </nav>
    </div>
  )
}

export default Header