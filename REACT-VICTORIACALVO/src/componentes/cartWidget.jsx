import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContexto } from '../contexto/cartContexto';
import '../estilos/cartWidget.scss'

const CartWidget = () => {

    const { cart, totalCantidad} = useContext (CartContexto)

    return (

        <Link to='/Cart' className={`carrito ${cart.length > 0 ? 'cart_widget_active' : ''}`}>
            <ShoppingCartOutlinedIcon/>
            <span className='cartItemNum'>{totalCantidad()}</span>
        </Link>

        // <div className="cartWidgetContainer">
        //     <ShoppingCartOutlinedIcon color='black'/>
        //     <span className='cartItemNum'>0</span>
        // </div>

    )
}

export default CartWidget