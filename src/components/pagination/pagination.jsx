import React from 'react'
import './style.css'
import  { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io'

const Pagination = () => 
{
  return (
    <section className="pagination">
        <h3>Página: </h3>

        <button>
            <p><IoMdArrowDropleft className='pg-arrow'/></p>
        </button>

        <button className='active-button'>
            <p>1</p>
        </button>

        <button>
            <p>2</p>
        </button>

        <button>
            <p>3</p>
        </button>

        <button>
            <p><IoMdArrowDropright className='pg-arrow'/></p>
        </button>
    </section>
  )
}

export default Pagination