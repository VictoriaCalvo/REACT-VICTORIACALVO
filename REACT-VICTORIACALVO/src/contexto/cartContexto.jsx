import { useState, createContext } from "react";

export const CartContexto = createContext()

export const CartProveedor = ({ children }) => {


    const [cart, setCart] = useState([])

    const agregarAlCarrito = (item) => {

        setCart([...cart, item])
    }

    const estaEnCart = (id) => {

        return cart.some((prod) => prod.id === id)

    }

    const totalCompra = () => {

        return cart.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0)

    }

    const vaciarCarrito = () => {
        setCart([])
    }

    const eliminarProducto = (id) => {
        setCart(cart.filter((prod) => prod.id !== id))
    }

    const totalCantidad = () => {
        return cart.reduce ((acc, prod) => acc + prod.cantidad, 0)
    }

    return (

        <CartContexto.Provider value={{
            cart, 
            agregarAlCarrito,
            estaEnCart,
            totalCompra,
            vaciarCarrito,
            eliminarProducto,
            totalCantidad
        }}>

            {children}

        </CartContexto.Provider>
    )
}