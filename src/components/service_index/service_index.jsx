import Button from '../globals/Button';
import '../service_index/service_index.css'
import { FaCertificate, FaCode, FaFolderOpen, FaTrain, FaUserGraduate, FaToolbox} from 'react-icons/fa'
import { motion } from 'framer-motion'

function Service_Index() {
  const item = {
    hidden: { y: 20, opacity: 0},
    visible: {
      y: 0,
      opacity: 1
    }
  }
  return (
    <>
      <div className="servicos">
        <h1>Serviços</h1>
        <div className="service-container">
          <div className="card-container">
            <div className="card">
              <motion.div item className="icon">
                <FaUserGraduate />
              </motion.div>
              <h2>
                Treinamento <br />
                Profissional
              </h2>
            </div>
          </div>
          <div className="card-container">
            <div className="card">
              <div className="icon">
                <FaCertificate />
              </div>
              <h2>
                Certificação <br />
                Profissional
              </h2>
            </div>
          </div>
          <div className="card-container">
            <div className="card">
              <div className="icon">
                <FaToolbox  />
              </div>
              <h2>
                Incubara de
                <br />
                Empresas
              </h2>
            </div>
          </div>
          <div className="card-container">
            <div className="card">
              <div className="icon">
                <FaCode />
              </div>
              <h2>
                Desenvolvimento e<br />
                Consultoria de TI
              </h2>
            </div>
          </div>
        </div>
        <Button to="/servicos">SOLICITAR</Button>
      </div>
    </>
  );
}

export default Service_Index;