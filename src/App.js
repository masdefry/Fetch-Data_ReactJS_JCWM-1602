import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Data1 from './Data1'

export default class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <h1>
              Welcome
            </h1>
          </Route>
          <Route path='/data-1' component={Data1} />
        </Switch>
      </BrowserRouter>
    )
  }
}
