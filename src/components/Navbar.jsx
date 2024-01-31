import LogoPagina from "../assets/LogoPagina.jpg";
import Carrito from "../assets/cart3.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="container">
           <div className="row">
            <div className="col">
                <img src="" alt="" />
            </div>
            <div className="col">
            <nav className="navbar bg-body-tertiary fixed-top">
        <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Indumentaria</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/categoria/remeras">Remeras</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/categoria/buzos">Buzos</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/categoria/zapatillas">Zapatillas</Link>
          </li>
        </ul>
      </div>
    </div>
    <Link to= {"/"}>
    <img src={LogoPagina} alt="LogoTienda" width={100} />
    </Link>
    <img src={Carrito} alt="CarritoLogo" width={30}/>
  </div>
</nav>
  </div>
  </div> 
            </div>
    )
}

export default Navbar;