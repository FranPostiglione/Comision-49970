const ItemDetail = ({item}) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-2">
                   <div className="d-flex align-items-center">
                    <img src={item.image}  alt={item.title} className="img-fluid" /> 
                    </div>
                </div>
                <div className="col-md-4">
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <p><b>${item.price}</b></p>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;