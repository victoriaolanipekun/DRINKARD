import React from 'react'
import { Link } from 'react-router-dom'

const CocktailCard = ({ idDrink, strDrink, strDrinkThumb, strAlcoholic }) => {
  return (
    <div className="column is-one-quarter-desktop is-one-third-tablet cocktail-image">
      <Link to={`/cocktails/${idDrink}`}>
        <div className="card">
          <div className="card-header">
            <div className="card-header-title">{strDrink}</div>
          </div>
          <div className="card-image is-rounded">
            <figure className="image image-is-1by1">
              <img className="is-rounded" src={strDrinkThumb} alt={strDrink}/>
            </figure>
          </div>
          <div className="card-content">
            <h5>{strAlcoholic}</h5>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default CocktailCard
