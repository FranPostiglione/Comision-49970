import { useEffect } from "react";
import arrayProductos from "./json/productos.json"
import ItemList from "./ItemList";
import { useState } from "react";
import Carousel from "./Carousel";
import { useParams } from "react-router-dom";
import Botones from "./Botones";
import ItemDetail from "./ItemDetail";


const ItemListContainer = () => {
    const [items,setItems] = useState([]);
    const {id} = useParams();
    


    useEffect(() => {
        const promesa = new Promise((resolve) => {
            
                resolve(id ? arrayProductos.filter(item => item.categoria === id) : arrayProductos) ;
            })
        
        promesa.then(data => {
            setItems(data)
            
        })
    }, [id]);

    return(
        <>
        <Carousel />
        <ItemList items={items} />
        </>
    )
}   


export default ItemListContainer;