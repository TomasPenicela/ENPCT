import './navBarWeather.css'
import axios from 'axios'
import { useState, useEffect } from 'react';
{/* const apiUrl  = 'http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={ecadfeb6914a6b5d2c4ad7eb39dcb34b}' */}

export default function NavBarWeather() {
    const [location, setLocation] = useState(false);   	
    const [weather, setWeather] = useState(false);

    let getWeather = async (lat, long) => {
        let res = await axios.get("http://api.openweathermap.org/data/2.5/weather", {
          params: {
            lat: lat,
            lon: long,
            appid: process.env.REACT_APP_OPEN_WHEATHER_KEY,
            lang: 'pt',
            units: 'metric'
          }
        });
        setWeather(res.data);
      } 

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            getWeather(position.coords.latitude, position.coords.longitude);
            setLocation(true)
        })
    }, [])

    if (location == false) {
        return (
            <>
                <h5>Você precisa habilitar a localização no browser</h5>
            </>
        )
    } else if (weather == false) {
        return (
          <Fragment>
            Carregando o clima...
          </Fragment>
        )
      } else {
        return (
          <>
            <h3>Clima nas suas Coordenadas ({weather['weather'][0]['description']})</h3>
            <hr/>
            <ul>
              <li>Temperatura atual: {weather['main']['temp']}°</li>
              <li>Temperatura máxima: {weather['main']['temp_max']}°</li>
              <li>Temperatura minima: {weather['main']['temp_min']}°</li>
              <li>Pressão: {weather['main']['pressure']} hpa</li>
              <li>Humidade: {weather['main']['humidity']}%</li>
            </ul>
          </>
        );
      }
    }

    
