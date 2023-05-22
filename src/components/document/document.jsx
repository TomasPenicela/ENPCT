import React from 'react'
import './style.css'
import { HiMagnifyingGlass } from "react-icons/hi2";
import { HiOutlineDocumentText } from "react-icons/hi";
import Header2 from '../headers/header2/header'

const Document = () => {
  return (
    <>
        <Header2 name={'Documentos'}/>    
        <section className="document">
            {/* <form className="document-input-search">
                <input type="text" className='input-search-doc' placeholder='pesquisa...'/>
                <button>S</button>    
            </form> */}

            <form action="" className="search-form">
              <div className="header-form">
                <div className="search-group">
                  <select name="" id="" className='select-notice'>
                    <option value="Actual" >Actual</option>
                    <option value="Actual" >Recomendada</option>
                    <option value="Actual" >Actual</option>
                    <option value="Actual" >Actual</option>
                  </select>
                  <select name="" id="">
                    <option value="">Mes</option>
                    <option value="">Janeiro</option>
                    <option value="">Fevereiro</option>
                    <option value="">Março</option>
                    <option value="">Abril</option>
                    <option value="">Maio</option>
                    <option value="">Junho</option>
                    <option value="">Julho</option>
                    <option value="">Agosto</option>
                    <option value="">Setembro</option>
                    <option value="">Outubro</option>
                    <option value="">Novembro</option>
                    <option value="">Dezembro</option>
                  </select>

                  <select name="" id="">
                    <option value="">Ano</option>
                    <option value="">2023</option>
                    <option value="">2022</option>
                  </select>
                </div>

                <div className="search-group-b">
                  <input type="text" name='' id='' placeholder='pesquisar...' />
                  <button><HiMagnifyingGlass className='glass' /></button>
                </div>
              </div>
              
            </form>

            <div className="document-container">
                <div className="document-header">
                    <h3 className='document-icon'> </h3>
                    <h3 className='document-name'>Nome do document</h3>
                    <h3 className='document-size'>Tamanho</h3>
                    <h3 className='document-data'>Data da publicação</h3>
                    <h3 className='document-option'>Opção</h3>
                </div>
                <div className="document-body">
                    <div className="document-single">
                        <div className='document-icon'><HiOutlineDocumentText className='doc-icon'/></div>
                        <h3 className='document-name'>Plano anual.docx</h3>
                        <h3 className='document-size'>500 KB</h3>
                        <h3 className='document-data'>23 FEB 2023</h3>
                        <h3 className='document-option'><button>Download</button></h3>
                    </div>

                    <div className="document-single">
                        <div className='document-icon'><HiOutlineDocumentText className='doc-icon'/></div>
                        <h3 className='document-name'>Plano taxa.pdf</h3>
                        <h3 className='document-size'>125 kb</h3>
                        <h3 className='document-data'>22 feb 2023</h3>
                        <h3 className='document-option'><button>Download</button></h3>
                    </div>

                </div>
            </div>
        </section>
    </>
  )
}

export default Document