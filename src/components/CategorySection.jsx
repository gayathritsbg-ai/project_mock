import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    name: "Dining",
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Living",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Bedroom",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
  },
];

function CategorySection() {
  return (
    <section className="category-section">
      <div className="section-container">

        <div className="section-heading">
          <h2>Browse The Range</h2>

          <p>
            Explore our collection of furniture designed
            for every corner of your home.
          </p>
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <Link
              to="/shop"
              className="category-card"
              key={category.id}
            >
              <div className="category-image">
                <img
                  src={category.image}
                  alt={category.name}
                />
              </div>

              <h3>{category.name}</h3>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

export default CategorySection;