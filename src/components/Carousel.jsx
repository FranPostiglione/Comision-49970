import remeranikebanner from "../assets/remeranikebanner.jpg"
import Nikezapatillas from "../assets/Nikezapatillas.jpg"
import buzosnike from "../assets/buzosnike.jpg"

const Carousel = () => {
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
                    <img src={remeranikebanner} alt="remera" height={"50%"} width={"100%"} className="d-block" />
                        <div className="carousel-caption d-none">
                            <h2>REMERAS</h2>
                                
        </div>
                </div>
    <div className="carousel-item">
        <img src={Nikezapatillas} alt="remera" height={"100%"} width={"100%"} className="d-block" />
      <div className="carousel-caption d-none d-md-block">
        <h2>BUZOS</h2>
      </div>
    </div>
    <div>
    <div className="carousel-item">
        <img src={buzosnike} alt="remera" height={"100%"} width={"100%"} className="d-block" />
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
</div>
    )
}
export default Carousel;