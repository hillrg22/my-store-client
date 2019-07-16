import React from 'react'
import logo from './logo.svg'
import './App.scss'

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import Navigation from './components/Navigation'
import Products from './components/Products'

function App() {
  return (
    <Router>
      <Route path= '/' component={Navigation} />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/products' component={Products} />
      </Switch>

    </Router>
  )
}

export default App
