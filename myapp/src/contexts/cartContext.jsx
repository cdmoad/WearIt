import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

function CartProvider({ children }) {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleCart = () => {
    setIsCartVisible((prevState) => !prevState);
  };

  return (
    <CartContext.Provider value={{ isCartVisible, toggleCart }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };