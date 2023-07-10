
const ItemContador = ({ max, cantidad, setCantidad, agregar }) => {


    const sumar = () => {
        cantidad < max && setCantidad (cantidad +1)
    }

    const restar = () => {
        cantidad > 1 && setCantidad (cantidad -1)
    }

    return (

        <div>
            <button onClick={restar} className="btn_cont">-</button>
            <span className="mx-3">{cantidad}</span>
            <button 
            onClick={sumar} 
            className="btn_cont"
            disabled={cantidad === max}>+</button>
            <br/>
            <br/>
            <button onClick={agregar} className="btn">AÑADIR A LA CESTA</button>
        </div>
    )
}

export default ItemContador