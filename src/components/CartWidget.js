import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { cartContext } from "../components/CartContext";
import { useContext } from 'react';
import { Badge } from '@mui/material';

const CartWidget = () => {

    const useCartContext = useContext(cartContext);
    const { totalProds } = useCartContext;

    return (
        <>
            <Badge id="cartBadge" badgeContent={totalProds} color="info">
                <ShoppingCartOutlinedIcon />
            </Badge>
        </>
    )
}

export default CartWidget