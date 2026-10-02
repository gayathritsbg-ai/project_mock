import { useState } from "react";
import { Link } from "react-router-dom";

import {
  FiSearch,
  FiShoppingBag,
  FiUser,
  FiMenu,
  FiX,
} from "react-icons/fi";

import { useCart } from "../context/CartContext";

function Navbar({ onCartClick }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const { cartItems } = useCart();

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="navbar">

      <div className="nav-container">

        <div className="logo">
          Furniro<span>.</span>
        </div>


        <nav
          className={
            menuOpen
              ? "nav-links active"
              : "nav-links"
          }
        >

          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/shop"
            onClick={() => setMenuOpen(false)}
          >
            Shop
          </Link>

          <Link
  to="/"
  onClick={() => setMenuOpen(false)}
>
  About
</Link>

          <Link
  to="/contact"
  onClick={() => setMenuOpen(false)}
>
  Contact
</Link>

        </nav>


        <div className="nav-icons">

          <Link to="/" className="nav-user">
  <FiUser />
</Link>


          <Link to="/shop" className="nav-search">
  <FiSearch />
</Link>


         <button
  className="cart-icon"
  onClick={onCartClick}
>
  <FiShoppingBag />

  {cartCount > 0 && (
    <span className="cart-count">
      {cartCount}
    </span>
  )}
</button>


          <button
            className="menu-btn"
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
          >

            {menuOpen ? (
              <FiX />
            ) : (
              <FiMenu />
            )}

          </button>

        </div>

      </div>

    </header>
  );
}

export default Navbar;