import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items)
    return (
        <div className="mt-4">
            <h2 className="text-center font-bold text-2xl">Items In My Cart</h2>
            <div>
                {cartItems.length === 0 ? <p className="text-center py-5">No item in the cart</p> : cartItems.map(item => <CartItem key={item?.info?.id} {...item?.info} />)}
            </div>
        </div>
    )
};

export default Cart;