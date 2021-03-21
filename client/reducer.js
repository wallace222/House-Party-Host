const initialMusicState = {
    music: {
        songIndex: 0,
        time: 0,
        volume: 0,
    }
}

//how about this I just build 4 reducers 

const nextSongReducer = (state = initialMusicState, action) => {
    switch (action.type) {
        case 'NEXT_SONG':
            return {
                music: { ...action.music }
            }
            default:
                return state
    }
}


const previousSongReducer = (state = initialMusicState, action) => {
    switch (action.type) {
        case 'PREVIOUS_SONG':
            return {
                music: { ...action.music}
            }
    }
}


const storeMusicTimeReducer = (state = initialMusicState, action) => {
    switch (action.type) {
        case 'STORE_MUSIC_TIME':
            return {
                music: { ...action.music}
            }
    }
}



const adjustVolumeReducer = (state = initialMusicState, action) => {
    switch (action.type) {
        case 'NEW_VOLUME':
            return {
                music: { ...action.music}
            }
    }
}

