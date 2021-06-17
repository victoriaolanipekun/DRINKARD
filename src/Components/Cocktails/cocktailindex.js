import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CocktailCard from './CocktailCard'




const CocktailIndex = () => {

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
        setCocktails(data.drinks)
      } catch (err) {
        setHasError(true)
      }
    }
    getCocktails()
  }, [])


  const handleChange = (event) => {
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    setFormdata(newFormData)
    console.log(newFormData)
  }

  const handleSubmit = async () => {
    event.preventDefault()
    try {
      const { data } = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=', formData)
      setCocktails(data.drinks)
    } catch (err) {
      setHasError(err.response.data.errors)
    }
  }




  console.log('cocktail', cocktails)
  return (
    <section>

      {/* <div className="columns is-multiline">
        
      </div> */}

      <div className="field has-addons" onSubmit={handleSubmit} >
        <div className="control">
          <input onChange={handleChange} name="strDrink" className="input is-success has-background-success-light search" type="text" placeholder="Search a cocktail" value={formData.strDrink}>
          </input>
        </div>
        <div className="control" >
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
export default CocktailIndex