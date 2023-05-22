import '../administracao_index/administracao_index.css'
import { } from 'react-icons/fa'
import { dados } from './datas'
import React from "react";
import Carousel from "react-elastic-carousel";

function Administracao_Index() {

  return (
    <>

      {/*Parte da Administracao*/}

      <div className="slide-container">
        <h1>Conselho de Administração </h1>
        <div className="slide-content">

          <Carousel  className='carousel'
          infinitity ={true}
          itemsToShow={3} 
          enableSwipe={true} 
          showArrows={false} 
          enableAutoPlay={true} 
          autoPlaySpeed={9000} 
          isRTL={false} 
          itemsToScroll={1}
           breakPoints = {[
              { width: 500, itemsToShow: 1 },
              { width: 768, itemsToShow: 2 },
              { width: 1200, itemsToShow: 3 },
          ]}
          
          >
            {
              dados.map((item) => (
                
                  <div className="cardx">
                    <div className="image-content">
                      <span className="overlay"></span>

                      <div className="card-image">
                        <img src={item.image} alt={item.name} className="card-img"  />
                      </div>
                    </div>

                    <div className="card-content">
                      <h2 className="name">{item.name}</h2>
                      <p className="description-1">{item.profission}</p>
                      <p className="description">{item.message} </p>
                      <button className="button">{item.btn}</button>
                    </div>
                  </div>
              ))

            }
          </Carousel>

        </div>
      </div>

    </>
  )
}

export default Administracao_Index;