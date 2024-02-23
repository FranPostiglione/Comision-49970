import { useEffect } from "react";
//import arrayProductos from "./json/productos.json"
import ItemList from "./ItemList";
import { useState } from "react";
import Carousel from "./Carousel";
import { useParams } from "react-router-dom";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import Loading from "./Loading";



const ItemListContainer = () => {
    const [items,setItems] = useState([]);
    const [loading,setLoading] = useState(true);
    const {id} = useParams();
    


    /*useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                resolve(id ? arrayProductos.filter(item => item.categoria === id) : arrayProductos);
            }, 500);
        })
        promesa.then(data => {
            setItems(data);
        })
    }, [id]); */

    //SUBIR AUTOMATICAMENTE LOS PRODUCTOS A FIREBASE
    /*useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection (db, "items");

        arrayProductos.forEach(producto => {
            addDoc(itemsCollection, producto);
        })
        console.log("Los productos se subieron correctamente");
    }, [])*/

    //LLamar los productos desde el firestore
    useEffect (() => {
        const db = getFirestore();
        const itemsCollection = collection (db, "items");
        const consulta = id? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        getDocs(consulta).then(resultado => {
            setLoading(false);
            setItems(resultado.docs.map(producto => ({id:producto.id, ...producto.data()})));
        });

    }, [id]);

    return (
        <>
            {id ? "" : <Carousel />}
            {loading ? <Loading /> : <ItemList items={items} />}
        </>
    )
}


export default ItemListContainer;