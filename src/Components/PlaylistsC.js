import React from 'react'
import '../Components/PlaylistsC.css'

const Playlists = () => {
    return (
        <div className="card">
            <img src="..." className="card-img" alt="..." />
            <div className="card-bodyn card-g">
                <h5 className="card-title">Titulo del juego</h5>
                <p className="card-text"> Descripción Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div className="tag-cont">
                <span class="badge badge-secondary">New</span> <span class="badge badge-secondary">New</span>
                </div>
                <a href="#" class="btn btn-primary">Marcar como terminado</a>
            </div>
        </div>
    )
}

export default Playlists
