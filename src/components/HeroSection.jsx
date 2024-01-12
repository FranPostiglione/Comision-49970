import remeraportada from "../assets/remeras-portada.jpg"
import hoddies from "../assets/hoddies.jpg"
import joggers from "../assets/joggers.jpg"
import { useState } from "react"


const HeroSection = () => {
    const [texto,settexto]= useState ("");
  
    const modificarTexto = () => {
      settexto("No hay remeras disponibles en este momento")
    }

    return (
        <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src={remeraportada} alt="remera" height={800} width={1700} className="d-block" />
                  <div className="carousel-caption d-none d-md-block">
                        <h2>REMERAS</h2>
                        <p><button onClick={modificarTexto} className="btn btn-primary b-}">CONOCER</button></p>
    </div>
    </div>
    <div className="carousel-item">
        <img src={hoddies} alt="remera" height={900} width={1700} className="d-block" />
      <div className="carousel-caption d-none d-md-block">
        <h2>BUZOS</h2>
      </div>
    </div>
    <div>
    <div className="carousel-item">
        <img src={joggers} alt="remera" height={800} width={1700} className="d-block" />
      <div className="carousel-caption d-none d-md-block">
        <h2>JOGGERS</h2>
      </div>
    </div>
  </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<h1>{texto}</h1>
    </div>
    )

  }
export default HeroSection;