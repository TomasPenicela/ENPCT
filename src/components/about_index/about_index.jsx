import '../about_index/about_index.css'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { motion, useTransform, useViewportScroll} from 'framer-motion'

function About_Index() {
const { scrollYProgress } = useViewportScroll();
const scale = useTransform(scrollYProgress, [0.0500, 0.1472], [0, 1]);


  
  return (
    <>
      {/* Sobre Nos */}
      <motion.div  style={{ scale }} className="sobre-nos">
        <h1>Sobre Nós</h1>

        <div className="content">
          <motion.div className="content-text">
            <h3>
              Por Decreto 21/2012 de 6 de Julho foi criada a Empresa Nacional de Parques de Ciência e
              Tecnologia E.P. abreviadamente designada ENPCT E.P. e aprovados os respectivos Estatutos.
              A ENPCT E.P. é uma pessoa colectiva de direito público, dotada de personalidade jurídica
              e com autonomia administrativa, financeira e patrimonial.
            </h3>

          </motion.div>
          <div className="content-img">
            <img class="img-1" src="/src/components/img/09.jpg" alt="Logo da ENPCT" />
            <img class="img-1" src="/src/components/img/13.gif" alt="Logo da ENPCT" />
          </div>
          <div className="social-class">
            <FaFacebook className="icon" />
            <FaInstagram className="icon" />
            <FaLinkedin className="icon" />
          </div>

        </div>
        <div className="see-more">
          <button className="btn-4">ver mais</button>
        </div>




      </motion.div>
    </>
  )
}

export default About_Index;