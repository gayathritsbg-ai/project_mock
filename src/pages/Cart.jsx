import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
function Cart() {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <section className="cart-page">

      <div className="cart-container">

        <div className="cart-heading">
          <h1>Your Cart</h1>
          <p>Review your selected furniture.</p>
        </div>


        {cartItems.length === 0 ? (

          <div className="empty-cart">

  <h2>Your cart is empty</h2>

  <p>
    Add some beautiful furniture to your cart.
  </p>

  <Link
    to="/shop"
    className="continue-shopping-btn"
  >
    Continue Shopping
  </Link>

</div>

        ) : (

          <div className="cart-layout">

            {/* Cart Products */}

            <div className="cart-products">

              {cartItems.map((item) => (

                <div
                  className="cart-item"
                  key={item.id}
                >

                  <img
                    src={item.image}
                    alt={item.name}
                  />


                  <div className="cart-item-info">

                    <h3>{item.name}</h3>

                    <p>
                      {item.description}
                    </p>

                    <strong>
                      ₹{item.price.toLocaleString()}
                    </strong>

                  </div>


                  <div className="cart-quantity">

                    <button
                      onClick={() =>
                        decreaseQuantity(item.id)
                      }
                    >
                      <FiMinus />
                    </button>

                    <span>
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        increaseQuantity(item.id)
                      }
                    >
                      <FiPlus />
                    </button>

                  </div>


                  <div className="cart-subtotal">

                    <strong>
                      ₹
                      {(
                        item.price *
                        item.quantity
                      ).toLocaleString()}
                    </strong>

                  </div>


                  <button
                    className="remove-cart"
                    onClick={() =>
                      removeFromCart(item.id)
                    }
                  >
                    <FiTrash2 />
                  </button>

                </div>

              ))}

            </div>


            {/* Cart Summary */}

            <div className="cart-summary">

              <h2>Cart Totals</h2>

              <div className="summary-row">

                <span>Subtotal</span>

                <strong>
                  ₹{total.toLocaleString()}
                </strong>

              </div>


              <div className="summary-row">

                <span>Shipping</span>

                <strong>Free</strong>

              </div>


              <div className="summary-total">

                <span>Total</span>

                <strong>
                  ₹{total.toLocaleString()}
                </strong>

              </div>


              <Link
  to="/checkout"
  className="checkout-btn"
>
  Proceed to Checkout
</Link>

            </div>

          </div>

        )}

      </div>

    </section>
  );
}

export default Cart;