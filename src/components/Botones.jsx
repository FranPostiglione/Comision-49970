import useCount from "./useCount";

const Botones = () => {
    const {counter, reset, increment, decrement} = useCount(1, 1, 10);

    return (
        <div className="row my-1">
            <div className="col-md-2">
                    <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-dark" onClick={decrement}>-</button>
                            <button type="button" className="btn btn-dark">{counter}</button>
                            <button type="button" className="btn btn-dark" onClick={increment}>+</button>
                            <button type="button" className="btn btn-dark" onClick={reset}>Reset</button>
                        </div>
                    </div>
            <div className="row my-1">
                <div className="col-md-2">
                    <button type="button" className="btn btn-dark">Agregar al carrito</button>
                </div>
            </div>
            </div>
        
            

    )
}

export default Botones;