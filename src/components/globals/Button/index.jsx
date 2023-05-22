import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';


const Button = (props) => (
  <Link className={`btn-4 ${props.color ? 'red': 'blue'}`} to={props.to}>
    {props.children}
  </Link>
);

export default Button;