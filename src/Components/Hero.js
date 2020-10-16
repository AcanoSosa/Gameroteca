import React from 'react'
import './Hero.css'

const Hero = () => {
    return (
        <div className="container cont-Hero">
            <div className="title-container">
                <p className="title">¿Aburrido?</p>
                <h1>Encontrar nuevos juegos está a un clic de distancia</h1>
            </div>
            <div className="input-group input-group-lg">
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
                </div>
        </div>
    )
}

export default Hero
