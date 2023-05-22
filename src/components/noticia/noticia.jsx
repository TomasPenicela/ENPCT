import React from 'react'
import { useLocation } from 'react-router-dom'
import './style.css'
import { VscCalendar } from 'react-icons/vsc'
import { FiClock } from 'react-icons/fi'
import Header2 from '../headers/header2/header'

const Noticia = () => 
{
    const location = useLocation()
    const data = location.state

    console.log(data)
  return (
    <>
        <Header2 name={'Notícia'} />
        <section className='new-notice'>
            <div className="notice-header">
                <h2 className='notice-title'>{data.titulo}</h2>
                <p className='notice-data'>
                    <VscCalendar className='notice-data-calendar'/>{data.data} 
                    <FiClock className='notice-data-clock'/>{data.hora}
                </p>

                <div className="notice-img">
                    <img src={data.imagem} alt="" />
                    <div className="notice-capa"></div>
                    <p className='notice-status'>{data.status}</p>
                </div>
            </div>
            <div className="notice-description">
                
                <div className="notice-text">
                    <h4 className='notice-text title'>{data.titulo}</h4>
                    <p className='notice-text text'>{data.text}</p>
                </div>

                <div className="notice-sidebar">
                    <h5 className="sidebar-notice-title">
                        Notícias Relacionadas
                    </h5>

                    <div className="anather-notices">

                        <div className="another-notice">

                            <div className="another-img">
                                <img src="https://4kwallpapers.com/images/walls/thumbs/10860.jpg" alt="" />
                            </div>
                            <div className="another-description">
                                <p className="another-title">Invensao de novas tecnologia Invensao de novas tecnologia</p>
                                <p className="another-font">Publicado por ENPCT</p>
                                <p className='another-data'><VscCalendar className='another-calendar'/> 20/03/2023 <FiClock className='another-clock'/> 20:30</p>
                            </div>


                            
                        </div>

                        <div className="another-notice">

                            <div className="another-img">
                                <img src="https://4kwallpapers.com/images/walls/thumbs/10860.jpg" alt="" />
                            </div>
                            <div className="another-description">
                                <p className="another-title">Invensão de novas tecnologia</p>
                                <p className="another-font">Publicado por ENPCT</p>
                                <p className='another-data'><VscCalendar className='another-calendar'/> 20/03/2023 <FiClock className='another-clock'/> 20:30</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    </>
    
  )
}

export default Noticia