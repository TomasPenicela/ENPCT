import './style.css'
import React from 'react'
import Header2 from '../headers/header2/header'
import { Link } from "react-router-dom";
import { VscCalendar } from 'react-icons/vsc'
import { FiClock } from 'react-icons/fi'


import img3 from '../../assets/img/gallery/03.jpg'
import img1 from '../../assets/img/gallery/01.jpeg'


const Gallery = () => {
  return (
    <>
        <Header2 name={'Galeria de fotos'}/>
        <section className="gallery">
            
            <div className="gallery-container">
                
                <Link to="" className='gallery-foto-video'>
                    <div className="gallery-image">
                        <img src={img1} alt="" />
                        {/* <button>Mais</button> */}
                    </div>
                    <div className="gallery-description">
                        <h3 className="gallery-title">A visita do vice-ministro</h3>
                        <p className="gallery-data">
                            <VscCalendar className='notice-data-calendar'/>03/04/2023 
                            <FiClock className='notice-data-clock'/>13:30
                        </p>
                    </div>
                </Link>

                <Link to="" className='gallery-foto-video'>
                    <div className="gallery-image">
                        <img src={img3} alt="" />
                        {/* <button>Mais</button> */}
                    </div>
                    <div className="gallery-description">
                        <h3 className="gallery-title">O nosso dia 7 de Abril</h3>
                        <p className="gallery-data">
                            <VscCalendar className='notice-data-calendar'/>07/04/2023 
                            <FiClock className='notice-data-clock'/>10:00
                        </p>
                    </div>
                </Link>

                <Link to="" className='gallery-foto-video'>
                    <div className="gallery-image">
                        <img src="https://4kwallpapers.com/images/walls/thumbs/10860.jpg" alt="" />
                        {/* <button>Mais</button> */}
                    </div>
                    <div className="gallery-description">
                        <h3 className="gallery-title">A visita do vice-ministro</h3>
                        <p className="gallery-data">CA 03/04/2023 H 13:30</p>
                    </div>
                </Link>

                <Link to="" className='gallery-foto-video'>
                    <div className="gallery-image">
                        <img src="https://4kwallpapers.com/images/walls/thumbs/10860.jpg" alt="" />
                        {/* <button>Mais</button> */}
                    </div>
                    <div className="gallery-description">
                        <h3 className="gallery-title">A visita do vice-ministro</h3>
                        <p className="gallery-data">CA 03/04/2023 H 13:30</p>
                    </div>
                </Link>

            </div>
        </section>
    </>
    
  )
}

export default Gallery