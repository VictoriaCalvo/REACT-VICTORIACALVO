import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const CartWidget = () => {

    return (
        <div className="cartWidgetContainer">
            <ShoppingCartOutlinedIcon color='black'/>
            <span className='cartItemNum'>0</span>
        </div>

    )
}

export default CartWidget