import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import {
  FiShoppingCart,
  FiRepeat,
} from "react-icons/fi";

const products = [
  {
    id: 1,
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: 2500000,
    oldPrice: 3500000,
    discount: "-30%",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 2,
    name: "Leviosa",
    description: "Stylish cafe chair",
    price: 2500000,
    image:
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 3,
    name: "Lolito",
    description: "Luxury big sofa",
    price: 7000000,
    oldPrice: 14000000,
    discount: "-50%",
    image:
      "https://images.unsplash.com/photo-1550226891-ef816aed4a98?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 4,
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: 500000,
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8?auto=format&fit=crop&w=700&q=80",
  },
];

function ProductSection() {
  const { addToCart, addToCompare } = useCart();

  return (
    <section className="product-section">
      <div className="section-container">

        <div className="section-heading">
          <h2>Our Products</h2>
        </div>

        <div className="product-grid">

          {products.map((product) => (
            <div className="product-card" key={product.id}>

              <div className="product-image-wrapper">

                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />
                </Link>

                {product.discount && (
                  <span className="product-badge discount">
                    {product.discount}
                  </span>
                )}

                {product.badge && (
                  <span className="product-badge new">
                    {product.badge}
                  </span>
                )}

                <div className="product-overlay">

                  <button
                    className="product-cart-btn"
                    onClick={() => addToCart(product)}
                  >
                    <FiShoppingCart />
                    Add to cart
                  </button>

                  <button
                    className="product-compare-btn"
                    onClick={() => addToCompare(product)}
                  >
                    <FiRepeat />
                    Compare
                  </button>

                </div>
              </div>

              <div className="product-info">

                <h3>{product.name}</h3>

                <p>{product.description}</p>

                <div className="product-price">

                  <strong>
                    ₹{product.price.toLocaleString()}
                  </strong>

                  {product.oldPrice && (
                    <span>
                      ₹{product.oldPrice.toLocaleString()}
                    </span>
                  )}

                </div>

              </div>

            </div>
          ))}

        </div>

        <div className="products-button-wrapper">
          <Link
            to="/shop"
            className="show-more-btn"
          >
            Show More
          </Link>
        </div>

      </div>
    </section>
  );
}

export default ProductSection;