import { cartContext } from "../components/CartContext";
import { useContext } from 'react';
import { Button } from "@mui/material";
import { Link } from "react-router-dom"


const Cart = () => {

    const useCartContext = useContext(cartContext);
    const { cart, deleteFromCart, clearCart, totalPrice, totalProds, cartCheckout } = useCartContext;

    return (
        <>
            <div id="cartBackground">
                {cart.length == 0 ? <Link className="styleRemove flexCart" to="/"><Button className="cartIsEmpty dropShadow" color="inherit"><h2>Su carrito se encuentra vacío! Click aquí para volver a la tienda</h2></Button></Link> :
                    <>{
                        cart.map(item => (
                            <div key={item.product.id} id="cart" className="dropShadow">
                                <div className="cartText">
                                    <img src={item.product.img} />
                                    <span><h3>Producto:</h3><p>{item.product.name}</p></span>
                                    <span><h3>Precio y Cantidad: </h3><p> ${item.product.price} x {item.count} unidad(es)</p></span>
                                    <span><h3>Total:</h3> <p>${item.product.price * item.count}</p></span>
                                </div>
                                <div className="cartButtons">
                                    <Button onClick={() => deleteFromCart(item.product)} variant="contained" color="error">Eliminar producto</Button>
                                </div>
                            </div>
                        ))
                    }
                        <div id="cart" className="dropShadow">
                            <div className="cartText">
                                <h3>Total a pagar: ${totalPrice}</h3>
                                <h3>Cantidad de productos: {totalProds}</h3>
                            </div>
                            <div className="cartButtons">
                                <Button onClick={cartCheckout} variant="contained" color="success">Confirmar compra</Button>
                                <Button onClick={clearCart} variant="contained" color="error">Eliminar</Button>
                            </div>
                        </div>
                    </>
                }
            </div>
        </>
    )
}

export default Cart