import heroImage from "../assets/98fb219fa11f805aade2224f1d6658764a2395df.jpg";

function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-small-title">
            NEW ARRIVAL
          </p>

          <h1>
            Discover Our
            <br />
            New Collection
          </h1>

          <p className="hero-description">
            Discover beautiful furniture designed to make
            your home comfortable, elegant and timeless.
          </p>

          <button className="hero-btn">
            BUY NOW
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;