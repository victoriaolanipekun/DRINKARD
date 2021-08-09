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
 
 
![image](https://user-images.githubusercontent.com/71145696/128151120-b3a88874-26e0-4e8c-b2e1-7dea3d5d3b3a.png)<h1> Project #1: Drinkard </h1>
This was a team of 2 building a React Application which consumed a public API.
 
** Timeframe:**
2 days
 
** Technologies used:** 
 
 HTML,
 CSS + CSS Animation,
 JavaScript,
 Bulma,
 React.js,
 Github/Git
 
 You can find our hosted version here: https://drinkard-app.netlify.app
 
*APPLICATION OVERVIEW*
 
DRINKARD is an application which hosts a variety of 25 cocktails. The aim was to get information from a Cocktail API and then building our application.
 
Once the page loads, a "Welcome to DRINAKARD 🍸" displays, with the glass being clickable. If the user clicks on the glass, it will direct him/her to the cocktails page. 
On the top of the page we devised a navbar which is always present, no matter on which section of the page the user is; this way, the user can either return to the homepage (by clicking on the home icon) or click on the glass to redirect to the cocktail page.

*CODING PROCESSES*

As already stated, 25 cocktails will be displayed on the cocktail page; to create a better experience, when the cocktails are hovered over, they are lifted(see below a snippet of the css)

![Screenshot 2021-06-18 at 11 14 22](https://user-images.githubusercontent.com/83225952/122545957-59de2f00-d026-11eb-89be-768c49032693.png)

For each page, we have created distinct components to be able to interact with each page; we named this component CocktailIndex, which is returning a mapped componennt, called CocktailCard:

 
![Screenshot 2021-06-18 at 11 27 44](https://user-images.githubusercontent.com/83225952/122547595-37e5ac00-d028-11eb-8890-b9116e5abca3.png)

In the latter we wrote the code so that it renders every cocktail in a column (we styled this with Bulma) ![Screenshot 2021-06-18 at 11 31 00](https://user-images.githubusercontent.com/83225952/122547956-aa568c00-d028-11eb-92f7-27693eceb36a.png)

This allows the user to select any of the cocktails displayed. When hovering over the ABC cocktail, it will be lifted so there is a better correspondence with the user experience.![Screenshot 2021-06-18 at 11 39 36](https://user-images.githubusercontent.com/83225952/122548954-e0484000-d029-11eb-8ae3-6e7589f25c91.png)


When clicking on any cocktail, a corresponding page will open with information on that cocktail.

*CHALLENGES*

The API in itself did not appear to be very organised for easy access; for example, each cocktail would have distinct ingredients and measures, which made it difficult to target  so that we can display them.

*WINS*

This was our first shot at a public API and we were able to build a functional application with it. 


*FUTURE FEATURES*

Had there been more time, we would have liked to add a suggestions input where the user can provide a feedback on either cocktails, ingredients or anything he/she would have liked to see.
 
 
 
 
 
