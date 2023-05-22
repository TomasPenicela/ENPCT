import Button from '../globals/Button';
import '../home_index/home_index.css'
import { FaFileArchive, FaGlobe, FaGlobeAfrica, FaWrench } from 'react-icons/fa'
import { motion } from 'framer-motion';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';



function Home_Index() {
  return (
    <>
      <main>
        <div className="home">

          <motion.div className="home-h2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <h1>Empresa Nacional de Parques de Ciência e Tecnologia, E.P.</h1>
          </motion.div>

          <motion.div className="home-h3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>
            <h3>
              <span>A empresa</span> do futuro <span>já está em</span>{" "}
              Moçambique
            </h3>
          </motion.div>


          <motion.div className="btn" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <Button className=' btn-4 red' to="/contacto" >CONTACTO</Button>
            <Button>REGISTE-SE</Button>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }} className="card-contair">
            <div className="card">
              <div className="icon">
                <FaWrench />
              </div>
              <h5>Serviços</h5>
              <p>
                Treinamento Profissional
                <br />
                Certificação Profissional
                <br />
                Incubara de Empresas Desenvolvimento e Consultoria de TI
                <br />
              </p>
              <Button to="/servicos">SOLICITAR</Button>
            </div>

            <div className="card">
              <div className="icon">
                <FaGlobeAfrica />
              </div>
              <h5>Parques</h5>
              <p>
                Parque da Maluana
                <br />
                Parque de Mocuba
                <br />
                Parque de Muereti
                <br />
                Parque de Dombe
                <br />
              </p>
              <Button to="/parque-maluana">VISITAR</Button>
            </div>

            <div className="card">
              <div className="icon">
                <FaFileArchive />
              </div>
              <h5>Documentos</h5>
              <div className="documentos">
                <a
                  className="docs"
                  href="/src/components/documentos/Relatorio de contas.pdf"
                >
                  ENPCT-Contas.pdf
                </a>
                <a
                  className="docs"
                  href="/src/components/documentos/Relatorio de contas.pdf"
                >
                  valor gasto.pdf
                </a>
                <a
                  className="docs"
                  href="/src/components/documentos/Relatorio de contas.pdf"
                >
                  receita anual 2023.pdf
                </a>
              </div>
              <Button to="/documentos">VER MAIS</Button>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
}

export default Home_Index;