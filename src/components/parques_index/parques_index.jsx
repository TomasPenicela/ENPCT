import { Link } from 'react-router-dom';
import '../parques_index/parques_index.css'
import {FaGlobe } from 'react-icons/fa'

function Parques_Index() {
  return (
    <>
      <div className="parques">
        <h1>Parques</h1>

        <div className="parques-container">

          <div className="card-parque">
            <div className="icon"><FaGlobe /></div>
            <h1>PCTM</h1>
            <h2>Parque de Ciência e Teclonogias de Maluana - SUL</h2>

            <p>Maluana (Manhiça, Maputo)</p>
            <p>Segmentação: TICs</p>
            <Link to="/parque-maluana"><button>Ler Mais</button></Link>
          </div>

          <div className="card-parque">
            <div className="icon"><FaGlobe /></div>
            <h1>PCTD</h1>
            <h2>Parque de Ciência e Teclonogias de Dombe - CENTRO</h2>
            <p>Dombe (Sussundenga, Manica)</p>
            <p>Segmentação: Agronegócio</p>
            <Link to="/parque-dombe"><button>Ler Mais</button></Link>
          </div>
          
          <div className="card-parque">
            <div className="icon"><FaGlobe /></div>
            <h1>PCTM</h1>
            <h2>Parque de Ciência e Teclonogias de Mocuba - CENTRO</h2>
            <p>Mocuba (Mocuba, Zambézia)</p>
            <p>Segmentação: Agronegócio</p>
            <Link to="/parque-mocuba"><button>Ler Mais</button></Link>
          </div>
          <div className="card-parque">
            <div className="icon"><FaGlobe /></div>
            <h1>PCTM</h1>
            <h2>Parque de Ciência e Teclonogias de Muereti - NORTE</h2>
            <p>Muereti (Nacala-aVelha, Nampula)</p>
            <p>Segmentação: Transporte e Logística</p>
            <Link to="/parque-muereti"><button>Ler Mais</button></Link>
          </div>
        </div>
      </div>

    </>
  )
}

export default Parques_Index;