import { useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "./context/CartContext";

const ItemDetail = ({item}) => {
    const {addItem} = useContext(CartContext);

    const onAdd = (quantity) => {
        addItem(item, quantity);
    }
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-2">
                   <div className="d-flex align-items-center">
                    <img src={item.image}  alt={item.title} className="img-fluid mt-5" /> 
                    </div>
                </div>
                <div className="col-md-5 mt-5">
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <p><b>${item.price}</b></p>
                    <ItemCount stock={item.stock} onAdd={onAdd} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;