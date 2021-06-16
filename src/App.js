import React from 'react'
import Home from './Components/common/home'
import { BrowserRouter, Switch, Route } from 'react-router-dom'




function App() {



  return (
    <BrowserRouter>

      <Switch>
        
        <Route path="/">
          <Home />
        </Route>
      </Switch>

    </BrowserRouter>
  )
}

export default App
