import React, { useState, useEffect } from 'react';
import Hero from '../Components/Hero';
import axios from 'axios';



const Main = () => {

    const URL = "https://api.igdb.com/v4/";
    const CLIENT_ID = 'hrzf8o4fbczm6rmv9c7a4h8pji5vzs';
    const CLIENT_SECRET = 'dvxjkxhrl3j24kk7j4cs6c5y9cqod8';
    const [games, setGames] = useState([]);
    let token = "";

    const generateKey = () => {
        const URL = `https://id.twitch.tv/oauth2/token`
        axios({
            url: URL,
            method: 'POST',
            params: {
                client_id: CLIENT_ID,
                client_secret: CLIENT_SECRET,
                grant_type: 'client_credentials'
            }
        })  .then(res => token = res.data.access_token)
            .catch(err => console.log(err));
    }

    const searchGames = (search) => {

        if (!search) {
            search = "";
        }
        generateKey();
        axios({
            url: `${URL}search`,
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Accept': 'application/json',
                'Client-ID': CLIENT_ID,
                'Authorization': `Bearer ${token}`,
                'Access-Control-Allow-Origin': 'http://localhost:3000/',
                'Content-Type': 'application/json'  
            },
            data: `fields *; search ${search}; limit 50;`
        })  .then(res => console.log(res))
            .catch(err => console.log(err));


    }




    return (
        <div className="background">
            <Hero
                searchGames={searchGames}
            />
        </div>
    )
}

export default Main
