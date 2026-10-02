import { useState } from "react";
import {
  FiSliders,
  FiChevronDown,
} from "react-icons/fi";

import ProductSection from "../components/ProductSection";
import products from "../data/products";

function Shop() {

  const [sortOpen, setSortOpen] = useState(false);

  const [sortType, setSortType] =
    useState("Default");

  const [filterOpen, setFilterOpen] =
    useState(false);

  const [selectedCategory, setSelectedCategory] =
    useState("All");


  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) =>
            product.category === selectedCategory
        );


  const getSortedProducts = () => {

    const sortedProducts = [
      ...filteredProducts,
    ];


    if (sortType === "Price: Low to High") {

      sortedProducts.sort(
        (a, b) => a.price - b.price
      );

    }


    if (sortType === "Price: High to Low") {

      sortedProducts.sort(
        (a, b) => b.price - a.price
      );

    }


    if (sortType === "Newest") {

      sortedProducts.sort(
        (a, b) => b.id - a.id
      );

    }


    return sortedProducts;
  };


  const selectSort = (type) => {

    setSortType(type);

    setSortOpen(false);

  };


  const selectCategory = (category) => {

    setSelectedCategory(category);

    setFilterOpen(false);

  };


  const finalProducts =
    getSortedProducts();


  return (
    <>

      {/* SHOP BANNER */}

      <section className="shop-banner">

        <div>

          <h1>Shop</h1>

          <p>
            Home <span>›</span> Shop
          </p>

        </div>

      </section>


      {/* SHOP TOOLBAR */}

      <section className="shop-toolbar">

        <div className="toolbar-left">

          <button
            className="filter-btn"
            onClick={() =>
              setFilterOpen(!filterOpen)
            }
          >

            <FiSliders />

            Filter

          </button>


          <span className="divider"></span>


          <p>
            Showing {finalProducts.length} results
          </p>


          {filterOpen && (

            <div className="filter-menu">

              <button
                onClick={() =>
                  selectCategory("All")
                }
              >
                All
              </button>


              <button
                onClick={() =>
                  selectCategory("Chairs")
                }
              >
                Chairs
              </button>


              <button
                onClick={() =>
                  selectCategory("Sofa")
                }
              >
                Sofa
              </button>


              <button
                onClick={() =>
                  selectCategory("Tables")
                }
              >
                Tables
              </button>


              <button
                onClick={() =>
                  selectCategory("Decorative")
                }
              >
                Decorative
              </button>

            </div>

          )}

        </div>


        {/* SORT */}

        <div className="toolbar-right">

          <span>Sort by</span>


          <button
            className="sort-btn"
            onClick={() =>
              setSortOpen(!sortOpen)
            }
          >

            {sortType}

            <FiChevronDown />

          </button>


          {sortOpen && (

            <div className="sort-menu">

              <button
                onClick={() =>
                  selectSort("Default")
                }
              >
                Default
              </button>


              <button
                onClick={() =>
                  selectSort(
                    "Price: Low to High"
                  )
                }
              >
                Price: Low to High
              </button>


              <button
                onClick={() =>
                  selectSort(
                    "Price: High to Low"
                  )
                }
              >
                Price: High to Low
              </button>


              <button
                onClick={() =>
                  selectSort("Newest")
                }
              >
                Newest
              </button>

            </div>

          )}

        </div>

      </section>


      {/* PRODUCTS */}

      <ProductSection
        products={finalProducts}
      />

    </>
  );
}

export default Shop;