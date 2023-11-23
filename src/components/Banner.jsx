import React from 'react'
import img_banner_1 from '../img/img_banner_1.jpg'
import img_banner_2 from '../img/img_banner_2.jpg'
import img_banner_3 from '../img/img_banner_3.jpg'

export const Banner = () => {
  return (
    <div className='container' style={{marginTop:20, marginBottom:20}}>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={img_banner_1} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={img_banner_2} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={img_banner_3} className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

    
    </div>
  )
}
