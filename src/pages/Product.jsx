import { useState } from "react";
import { FiHeart, FiMinus, FiPlus, FiShoppingCart } from "react-icons/fi";
import { useParams } from "react-router-dom";

import products from "../data/products";
import { useCart } from "../context/CartContext";

function Product() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [liked, setLiked] = useState(false);

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product Not Found</h2>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  return (
    <section className="product-page">

      <div className="product-details">

        <div className="product-main-image">

          <img
            src={product.image}
            alt={product.name}
          />

        </div>


        <div className="product-content">

          <p className="product-category">
            Furniture Collection
          </p>


          <h1>
            {product.name}
          </h1>


          <h2>
            ₹{product.price.toLocaleString()}
          </h2>


          <p className="product-description">
            {product.description}. A beautifully designed
            furniture piece created to bring comfort,
            style and elegance to your home.
          </p>


          <div className="product-rating">

            ★★★★★

            <span>
              {" "}5 Customer Reviews
            </span>

          </div>


          <div className="quantity-area">

            <button
              onClick={() =>
                setQuantity(
                  Math.max(1, quantity - 1)
                )
              }
            >
              <FiMinus />
            </button>


            <span>
              {quantity}
            </span>


            <button
              onClick={() =>
                setQuantity(quantity + 1)
              }
            >
              <FiPlus />
            </button>

          </div>


          <div className="product-actions">

            <button
              className="add-cart-large"
              onClick={handleAddToCart}
            >

              <FiShoppingCart />

              Add to Cart

            </button>


            <button
              className={
                liked
                  ? "wishlist-btn liked"
                  : "wishlist-btn"
              }

              onClick={() =>
                setLiked(!liked)
              }
            >

              <FiHeart />

            </button>

          </div>


          <div className="product-meta">

            <p>
              <strong>SKU:</strong>{" "}
              FUR-{product.id}
            </p>

            <p>
              <strong>Category:</strong>{" "}
              Furniture
            </p>

            <p>
              <strong>Tags:</strong>{" "}
              Furniture, Home, Interior
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Product;