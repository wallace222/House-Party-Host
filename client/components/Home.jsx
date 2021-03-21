import React, { useState } from 'react'


//import store from '../store'//store does not exist yet because this is for future functionality.
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'



function Home (props) {
    return (
        <>
        <h1>Home</h1>
        </>
    )
}


function mapStateToProps(state) {
    return {
        
    }
}

export default connect(mapStateToProps)(Status)

//for redux what would be best for now would be to map state to props.