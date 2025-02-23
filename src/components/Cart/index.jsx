import "./index.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export function Cart() {
    const {
        cartItems,
        decreaseQuantity,
        increaseQuantity,
        removeFromCart,
        clearCart,
        totalPrice,
    } = useContext(CartContext);

    if (cartItems.length === 0) {
        return (
            <div>
                <p>Корзина пуста</p>
            </div>
        );
    }

    return (
        <div>
            {cartItems.map(({ product, quantity }) => (
                <div key={product.id} className="cart-item">
                    <img src={product.image} alt={product.title} />
                    <div className="cart-info">
                        <p className="cart-title">{product.title}</p>
                        <p>${product.price}</p>
                        <div className="cart-quantity">
                            <button
                                onClick={() => decreaseQuantity(product.id)}
                            >
                                -
                            </button>
                            <span>{quantity}</span>
                            <button
                                onClick={() => increaseQuantity(product.id)}
                            >
                                +
                            </button>
                        </div>
                    </div>
                    <button
                        className="remove-btn"
                        onClick={() => removeFromCart(product.id)}
                    >
                        ✖
                    </button>
                </div>
            ))}
            <div className="cart-footer">
                <h3>Total: ${totalPrice.toFixed(2)}</h3>
                <button className="clear-btn" onClick={clearCart}>
                    Очистить корзину
                </button>
            </div>
        </div>
    );
}
