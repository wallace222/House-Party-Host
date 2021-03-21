import React, { useState } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import MusicCompoent from './mp3 player/MusicComponent'

import Home from './Home'
import Login from './Login'
import Navbar from './Navbar'
import Profile from './Profile'
import Register from './Register'

//styling
import '../styling/scssmain.scss'
import '../styling/cssmain.css'

const App = () => {
  return (
    <Router>
    <Route path='/' component={Navbar}/>
    
    <Route exact path='/' component={Home}/>

    <Route exact path='/Login' component={Login}/>
    
    <Route exact path='/Register' component={Register}/>

    <Route path='/' component={MusicCompoent}/>

    </Router>
  )
}

export default App

// for now just try and copy off of this guy and
// tweak what he has going to match your vision 
// https://www.youtube.com/watch?v=f9SEs7UhFBs


// oh yeah before I even start on the styling I will need to start by building redux.





// try and use redux state on the footer so that every time a new page is created.
// I should be able to just go right on ahead and apply the same parameters to the mp3 player.
// it will be kinda seamless.