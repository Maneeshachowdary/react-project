import React from 'react';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Navbar from "./Navbar"
import Contact from './Contact'
import Services from './Services'
class App extends React.Component{
    render(){
        return <>
        <Router>
        <Navbar/>
        <Switch>
        < Route path="/Services" component={Services}/>
        <Route path="/Contact" component={Contact}/>
        </Switch>
        </Router>
        </>;
    }
}
export default App

 