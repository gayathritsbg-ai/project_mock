import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [compareItems, setCompareItems] = useState([]);

  // =========================
  // CART
  // =========================

  const addToCart = (product) => {
    setCartItems((currentItems) => {
      const existingProduct = currentItems.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return currentItems.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...currentItems,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== id)
    );
  };

  const increaseQuantity = (id) => {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((currentItems) =>
      currentItems
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // =========================
  // COMPARISON
  // =========================

  const addToCompare = (product) => {
    setCompareItems((currentItems) => {
      // Already exists
      const alreadyExists = currentItems.some(
        (item) => item.id === product.id
      );

      if (alreadyExists) {
        return currentItems;
      }

      // Maximum 3 products
      if (currentItems.length >= 3) {
        alert("You can compare maximum 3 products.");
        return currentItems;
      }

      return [...currentItems, product];
    });
  };

  const removeFromCompare = (id) => {
    setCompareItems((currentItems) =>
      currentItems.filter((item) => item.id !== id)
    );
  };

  const clearCompare = () => {
    setCompareItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        // Cart
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,

        // Comparison
        compareItems,
        addToCompare,
        removeFromCompare,
        clearCompare,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}