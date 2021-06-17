import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {

  return (
    <>
      <nav className="navbar is-warning">
        <div className="container-navbar">
          <div className="homepage">
            <Link to="/" className="navbar-item">
              <span className="icon-text">
                <span className="icon">
                  <i classn="fas fa-home"></i>
                </span>
                <span>Home</span>
              </span>

            </Link>
          </div>
          <div className="navbar-start">
            <Link to="/cocktails" className="navbar-item">🍸</Link>
          </div>
        </div>
      </nav>
    </>
  )
}
export default Navbar