import { useContext } from "react";
import cart3 from "../assets/cart3.svg"
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const {CantTotalProductos} = useContext(CartContext);

    return (
        CantTotalProductos() > 0 ? <Link to={"/Cart"} className="btn btn-lightning position-relative">
            <img src={cart3} alt="Carrito" width={24} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{CantTotalProductos()}</span>
        </Link> : "" 
    )
}

export default CartWidget;