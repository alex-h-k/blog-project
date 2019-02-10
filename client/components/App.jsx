import React from 'react'
import {BrowserRouter,  Route} from 'react-router-dom';
import Login from './Login'
import Home from './Home'

const App = () => {
  return (
    <BrowserRouter >
    <div>
      <h1>We've all been there, you are not alone.</h1>
      <Route path="/" component={Login}/>
      <Route path="/home" component={Home}/>
    
    </div>
    </ BrowserRouter >

  )
}

export default App

