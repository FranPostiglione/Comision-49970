import Item from "./Item"

const ItemList = ({items}) => {
    //const [productos, setProductos] = UseState (items);

    return (
        <div className="containter my-5">
            <div className="row">
                {items.map(item => (
                    <Item key={item.id} item={item} />
        ))}
            </div>
        </div>
        
        )


}

export default ItemList;