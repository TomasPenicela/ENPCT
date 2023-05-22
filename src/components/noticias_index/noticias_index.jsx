import '../noticias_index/noticias_index.css'
import { FaCode, FaFileArchive, FaFilePdf, FaGlobe, FaGlobeAfrica, FaHome, FaLinkedin, FaLinkedinIn, FaPhoneAlt, 
  FaRProject, FaSchool, FaServicestack, FaStopCircle, FaSwatchbook } from 'react-icons/fa'

function Noticias_Index() {
  return (
    <>
      <div className="noticias">

        <h1>Notícias</h1>

        <div className="noticias-container">
          <div className="card-noticia">
            <div className="imagem">
            <img src="/src/components/img/WhatsApp Image 2023-04-05 at 04.33.41 (1).jpeg" alt="Noticia Actual" />
            </div>
            <p>Visita de trabalho da sua Excelência Edson Da Graça Macuácua Vice-Ministro da Ciência, Tecnologia e Ensino Superior</p>
            <a href="#">ACTUAL</a>
          </div>

          <div className="card-noticia">
            <div className="imagem">
              <img src="/src/components/img/WhatsApp Image 2023-04-05 at 04.33.45.jpeg" alt="Noticia Actual" />
            </div>
            <p>Visita de trabalho da sua Excelência Edson Da Graça Macuácua Vice-Ministro da Ciência, Tecnologia e Ensino Superior</p>
            <a href="#">ACTUAL</a>
          </div>

          <div className="card-noticia">
            <div className="imagem">
              <img src="/src/components/img/WhatsApp Image 2023-02-27 at 15.05.49.jpeg" alt="Noticia Actual" />
            </div>
            <p>Visita de trabalho da sua Excelência Edson Da Graça Macuácua Vice-Ministro da Ciência, Tecnologia e Ensino Superior</p>
            <a href="#">ACTUAL</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Noticias_Index;