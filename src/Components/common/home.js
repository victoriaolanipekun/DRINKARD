import React, { useEffect, useState } from 'react'
import axios from 'axios'
//import CocktailCard from './CocktailCard'



const Home = () => {

  const [cocktails, setCocktails] = useState([])
  const [formData, setFormdata] = useState('')

  useEffect(() => {
    const getCocktails = async () => {
      try {
        const { data } = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
        setCocktails(data)
      } catch (err) {
        console.log(err)
      }
    }
    getCocktails()
  }, [])

  const searchCocktails = async () => {
    try {
      const { data } = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + formData)
      setCocktails(data)
    } catch (err) {
      console.log(err)
    }
  }

  const handleChange = (event) => {
    console.log(event.target.value)
    setFormdata(event.target.value)
    searchCocktails()
  }



  console.log('cocktail', cocktails)
  return (
    <section className="hero is-fullheight-with-navbar is-primary">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-1 has-text-centered">
            <span className="logo-emoji welcome" role="img" aria-label="logo"></span>
            Welcome to <br>
            </br><span className="drinkard fade-in">DRINKARDDDDD</span>
            <span className="logo-emoji" role="img" aria-label="logo">🍸</span>
          </h1>
        </div>
      </div>

      <div className="columns is-multiline">
        
      </div>

      <div className="field has-addons">
        <div className="control">
          <input className="input is-success has-background-success-light search" type="text" placeholder="Search a cocktail" onChange={handleChange}>
          </input>
        </div>
        <div className="control">
          <a className="button is-info">
            Search
          </a>
        </div>
      </div>

      {/* <form className="column is-half is-offset-one-quarter">
        <div className="field has-addons">
          <label className="label is-1 has-text-centered">Search your favorite cocktail</label>
          <div className="control">
            <input className="input is-rounded"
              type="text"
              placeholder="type your cocktail">

            </input>
          </div>
          <div className="control">
            <a className="button is-info">Search</a>
          </div>
        </div> */}

      {/* <div classNam="field">
          <button type="submit" className="button is-fullwidth is-warning"></button>
        </div> */}
      {/* </form> */}
    </section>
  )

}
export default Home