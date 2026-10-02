import React from "react";
import { FiSearch } from "react-icons/fi";

const blogPosts = [
  {
    id: 1,
    title: "Going all-in with millennial design",
    date: "20 Jan 2020",
    image:
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1000&q=80",
  },

  {
    id: 2,
    title: "Exploring new ways of decorating",
    date: "17 Jan 2020",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=80",
  },

  {
    id: 3,
    title: "Handmade pieces that took time to make",
    date: "12 Jan 2020",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=80",
  },
];

function Blog() {
  return (
    <>
      {/* Banner */}

      <section className="page-banner">

        <div className="page-banner-overlay">

          <h1>Blog</h1>

          <p>
            <b>Home</b>
            <span>›</span>
            Blog
          </p>

        </div>

      </section>

      {/* Blog Content */}

      <section className="blog-section">

        <div className="blog-container">

          {/* LEFT SIDE */}

          <div className="blog-posts">

            {blogPosts.map((post) => (

              <article
                className="blog-card"
                key={post.id}
              >

                <img
                  src={post.image}
                  alt={post.title}
                />

                <div className="blog-meta">

                  Admin

                  <span>|</span>

                  {post.date}

                  <span>|</span>

                  Wood

                </div>

                <h2>
                  {post.title}
                </h2>

                <p>
                  Beautiful ideas, thoughtful materials
                  and practical ways to create a beautiful
                  home that feels comfortable and personal.
                </p>

                <button className="read-more">
                  Read more
                </button>

              </article>

            ))}

          </div>

          {/* RIGHT SIDE */}

          <aside className="blog-sidebar">

            {/* Search */}

            <div className="blog-search">

              <input
                type="text"
                placeholder="Search"
              />

              <button>
                <FiSearch />
              </button>

            </div>

            {/* Categories */}

            <div className="blog-widget">

              <h3>Categories</h3>

              <div className="category-row">
                <span>Crafts</span>
                <span>2</span>
              </div>

              <div className="category-row">
                <span>Design</span>
                <span>8</span>
              </div>

              <div className="category-row">
                <span>Handmade</span>
                <span>7</span>
              </div>

              <div className="category-row">
                <span>Interior</span>
                <span>1</span>
              </div>

              <div className="category-row">
                <span>Wood</span>
                <span>6</span>
              </div>

            </div>

            {/* Recent Posts */}

            <div className="blog-widget">

              <h3>Recent Posts</h3>

              {blogPosts.map((post) => (

                <div
                  className="recent-post"
                  key={post.id}
                >

                  <img
                    src={post.image}
                    alt={post.title}
                  />

                  <div>

                    <h4>
                      {post.title}
                    </h4>

                    <small>
                      {post.date}
                    </small>

                  </div>

                </div>

              ))}

            </div>

          </aside>

        </div>

      </section>
    </>
  );
}

export default Blog;