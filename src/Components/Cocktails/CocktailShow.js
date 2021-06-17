import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const CocktailShow = () => {
  const { id } = useParams()
  console.log(id)

  const [cocktail, setCocktail] = useState(null)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const getCocktails = async () => {
      try {
        const { data } = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        // console.log(response)
        setCocktail(data.drinks[0])
        console.log(setCocktail)
        console.log('Check=>', data)
      } catch (err) {
        console.log(err)
        setHasError(true)
      }
    }
    getCocktails()
  }, [id])



  


  return (
    <section className="section">
      <div className="container">
        {cocktail ?
          <div>
            <h2 className="title has-text-centered">{cocktail.strDrink}</h2>
            <hr />
            <div className="columns">
              <div className="column is-half">
                <figure className="image">
                  <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                </figure>
              </div>
              <div className="column is-half">
                <h4 className="title is-4"><span role="img" aria-label="plate">🍸</span> Drink Name</h4>
                <p>{cocktail.strDrink}</p>
                <hr />
                <h4 className="title is-4"><span role="img" aria-label="globe">🍹</span> Glass Type</h4>
                <p>{cocktail.strGlass}</p>
                <hr />
              

              
              </div>
            </div>
          </div>
          :
          <h2 className="title has-text-centered">
            {hasError ? 'Oh something went wrong, the sadness 😞' : '...loading 🧀 '}
          </h2>
        }
      </div>
    </section>
  )
}

export default CocktailShow