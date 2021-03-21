import React from 'react'
//import store from '../store'//store does not exist yet because this is for future functionality.
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Playlist from 'react-mp3-player'

export default function MusicCompoent(props) {

    const beachwalkdes = 'original song found its fame from being the outro of the famous youtuber pyrocynical. However it has become such a staple of the vapourwave music genre that it represents the genre as a whole.'
    const tracks = [{ img : 'image source', name: 'beachwalk', desciption: beachwalkdes, src:'actual audio track'}]
    return (
        <>


        

        <h1> This is the music component </h1>

        
        </>
    )
}