import { useContext, useState } from "react"; 
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const Checkout = () => {
    const [nombre, setNombre] = useState();
    const [email, setEmail] = useState();
    const [telefono, setTelefono] = useState();
    const [orderId, setOrderId] = useState();
    const {cart, clear, SumaTotalProductos} = useContext(CartContext);


    const generarOrden = () => {
        if (nombre.length === 0) {
            return false;
        }

        if (email.length === 0) {
            return false;
        }

        if (telefono.length === 0) {
            return false;
        }
    

    const buyer = {name:nombre, email:email, phone:telefono};
    const items = cart.map(item => ({id:item.idx, title:item.title, price:item.price}));
    const fecha = new Date();
    const date = `${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}`;
    const total = SumaTotalProductos();
    const order = {buyer:buyer, items:items, date:date, total:total};

    // Inserto Documento en Firestore
    const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then(resultado => {
            clear();
            setOrderId(resultado.id);
        });

}

    return (
        <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h1>Finalizar compra</h1>
                    </div>
                </div>
                <div className="row">
                        <div className="col-md-6">
                        <form>
                            <div className="mb-3">
                                <label className="form-label">Nombre</label>
                                <input type="text" className="form-control btn btn-secondary" onInput={(e) => {setNombre(e.target.value)}} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="text" className="form-control btn btn-secondary" onInput={(e) => {setEmail(e.target.value)}} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Teléfono</label>
                                <input type="text" className="form-control btn btn-secondary" onInput={(e) => {setTelefono(e.target.value)}} />
                            </div>
                            <button type="button" className="btn btn-dark" onClick={generarOrden}>Finalizar compra</button>
                    </form>
                        </div>
                    <div className="col text-center">
                        <table className="table">
                            <tbody>
                                {cart.map(product =>
                                    <tr key={product.id}>
                                        <td><img src={product.image} alt={product.title} width={80} /></td>
                                        <td>{product.title}</td>
                                        <td>${product.price}</td>
                                        <td>{product.quantity}</td>
                                        <td>${product.quantity * product.price}</td>
                                    </tr>
                                )}
                                <tr>
                                    <td colSpan={4}>Suma Total</td>
                                    <td>${SumaTotalProductos()}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                        <div className="row my-5">
                            <div className="col text-center">
                                {orderId ? <div class="alert alert-secondary text-center" role="alert">
                                    <h1>Gracias por su compra!!</h1>
                                    <h3>Tu codigo de compra es: <b>{orderId}</b></h3>
                                    <h4>En breve te estaremos mandando un mail con todos los detalles</h4>
                                    <Link to={"/"} className="btn btn-dark my-5">Volver a la Página Principal</Link>
                            </div>: ""}
                            </div>
                        </div>
                </div>
            </div>
    )
}
export default Checkout;