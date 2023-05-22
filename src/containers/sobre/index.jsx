import '../sobre/style.css'
import { FaCode, FaGlobe, FaHome, FaPhoneAlt, FaSchool } from 'react-icons/fa'
import { MdVisibility } from 'react-icons/md'
import { AiFillStar } from 'react-icons/ai'


function Sobre() {

  return (
    <>
    <div className="sobre">
        
        <div className="text-container">
          <h1>Sobre Nós</h1>
        </div>
    
    <div class="timeline">
  <div class="container left">
    <div class="content">
      
      <p> Por Decreto 21/2012 de 6 de Julho foi criada a Empresa Nacional de Parques de Ciência e
                Tecnologia E.P. abreviadamente designada ENPCT E.P. e aprovados os respectivos Estatutos.
                A ENPCT E.P. é uma pessoa colectiva de direito público, dotada de personalidade jurídica
                e com autonomia administrativa, financeira e patrimonial.</p>
    </div>
  </div>

  <div class="container right">
    <div class="content">
      
      <p> A ENPCT E.P. é uma empresa de âmbito
                nacional, com sede em Maluana, Distrito da Manhiça, Província de Maputo, podendo abrir ou
                encerrar delegações ou outras formas de representação dentro do país ou no estrangeiro,
                carecendo de autorização da tutela sectorial, ouvida a tutela financeira.</p>
    </div>
  </div>

  <div class="container left">
    <div class="content">
      
      <p>A ENPCT tem por objecto a concepção, execução, construção, exploração e gestão de Parques
                de Ciência e Tecnologia em Moçambique.<br /><br /> A ENPCT são também espaços geográficos onde
                concentram se empresas, instituições de ensino, incubadoras de negócios, centros de
                pesquisa e laboratórios para a criação de um ambiente favorável a inovação tecnológica.</p>
    </div>
  </div>
  
  <div class="container right">
    <div class="content">
      
      <p>A essência dos Parques de Ciência e Tecnologia é de gerir o fluxo de conhecimento entre
                as IES e IIs, o sector privado e o Governo.
                O programa Nacional de Parques de Ciências e Tecnologia, prevê a construção de 4 parques
                de ciência e tecnologia ao logo do pais, podendo neste momento contar com a existe do
                Parque de Ciência e Tecnologia de Maluana e cita na província de Maputo.</p>
    </div>
  </div>

  <div class="container left">
    <div class="content">
    
      <p>A ENPCT E.P. é constituída por seguintes órgãos: O Conselho de Administração e O Conselho Fiscal.<br /><br />
                O Conselho de Administração da ENPCT E.P. é constituído por 5 membros, sendo um
                deles o presidente, dois Administradores Executivos indicados pela tutela sectorial e
                dois Administradores Não Executivos um indicado pela tutela financeira e outro eleito pelos trabalhadores.<br /><br />
                </p>
    </div>
  </div>
  
  <div class="container right">
    <div class="content">
      
      <p>O Conselho Fiscal é composto por três membros, sendo um deles o presidente e os restantes vogais.</p>
    </div>
  </div>
</div>

 <div className="card-container">
          <div className="card">
            <div className="icon"><FaGlobe /></div>
            <h5>MISSÃO</h5>
            <p >Promover e facilitar a inovação cientifica,
              tecnológica e empresarial através da concepção,
              construção exploração e gestão de
              parques de ciência e tecnologia em Moçambique.
            </p>


          </div>
          <div className="card">
            <div className="icon"><MdVisibility /></div>
            <h5>VISÃO</h5>
            <p>Ser referência global na promoção do desenvolvimento
              comunitário baseado no conhecimento e na inovação.
            </p>

          </div>
          <div className="card">
            <div className="icon"><AiFillStar /></div>
            <h5>VALORES</h5>
            <p>Integridade e Honestidade; Abertura e Respeito;
              Vontade de Abraçar Grandes Desafios; Inovadores e
              Inspiradores; Responsabilidade;
              Paixão por Tecnologia, Parceiros e Clientes.
            </p>

          </div>
        </div>

       

      </div>
      
    </>
  )
}

export default Sobre;