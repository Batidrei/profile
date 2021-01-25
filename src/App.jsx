import React from 'react'
import './scss/main.scss'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from './Components/Pages/Home'
import { Knowdledge } from './Components/Pages/Knowdledge'
import TimelinePage from './Components/Pages/TimelinePage'
import { Container } from 'react-bootstrap'

const App = () => (
  <Router>
    <Container className='back--in-down'>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/knowdledge' exact component={Knowdledge} />
        <Route path='/timeline' exact component={TimelinePage} />
      </Switch>
    </Container>
  </Router>
)

export default App;
