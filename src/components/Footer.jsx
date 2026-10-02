import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">
          <h2>Furniro<span>.</span></h2>
          <p>
            400 University Drive Suite 200,
            Coral Gables, FL 33134 USA
          </p>
        </div>

        <div className="footer-column">
          <h4>Links</h4>

          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/cart">Cart</Link>
        </div>

        <div className="footer-column">
          <h4>Help</h4>

          <a href="#">Payment Options</a>
          <a href="#">Returns</a>
          <a href="#">Privacy Policies</a>
        </div>

        <div className="footer-column">
          <h4>Newsletter</h4>

          <div className="footer-subscribe">
            <input
              type="email"
              placeholder="Enter your email"
            />

            <button>SUBSCRIBE</button>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Furniro. All rights reserved.</p>
      </div>

    </footer>
  );
}

export default Footer;