import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const CocktailShow = () => {
  const { id } = useParams()
  console.log(id)
  

  useEffect(() => {
    const getCocktails = async () => {
      try {
        const response = await axios.get(`www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        console.log(response)
      } catch (err) {
        console.log(err)
      }
      
    }
    getCocktails()
  })

  return (
    <h1>hello</h1>
  )
}

export default CocktailShow