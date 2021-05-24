import React from 'react'
import './scss/main.scss'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from './components/pages/home'
import { Navigation } from './components/organims/navigation'
import { error404 } from './components/pages/error404'

const App = () => (
  <Router>
    <div className='back--in-down'>
      <Navigation />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route component={error404}/>
      </Switch>
    </div>
  </Router>
)

export default App;
