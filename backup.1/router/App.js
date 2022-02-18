import React from "react";
import Navbar from "./Navbar";
import Contact from "./Contact"
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
function App() {
  return (
    <div>
   <Router>
       <Navbar/>
       <Switch> 
          <Route path="/Contact" component={Contact}/> 
       </Switch>
   </Router>
    </div>
  )
}
export default App