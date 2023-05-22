import { FaBars, FaCaretDown, FaCaretRight, FaCross } from "react-icons/fa";
import { WiDayCloudy } from "react-icons/wi";
import "./style.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "../globals/Button";
import { HiX } from 'react-icons/hi'



const NavBar = () => {
  const [city, setCity] = useState("");
  const [wheatherMax, setWheatherMax] = useState(0);
  const [wheatherMin, setWheatherMin] = useState(0);
  const [currency, setCurrency] = useState("");
  const [currencyBuy, setCurrencyBuy] = useState(0);
  const [currencySell, setCurrencySell] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [currencies, setCurrencies] = useState();
  const [selectedCurrency, setSelectedCurrency] = useState('ZAR');

  useEffect(() => {
    const getWeather = async () => {
      await navigator.geolocation.getCurrentPosition(async (position) => {
        fetch(
          `https://geocode.maps.co/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}`
        )
          .then((response) => response.json())
          .then((data) => setCity(data.address.city));

        fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&hourly=temperature_2m`
        ).then(async (response) => {
          const data = await response.json();
          const temperatures = data.hourly.temperature_2m;
          setWheatherMax(Math.max(...temperatures));
          setWheatherMin(Math.min(...temperatures));
        });
      });
    };

    
    getWeather();
  }, []);

  useEffect(() => {
    const getCurrencies = async () => {
      await fetch('https://api.exchangerate.host/latest?base=MZN')
          .then((response) => response.json())
        .then((data) => {
          setCurrencies(data.rates)
        });
    }
    getCurrencies();

  }, [])


  return (
    <nav className="nav-container">
      <div className="weather">
        <WiDayCloudy size={30}  color='#36c5cf' />
        <span>{`${city} MAX ${wheatherMax} *C | MIN ${wheatherMin} *C`}</span>
        
        {currency ? (
          <span>{`${currency} COMPRA ${currencyBuy} | VENDA ${currencySell}`}</span>
        ) : null}
        <div>
          <select className="select-currencies" value={selectedCurrency} onChange={(e) => setSelectedCurrency(e.target.value)}>
          {
            currencies ? Object.keys(currencies).map((key, index) => (
              <option>{key}</option>
            )): null}
        </select>
        <span>{currencies ? (1/currencies[selectedCurrency]).toFixed(2) : null} MZN</span></div>
      </div>
      <div className="navbar">
        <Link to="/">
          <a className="logo">
            <img src="/src/components/img/ENPCT_logo.png" alt="Logo da ENPCT" />
          </a>
        </Link>
        <div><ul>
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/sobre">Sobre Nós</Link>
          </li>
          <li>
            <Link to="/servicos">Serviços</Link>
          </li>
          <li>
            <Link to="/noticias">Notícias</Link>
          </li>

          <li>
          <a href='#'>Parques</a>
                     <ul className='menu'>
                        <Link to={'/parque-maluana'}><li><a href="#">PCT_Maluana</a></li></Link>
                        <Link to={'/parque-dombe'}><li><a href="#">PCT_Dombe</a></li></Link>
                        <Link to={'/parque-mocuba'}><li><a href="#">PCT_Mocuba</a></li></Link>
                        <Link to={'/parque-muereti'}><li><a href="#">PCT_Muereti</a></li></Link>
	       		          </ul>
          </li>

          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
          <li>
            <Link to="/galeria">Galeria</Link>
          </li>
          <li>
            <Link to="/documentos">Documentos</Link>
          </li>
        </ul></div>

        <div className="dropdown-login">

          <Button to="/login">Login</Button>
          <button
            className="toggle-btn"
            onClick={() => {
              setShowModal(!showModal);
            }}
            onBlur={() => setTimeout(() => {setShowModal(false)}, 300)}
          >
            {showModal ? <HiX size={20} /> : <FaBars size={20}/>}
          </button>
        </div>
      </div>

      {showModal ? (
        <div className="dropdown-menu open">
          <ul>
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/sobre">Sobre Nós</Link>
          </li>
          <li>
            <Link to="/servicos">Serviços</Link>
          </li>
          <li>
            <Link to="/noticias">Notícias</Link>
          </li>
          
          <li>
            <Link to="/parque_maluana">PCT_Maluana</Link>
          </li>

          <li>
            <Link to="/parque_dombe">PCT_Dombe</Link>
          </li>

          <li>
            <Link to="/parque_mocuba">PCT_Mocuba</Link>
          </li>

          <li>
            <Link to="/parque_muereti">PCT_Muereti</Link>
          </li>

          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
          <li>
            <Link to="/galeria">Galeria</Link>
          </li>
          <li>
            <Link to="/documentos">Documentos</Link>
          </li>
        </ul></div>
      ) : null}
    </nav>
  );
};

export default NavBar;


