import React from 'react'
import PlaylistsC from '../Components/PlaylistsC';
import './Playlists.css'


const Playlists = () => {
    return (
        <div className="back-play">
            <div className="header background">
                <div className="container">
                    <h1>Es momento de tener nuevas aventuras</h1>
                </div>
            </div>
            <div className="container-fluid">
                <div className="cont-play-title">
                    <p className="play-title">Games to play</p>
                </div>
                <div className="card-container">
                <PlaylistsC />
                <PlaylistsC />
                </div>
            </div>
        </div>
    )
}

export default Playlists
