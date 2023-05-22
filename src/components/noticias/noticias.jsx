import './style.css'
import { HiMagnifyingGlass } from "react-icons/hi2";
import { Link } from "react-router-dom";
import axios from "axios";
import Pagination from '../pagination/pagination';
import Header2 from '../headers/header2/header';
//import img3 from '../../assets/img/gallery/03.jpg'

import { databaseFake } from './dbfake'
import { useState } from 'react';


const Noticias = () =>{

  const [form, setForm] = useState({
    tipo: '',
    mes: '',
    ano:'',
    search: ''
  })

  const handleInputForm = (e) =>
  {
    //console.log(e.target)
    //console.log(e.target.name)
    form[e.target.name] = e.target.value
    setForm(form)
    console.log(setForm)

  }

  const handleSubmit = (e) =>
  {
    e.preventDefault()
    axios.post('http://localhost:8001/api', form)
    console.log(form)

  }


  return(
    <>
      <Header2 name={'Notícias'}/>
      <section className='notices'>

          <form className="search-form" onSubmit={handleSubmit}>
              <div className="header-form">
                <div className="search-group">
                  
                  <select name="tipo" id="tipo" className='select-notice' onChange={handleInputForm}>
                    <option value="Actual" >Actual</option>
                    <option value="Recomendada" >Recomendada</option>
                  </select>

                  <select name="mes" id="mes" onChange={handleInputForm}>
                    <option value="">Mes</option>
                    <option value="Janeiro">Janeiro</option>
                    <option value="Fevereiro">Fevereiro</option>
                    <option value="Março">Março</option>
                    <option value="Abril">Abril</option>
                    <option value="Maio">Maio</option>
                    <option value="Junho">Junho</option>
                    <option value="Julho">Julho</option>
                    <option value="Agosto">Agosto</option>
                    <option value="Setembro">Setembro</option>
                    <option value="Outubro">Outubro</option>
                    <option value="Novembro">Novembro</option>
                    <option value="Dezembro">Dezembro</option>
                  </select>

                  <select name="ano" id="ano" onChange={handleInputForm}>
                    <option value="">Ano</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                  </select>
                </div>

                <div className="search-group-b">
                  <input type="text" name='search' id='search' placeholder='pesquisar...' onChange={handleInputForm} />
                  <button type='submit'><HiMagnifyingGlass className='glass' /></button>
                </div>
              </div>
              
          </form>

          <div className="notice-content" >
            {databaseFake.map((notice) =>{
              return(
                <Link className='notice' to={"/noticia"} key={notice.id} state={notice} >
                  <div className="img">
                    <img src={notice.imagem} alt="" />
                    <div className="capa"></div>
                  </div>
                  <div className="description">
                    <p className="state">{notice.status}</p>
                    <div>
                      <h3>{notice.titulo}</h3>
                      <p>{notice.descricao}</p>
                    </div>
                    
                    <p className='pub'><span></span>{notice.data}</p>
                  </div>
              </Link>
              )
            })}
            

              {/* <Link to="" className='notice'>
                <div className="img">
                  <img src="https://4kwallpapers.com/images/walls/thumbs/10860.jpg" alt="" />
                  <div className="capa"></div>
                </div>
                <div className="description">
                  <p className="state">Actual</p>
                  <div>
                    <h3>Inscrições abertas para treinamento profissional</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    </p>
                  </div>
                  
                  <p className='pub'><span></span>Hoje</p>
                </div>
              </Link> */}

          </div>

         
      </section>
      <Pagination />
    </>
  )
}

export default Noticias