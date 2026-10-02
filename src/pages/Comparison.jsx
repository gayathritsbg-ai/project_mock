import React from "react";
import { FiShoppingCart, FiX } from "react-icons/fi";
import { useCart } from "../context/CartContext";

function Comparison() {
  const {
    compareItems,
    removeFromCompare,
    addToCart,
    clearCompare,
  } = useCart();

  return (
    <>
      {/* PAGE BANNER */}

      <section className="page-banner">
        <div className="page-banner-overlay">
          <h1>Product Comparison</h1>

          <p>
            <b>Home</b>
            <span>›</span>
            Comparison
          </p>
        </div>
      </section>

      {/* COMPARISON */}

      <section className="comparison-section">

        <div className="comparison-container">

          <div className="comparison-heading">

            <h2>Compare Products</h2>

            <p>
              Compare your selected products and choose the one
              that suits your space best.
            </p>

          </div>

          {compareItems.length === 0 ? (

            /* EMPTY */

            <div className="comparison-empty">

              <h2>No Products to Compare</h2>

              <p>
                Go to the Shop page and select products to compare.
              </p>

            </div>

          ) : (

            <>

              {/* CLEAR ALL */}

              <div className="comparison-actions">

                <p>
                  {compareItems.length} product
                  {compareItems.length > 1 ? "s" : ""} selected
                </p>

                <button
                  onClick={clearCompare}
                  className="clear-compare-btn"
                >
                  Clear All
                </button>

              </div>

              {/* TABLE */}

              <div className="comparison-table">

                {/* PRODUCT */}

                <div className="comparison-row comparison-header">

                  <div className="comparison-label">
                    Product
                  </div>

                  {compareItems.map((product) => (

                    <div
                      className="comparison-product"
                      key={product.id}
                    >

                      <img
                        src={product.image}
                        alt={product.name}
                      />

                      <h3>{product.name}</h3>

                      <p className="comparison-price">
                        ₹{Number(product.price).toLocaleString()}
                      </p>

                      <button
                        className="remove-product"
                        onClick={() =>
                          removeFromCompare(product.id)
                        }
                      >
                        <FiX />
                        Remove
                      </button>

                    </div>

                  ))}

                </div>

                {/* DESCRIPTION */}

                <div className="comparison-row">

                  <div className="comparison-label">
                    Description
                  </div>

                  {compareItems.map((product) => (

                    <div
                      className="comparison-value"
                      key={product.id}
                    >
                      {product.description || "No description available"}
                    </div>

                  ))}

                </div>

                {/* PRICE */}

                <div className="comparison-row">

                  <div className="comparison-label">
                    Price
                  </div>

                  {compareItems.map((product) => (

                    <div
                      className="comparison-value comparison-bold"
                      key={product.id}
                    >
                      ₹{Number(product.price).toLocaleString()}
                    </div>

                  ))}

                </div>

                {/* RATING */}

                <div className="comparison-row">

                  <div className="comparison-label">
                    Rating
                  </div>

                  {compareItems.map((product) => (

                    <div
                      className="comparison-value"
                      key={product.id}
                    >
                      ⭐⭐⭐⭐⭐
                    </div>

                  ))}

                </div>

                {/* ACTION */}

                <div className="comparison-row">

                  <div className="comparison-label">
                    Action
                  </div>

                  {compareItems.map((product) => (

                    <div
                      className="comparison-value"
                      key={product.id}
                    >

                      <button
                        className="comparison-cart-btn"
                        onClick={() => addToCart(product)}
                      >
                        <FiShoppingCart />
                        Add to Cart
                      </button>

                    </div>

                  ))}

                </div>

              </div>

            </>

          )}

        </div>

      </section>
    </>
  );
}

export default Comparison;