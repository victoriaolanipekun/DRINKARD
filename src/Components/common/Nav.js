import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {

  return (
    <>
      <nav className="navbar">
        <div className="container-navbar">
          <div className="homepage">
            <Link to="/" className="navbar-item">            
              <span className="icon-text">
                <span className="icon">
                  <i className="fas fa-home"></i>
                </span>
                <span>Home</span>
              </span>

            </Link>
          </div>
          <div className="navbar-start">
            <Link to="/cocktails" className="navbar-item">
              <i className="fa fa-glass " ></i>🍸</Link>
          </div>
        </div>
      </nav>
    </>
  )
}
export default Navbar