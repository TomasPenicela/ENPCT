import React from "react";
import "./style.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaLocationArrow,
  FaYoutube,
  FaCaretRight,
} from "react-icons/fa";
import { motion } from 'framer-motion'

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="info">
          <h1>Informação </h1>

          <div className="location">
            <div className="local">
              <motion.div className="icon">
                <FaLocationArrow />
              </motion.div>
              <h5>
                Estrada nacional N1, km 60 Manhiça,
                <br />
                Maluana, Maputo, Moçambique{" "}
              </h5>
            </div>

            <div className="local">
              <div className="icon">
                <FaEnvelope></FaEnvelope>
              </div>
              <h5>info@enpct.org.mz</h5>
            </div>

            <div className="local">
              <div className="icon">
                <FaPhoneAlt></FaPhoneAlt>
              </div>
              <h5>(+258) 21 811 2206</h5>
            </div>
          </div>
        </div>

        <div className="links">
          <h1>Links</h1>
          <ul>
            <li>
              <a href="https://mail.enpct.org.mz/">
                <FaCaretRight className="icon-footer" />
                Webmail
              </a>
            </li>
            <li>
              <a href="#">
                <FaCaretRight className="icon-footer" />
                Acervo Digital
              </a>
            </li>
            <li>
              <a href="http://172.25.81.18:81/redmine/">
                <FaCaretRight className="icon-footer" />
                Gestor de Tarefas
              </a>
            </li>
            <li>
              <a href="#">
                <FaCaretRight className="icon-footer" />
                Maluana Bytes
              </a>
            </li>
          </ul>
        </div>

        <div className="company">
          <h1>Junte-se à nos</h1>
          <ul>
            <li>
              <a href="/noticias">
                <FaCaretRight className="icon-footer" />
                Notícias
              </a>
            </li>
            <li>
              <a href="servicos">
                <FaCaretRight className="icon-footer" />
                Serviços
              </a>
            </li>
            <li>
              <a href="parques">
                <FaCaretRight className="icon-footer" />
                Parques
              </a>
            </li>
            <li>
              <a href="sobre">
                <FaCaretRight className="icon-footer" />
                Sobre Nós
              </a>
            </li>
            <li>
              <a href="contacto">
                <FaCaretRight className="icon-footer" />
                Contacto
              </a>
            </li>
          </ul>
        </div>

        <div className="social-media">
          <h1>Empresa</h1>
          <div className="social-media-icons">
            <a href="https://www.facebook.com/Empresa-Nacional-De-Parques-De-Ci%C3%AAncia-E-Tecnologia-EP-104669528474077">
              <FaFacebook />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
            <a href="#">
              <FaYoutube />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href=" https://wa.me/258844467337">
              <FaWhatsapp />
            </a>
          </div>
          <p>
            Partilhe nossas preocupações em suas redes <br />
            sociais
          </p>
          <div className="formFooter">
            <div className="icon">
              <FaEnvelope />
            </div>
            <input type="email" name="email" id="mail" />
            <a className="button" href="info@enpct.org.mz">Enviar</a>
          </div>
        </div>
      </footer>
      <div className="copyright">
        <h1>© 2023 ENPCT E.P. Todos os direitos reservados</h1>
      </div>
    </>
  );
}

export default Footer;
