import React, { useState } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Home from './Home'
import Audiovisualizer from './Audiovisualizer'
import Login from './Login'
import Mp3footer from './Mp3footer'
import Navbar from './Navbar'
import Register from './Register'
import '../styling/style.scss'

const App = () => {
  return (
    <Router>
    <Route path='/' component={Navbar}/>
    
    <Route exact path='/' component={Home}/>

    <Route exact path='/Login' component={Login}/>
    
    <Route exact path='/Register' component={Register}/>

    <Route path='/' component={Audiovisualizer}/>

    <Route path='/' component={Mp3footer}/>
    </Router>
  )
}

export default App



// try and use redux state on the footer so that every time a new page is created.
// I should be able to just go right on ahead and apply the same parameters to the mp3 player.
// it will be kinda seamless.