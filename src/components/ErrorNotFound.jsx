import React from 'react'
import img404 from '../img/error404.png' 


export const ErrorNotFound = () => {
  return (
    <div className='container'>
      <center>
        <br/>
        <h1 className='py-2' style={{fontFamily:"Helvetica"}}>PAGINA NO ENCONTRADA</h1>
        <img  src={img404} width="30%" height="285px" alt=''/>
      </center>
    </div>
  )
}
