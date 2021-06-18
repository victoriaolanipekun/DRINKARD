import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {



  return (

    <section className="hero is-fullheight-with-navbar">
      <div className="hero-body">
        <div className="container welcome-text">
          <h1 className="title is-1 has-text-centered">
            <span className="logo-emoji" role="img" aria-label="logo"></span>
          Welcome to <br>
            </br><span className="drinkard fade-in">DRINKARD</span>
            <Link to="/cocktails">
              <span className="logo-emoji" role="img" aria-label="logo">🍸</span></Link>
          </h1>
        </div>
        
      </div>

      
    </section>


  )
}

export default Home