import React from 'react'
import PlaylistsC from '../Components/PlaylistsC';
import './Playlists.css'


const Playlists = () => {
    return (
        <div>
            <div className="header">
                <div className="container">
                    <h2>Es momento de tener nuevas aventuras</h2>
                </div>
            </div>
            <div className="container">
            <div className="cont-play-title">
            <p className="play-title">Games to play</p>    
            </div>
            <PlaylistsC/>
            </div>
        </div>
    )
}

export default Playlists
