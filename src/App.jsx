import { useState } from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { CartProvider } from "./context/CartContext";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CartSidebar from "./components/CartSidebar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Comparison from "./pages/Comparison";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <CartProvider>

      <BrowserRouter>

        <Navbar
  onCartClick={() => setIsCartOpen(true)}
/>
<CartSidebar
    isOpen={isCartOpen}
    onClose={() => setIsCartOpen(false)}
  />
        <Routes>

          {/* HOME */}
          <Route
            path="/"
            element={<Home />}
          />

          {/* SHOP */}
          <Route
            path="/shop"
            element={<Shop />}
          />

          {/* PRODUCT */}
          <Route
            path="/product/:id"
            element={<Product />}
          />

          {/* CART */}
          <Route
            path="/cart"
            element={<Cart />}
          />

          {/* CHECKOUT */}
          <Route
            path="/checkout"
            element={<Checkout />}
          />

          {/* CONTACT */}
          <Route
            path="/contact"
            element={<Contact />}
          />

          {/* BLOG */}
          <Route
            path="/blog"
            element={<Blog />}
          />
<Route
  path="/comparison"
  element={<Comparison />}
/>
          {/* INVALID URL */}
          <Route
            path="*"
            element={<Home />}
          />

        </Routes>

        <Footer />

      </BrowserRouter>

    </CartProvider>
  );
}

export default App;