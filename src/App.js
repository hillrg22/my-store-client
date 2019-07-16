import React from 'react'
import './App.scss'

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import Navigation from './components/Navigation'
import ProductsList from './components/ProductsList'
import ProductDetail from './components/ProductDetail'

function App() {
  return (
    <Router>
      <Route path= '/' component={Navigation} />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route exact path='/products' component={ProductsList} />
        <Route path='/products/:id'component={ProductDetail} />
      </Switch>

    </Router>
  )
}

export default App
