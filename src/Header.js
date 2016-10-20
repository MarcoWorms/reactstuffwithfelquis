import React from 'react'
import logo from './logo.svg'
import { Link } from 'react-router'

const Header = () => {
  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>

      <nav>
        <ul>
          <li><Link to="blabla">Not Found</Link></li>
          <li><Link to="login">Login</Link></li>
          <li><Link to="/">Home</Link></li>
        </ul> 
      </nav>
    </div>
  )
}

export default Header
