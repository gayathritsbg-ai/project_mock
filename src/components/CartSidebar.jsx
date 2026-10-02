import React from "react";
import { FiX, FiMinus, FiPlus, FiShoppingBag } from "react-icons/fi";

const cartItems = [
  {
    id: 1,
    name: "Syltherine",
    price: "Rp 2,500,000",
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 2,
    name: "Leviosa",
    price: "Rp 2,500,000",
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=300&q=80",
  },
];

function CartSidebar({ isOpen, onClose }) {
  return (
    <>
      {isOpen && (
        <div
          className="cart-sidebar-overlay"
          onClick={onClose}
        ></div>
      )}

      <aside
        className={`cart-sidebar ${
          isOpen ? "cart-sidebar-open" : ""
        }`}
      >

        {/* Header */}
        <div className="cart-sidebar-header">

          <div>
            <h2>Shopping Cart</h2>
            <span>{cartItems.length} Items</span>
          </div>

          <button
            className="cart-sidebar-close"
            onClick={onClose}
          >
            <FiX />
          </button>

        </div>

        {/* Cart Items */}
        <div className="cart-sidebar-items">

          {cartItems.map((item) => (
            <div
              className="cart-sidebar-item"
              key={item.id}
            >

              <img
                src={item.image}
                alt={item.name}
              />

              <div className="cart-item-info">

                <h3>{item.name}</h3>

                <p>{item.price}</p>

                <div className="cart-item-quantity">

                  <button>
                    <FiMinus />
                  </button>

                  <span>{item.quantity}</span>

                  <button>
                    <FiPlus />
                  </button>

                </div>

              </div>

              <button className="cart-item-remove">
                <FiX />
              </button>

            </div>
          ))}

        </div>

        {/* Empty space / bottom */}
        <div className="cart-sidebar-bottom">

          <div className="cart-sidebar-total">

            <span>Subtotal</span>

            <strong>Rp 5,000,000</strong>

          </div>

          <button className="cart-view-btn">
            <FiShoppingBag />
            View Cart
          </button>

          <button className="cart-checkout-btn">
            Checkout
          </button>

        </div>

      </aside>
    </>
  );
}

export default CartSidebar;