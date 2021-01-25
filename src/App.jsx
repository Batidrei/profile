import React from 'react'
import './scss/main.scss'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from './Components/Pages/Home'
import { Container } from 'react-bootstrap'

const App = () => (
  <Router>
    <Container className='back--in-down'>
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
    </Container>
  </Router>
)

export default App;
