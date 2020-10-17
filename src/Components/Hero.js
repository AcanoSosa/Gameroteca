import React from 'react'
import './Hero.css'

const Hero = (props) => {
    const {searchGames} = props;
    const detectarCambios = (evento) => {
        console.log(evento.target.value);
        searchGames(evento.target.value);
    }



    return (
        <div className="container cont-Hero">
            <div className="title-container">
                <p className="title">¿Aburrido?</p>
                <h1>Encontrar nuevos juegos está a un clic de distancia</h1>
            </div>
            <div className="input-group input-group-lg">
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" onChange={detectarCambios}/>
                </div>
        </div>
    )
}

export default Hero
