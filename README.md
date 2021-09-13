<!-- # ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) GA London React Template

## Using NPM

`yarn start` or `yarn dev`  to run the development server

`yarn build` to create a build directory

## Using Yarn

`yarn start` or `yarn dev`  to run the development server

`yarn build` to create a build directory

### ⚠️

To prevent the `failed-to-compile` issue for linter errors like `no-unsed-vars`, rename the `.env.example` to `.env` and restart your development server. Note this will only change the behaviour of certain linter errors to now be warnings, and is added just to allow your code to compile in development. These errors should still be fixed and other errors will still result in the code being unable to compile

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

 -->
 
 
![image](https://user-images.githubusercontent.com/71145696/128151120-b3a88874-26e0-4e8c-b2e1-7dea3d5d3b3a.png)<h1> Project #2: Drinkard </h1>
<img src="https://github.com/victoriaolanipekun/DRINKARD/blob/master/src/Assets/homepage.png?raw=true" width=1000 alt=Homepage-Screenshot>

<h1>Overview</h1>
<p>This project was my second project for the Software Engineering Immersive course at General Assembly London, which was done in a team of 2. The aim was to get information from a third party API and then implement our application creatively. We decided on the cocktail API and named our application DRINKARD.</p>
<p>DRINKARD is an application which hosts a variety of 25 cocktails. The page loads with a "Welcome to DRINAKARD 🍸" display, with the glass being clickable. If the user clicks on the glass, it will direct him/her to the cocktails page. 
On the top of the page we devised a navbar which is always present, throughout the different application pages; this way, the user can either return to the homepage (by clicking on the home icon) or click on the glass to redirect to the cocktail page.
</p>

<h1>Brief</h1>

<p>This was our second project in GA which we were expected to build a React.js app consuming a 3rd party public API, and was to be pair coded in 48 hours.</p>
<h1>Timeframe</h1>
48 hours
<h1>Team</h1>

<li>Adrian Pantea - https://github.com/adrianp2021</li>
<li>Victoria Olanipekun - https://github.com/victoriaolanipekun</li>

<h1>Deployment</h1>
<p>You can find our hosted version here: https://drinkard-app.netlify.app</p>
<p>Repository link: https://github.com/victoriaolanipekun/DRINKARD</p>


<h1>Technologies used</h1>
<li>HTML5</li>
<li>CSS3</li>
<li>CSS Animation</li>
<li>SASS</li>
<li>Bulma</li>
<li>JavaScript(ES6)</li>
<li>React JavaScript</li>
<li>axios (for API requests)</li>
<li>Chrome</li>
<li>Insomnia</li>
<li>Git & GitHub</li>


<h1>Demonstration of the App Flow</h1>
<img src="https://github.com/victoriaolanipekun/DRINKARD/blob/master/src/Assets/drinakrd.gif?raw=true" width=500 alt=application-overview>

<h1>Approach</h1>

<p>In building this project we only had 48 hours and as such we needed to logically determine our scale of preference when we set out to build. So we made plans on what we thought was achievable in the timeframe and listed some features that we would like to implement. We spent a short time planning and once we had a clear direction we moved into coding.</p> 
<p>Our first task was to ensure that we could get the cocktail API to appear on our index page. We created distinct components to be able to interact with each page, we named this first component CocktailIndex, which is returning a mapped component, called CocktailCard.</p>


```javascript



    const [cocktails, setCocktails] = useState([])
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
    
```

<p>We went further to write the JSX which included the CocktailCard with which we then had a visual idea of how our application would look. We had to map through the data and also introduced some error handling using a ternery to show if an error occurred 'Something has gone wrong!' or to show if the page is still processing as 'loading...🍸'.</p>

```javascript

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
    
```

<p>The CocktailCard was written as a different component and styled so as to create a better user experience that when the cocktails cards are hovered on by the user, seems as though they are lifted. </p>

```javascript
     
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
     
```

 <p>We then added a new component called 'CocktailShow' by which on clicking on any of the cocktail, a corresponding page will open with information on that cocktail.</p>

```javascript

      const { id } = useParams()
      const [cocktail, setCocktail] = useState(null)
      const [hasError, setHasError] = useState(false)

      useEffect(() => {
        const getCocktails = async () => {
          try {
            const { data } = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
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

```

Once these were done and functioning we spent our last half day styling the game into our tropical themed application.

<h1>Screenshots</h1>

Show page
<img src="https://github.com/victoriaolanipekun/DRINKARD/blob/master/src/Assets/showpage.png?raw=true" width=1000 alt=Index-Screenshot>

Index page
<img src="https://github.com/victoriaolanipekun/DRINKARD/blob/master/src/Assets/indexpage.png?raw=true" width=1000 alt=Index-Screenshot>


<h1>Challenges</h1>

The API in itself did not appear to be very organised for easy access; for example, each cocktail would have distinct ingredients and measures, which made it difficult to target  so that we can display them. We took a shot at this but due to limited time it wasn't completed.

```javascript

     useEffect(() => {
        if (!cocktail) return 
        const entries = Object.entries(cocktail)
        console.log(entries)
        const filteredIngredients = entries.filter(ingredient => {
          if (ingredient[0].includes('strIngredient') && ingredient[1] !== null) {
            return ingredient
          }
        })
        console.log(filteredIngredients)
      }, [cocktail])
  
```

<h1>Wins</h1>

This was our first shot at a public API and we were able to build a functional application with it. This project hugely added to my knowledge on accessing and leveraging API endpoints. Also the project improved my technical communication massively, as we did a pair-coding hackathon remotely, and it was headon a success.


<h1>Future Features</h1>

Had there been more time, we would have liked to add a suggestions input where the user can provide a feedback on either cocktails, ingredients or anything he/she would have liked to see.


<h1>Key learnings</h1>

This project hugely added to my knowledge on accessing and leveraging API endpoints. Also the project improved my technical communication massively: as we did a pair-coding hackathon remotely, any challenges, communication or otherwise, were a challenge to overcome, and we did just that.
 
 
 
 
