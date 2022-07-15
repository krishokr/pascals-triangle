import React from 'react';
import './welcome.css';


export default function Welcome(props) {

  return (
    <div className='welcome-container'>
        <h1>Pascal's Pastel Triangle</h1>
        <button className='begin-button' onClick={() => props.changeView()}>Begin</button>
    </div>
  )
}
