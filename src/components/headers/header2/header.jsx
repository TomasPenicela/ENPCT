import React from 'react'
import './styles.css'

function Header2(props) {
  return (
    <header className='header2'>
        <h2 className='header2-title'>
            {props.name}
        </h2>
    </header>
  )
}

export default Header2