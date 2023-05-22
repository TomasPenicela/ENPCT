import { FaAddressCard, FaEnvelope, FaGlobe, FaInbox, FaLocationArrow, FaMailchimp, FaPhoneAlt, FaTextWidth } from 'react-icons/fa';
import './style.css'
import { FaRegBookmark } from 'react-icons/fa';

function Contacto() {

  return (
    <>
     
      <div className="contact">
      <div className="campo_texto">
        <h1>Contacto</h1>
      </div>
        <form action="">

          <div class="half">
            <div class="item">
              <label for="name">
                <div className="icon-contact"><FaInbox /></div>
                Nome</label>
              <input type="text" id="name" placeholder='Insira o nome'/>
            </div>
            <div class="item">
              <label for="email">
              <div className="icon-contact"><FaEnvelope /></div>
                Email</label>
              <input type="text" id="email" placeholder='user@email.com'/>
            </div>
            <div class="item">
              <label for="number">
              <div className="icon-contact"><FaPhoneAlt /></div>
                Celular</label>
              <input type="text" id="number" placeholder='(+258) 8x xxx xxxx'/>
            </div>
          </div>
          <div class="full">
            <label for="message">
            <div className="icon-contact"><FaInbox /></div>
              Mensagem</label>
            <textarea name="" id="message" placeholder='Por favor escreva aqui a sua mensagem'></textarea>
          </div>
            <a className="action" href="">ENVIAR</a>
       


        </form>

        <div className="more-info">
          <div className="card-address">
            <div className="icon">
              <FaLocationArrow />
            </div>
            <div className="txt">
            <h1>Endereço</h1>
            </div>
            
            <p>Estrada N.1, km 60 Manhiça, Maluana, Maputo, Moçambique  </p>
          </div>
          <div className="card-address">
            <div className="icon">
              <FaGlobe />
            </div>
            <div className="txt">
            <h1>Website</h1>
            </div>
            <p>http://www.enpct.org.mz</p>
          </div>
          <div className="card-address">
            <div className="icon">
              <FaPhoneAlt />
            </div>
            <div className="txt">
            <h1>Telefone </h1>
            </div>
            <p>(+258) 21 811 2206</p>
          </div>
          <div className="card-address">
            <div className="icon">
              <FaEnvelope />
            </div>
            <div className="txt">
            <h1>E-mail</h1>
            </div>
            <p>info@enpct.org.mz</p>
          </div>

        </div>

      </div>
    </>
  )
}

export default Contacto;