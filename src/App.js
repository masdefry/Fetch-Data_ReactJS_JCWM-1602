import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Data1 from './Data1'
import Data2  from './Data2'
import LifeCycleMethod from './LifeCycleMethod'

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
          <Route path='/data-2' component={Data2} />
          <Route path='/lifecyclemethod' component={LifeCycleMethod} />
        </Switch>
      </BrowserRouter>
    )
  }
}
