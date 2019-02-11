import React from 'react'
import {BrowserRouter as Router,  Route} from 'react-router-dom';
import Login from './Login'
import Home from './Home'

const App = () => {
  return (
    <Router >
    <div>
      <h1>We've all been there, you are not alone.</h1>
      <Route path="/" component={Login}/>
      <Route path="/home" component={Home}/>
    
    </div>
    </ Router >

  )
}

export default App

