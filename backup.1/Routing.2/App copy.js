import React, { Component } from 'react'
import Navbar from './Navbar'
import Contact from './Contact'
import Services from './Services'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
 class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar/>
          <Switch>
          <Route path='/Contact' component={Contact}/>
          <Route path='/Services' component={Services}/>
            </Switch> 
        </Router>
      </>
    )
    }
  }
  export default App;

