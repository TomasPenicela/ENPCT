import '../parceiros_index/parceiros_index.css'
import { FaCode, FaFileArchive, FaFilePdf, FaGlobe, FaGlobeAfrica, FaHome, FaLinkedin, FaLinkedinIn, FaPhoneAlt, 
  FaRProject, FaSchool, FaServicestack, FaStopCircle, FaSwatchbook } from 'react-icons/fa'
import  Carousel  from  'react-elastic-carousel' ;
import  React ,  {  Componente  }  from  'react' ; 
import { dados } from './datas'


function Parceiros_index() {
  return (
    <>
    {/* Parceiros  */}

      <div className="parceiros">
        <h1>Nossos Parceiros</h1>
        <div className="parceiros-container">

        <Carousel  className='carousel'
          infinitity ={true}
          itemsToShow={3} 
          enableSwipe={true} 
          showArrows={false} 
          enableAutoPlay={true} 
          autoPlaySpeed={5000} 
          isRTL={false} 
          itemsToScroll={1}

           breakPoints = {[
              { width: 375, itemsToShow: 2 },
              { width: 768, itemsToShow: 4 },
              { width: 1024, itemsToShow: 5 },
              { width: 1200, itemsToShow: 7 },
          ]}
          isInfinity={true}
          >
        {
          dados.map((item) => (
          <div className="card-container">
            <div className="imagem">
              <a href="#"><img src={item.image} alt={item.name} /></a>
            </div>
            <p>{item.name}</p>
          </div>
        ))}

        </Carousel>
        </div>
      </div>



    </>
  )
}

export default Parceiros_index;