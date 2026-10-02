import { useState } from "react";
import { useCart } from "../context/CartContext";

function Checkout() {
  const { cartItems } = useCart();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    phone: "",
    email: "",
  });

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Order placed successfully!");

    console.log("Customer Details:", formData);
    console.log("Order Items:", cartItems);
  };

  return (
    <section className="checkout-page">

      <div className="checkout-container">

        <div className="checkout-heading">
          <h1>Checkout</h1>
          <p>Complete your order details.</p>
        </div>


        <form
          className="checkout-layout"
          onSubmit={handleSubmit}
        >

          {/* Billing Details */}

          <div className="billing-section">

            <h2>Billing Details</h2>


            <div className="form-row">

              <div className="form-group">

                <label>First Name</label>

                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="form-group">

                <label>Last Name</label>

                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>


            <div className="form-group">

              <label>Address</label>

              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows="4"
                required
              ></textarea>

            </div>


            <div className="form-row">

              <div className="form-group">

                <label>City</label>

                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="form-group">

                <label>State</label>

                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>


            <div className="form-row">

              <div className="form-group">

                <label>PIN Code</label>

                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="form-group">

                <label>Phone</label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>


            <div className="form-group">

              <label>Email Address</label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

            </div>

          </div>


          {/* Order Summary */}

          <div className="checkout-summary">

            <h2>Your Order</h2>


            {cartItems.map((item) => (

              <div
                className="checkout-item"
                key={item.id}
              >

                <div>

                  <strong>
                    {item.name}
                  </strong>

                  <span>
                    × {item.quantity}
                  </span>

                </div>

                <strong>
                  ₹
                  {(
                    item.price * item.quantity
                  ).toLocaleString()}
                </strong>

              </div>

            ))}


            <div className="checkout-line">
              <span>Subtotal</span>

              <strong>
                ₹{total.toLocaleString()}
              </strong>
            </div>


            <div className="checkout-line">
              <span>Shipping</span>

              <strong>Free</strong>
            </div>


            <div className="checkout-total">

              <span>Total</span>

              <strong>
                ₹{total.toLocaleString()}
              </strong>

            </div>


            <button
              type="submit"
              className="place-order-btn"
            >
              Place Order
            </button>

          </div>

        </form>

      </div>

    </section>
  );
}

export default Checkout;