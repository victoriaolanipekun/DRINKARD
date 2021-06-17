import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CocktailCard from './CocktailCard'




const Home = () => {

  const [cocktails, setCocktails] = useState([])
  const [formData, setFormdata] = useState({
    strDrink: '',
    strDrinkThumb: '',
    strAlcoholic: '',
  })
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const getCocktails = async () => {
      try {
        const { data } = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
        setCocktails(data)
      } catch (err) {
        setHasError(true)
      }
    }
    // console.log('getcocktails', getCocktails)
    getCocktails()
  }, [])
 

  const handleChange = (event) => {
    const newFormData = { ...formdata, [event.target.name]: event.target.value }
    setFormdata(newFormData)
    // handleSubmit()
  }

  const handleSubmit = async () => {
    try {
      const { data } = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=', formData)
      setCocktails(data)
    } catch (err) {
      setHasError(err.response.data.errors)
    }
  }




  console.log('cocktail', cocktails)
  return (
    <section className="hero is-fullheight-with-navbar is-primary">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-1 has-text-centered">
            <span className="logo-emoji welcome" role="img" aria-label="logo"></span>
            Welcome to <br>
            </br><span className="drinkard fade-in">DRINKARD</span>
            <span className="logo-emoji" role="img" aria-label="logo">🍸</span>
          </h1>
        </div>
      </div>

      {/* <div className="columns is-multiline">
        
      </div> */}

      <div className="field has-addons">
        <div className="control">
          <input className="input is-success has-background-success-light search" type="text" placeholder="Search a cocktail" onChange={handleChange} value={formData.strDrink}>
          </input>
        </div>
        <div className="control" onSubmit={handleSubmit} >
          <a className="button is-info">
            Search
          </a>
        </div>
      </div>
      {cocktails.length > 0 ?
        <div className="columns is-multiline">
          {cocktails.map(cocktail => {
            return <CocktailCard key={cocktail.idDrink} {...cocktail} />
          })}
        </div>
        :
        <h2 className="title has-text-centered">
          {hasError ? 'Something has gone wrong!' : 'loading...🍸'}
        </h2>
      }

    
    </section>
  )

}
export default Home