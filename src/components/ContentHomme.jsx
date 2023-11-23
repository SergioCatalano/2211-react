import React from 'react'
import card1 from '../img/card1.jpg'
import card2 from '../img/card2.jpg'
import card3 from '../img/card3.jpg'

export const ContentHomme = () => {
  return (

    <div className="container" style={{marginTop:70}}>
      <h1 className='h3'>Nuestros servicios</h1>
      <div className="row row-cols-1 row-cols-md-3">
              <div className="col">
                <div className="card">
                  <img src={card1} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Coding</h5>
                    <p className="card-text" style={{textAlign:"justify"}}>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img src={card2} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Design UX/UI</h5>
                    <p className="card-text" style={{textAlign:"justify"}}>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img src={card3} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Community Manager</h5>
                    <p className="card-text" style={{textAlign:"justify"}}>This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                  </div>
                </div>
              </div>
        
          </div>

    </div>
    
  )
}
