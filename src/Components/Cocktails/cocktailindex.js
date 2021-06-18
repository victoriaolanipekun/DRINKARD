import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CocktailCard from './CocktailCard'




const CocktailIndex = () => {

  const [cocktails, setCocktails] = useState([])
  // const [formData, setFormdata] = useState({
  //   strDrink: '',
  //   strDrinkThumb: '',
  //   strAlcoholic: '',
  // })
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



  console.log('cocktail', cocktails)
  return (
    <section>
      <div className="container">
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
      </div>   
    </section>
  )

}
export default CocktailIndex