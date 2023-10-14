import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();


  function CartProvider({ children }) {

const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);


  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleCart = () => {
    setIsCartVisible((prevState) => !prevState);
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

 


  return (
    <CartContext.Provider value={{ isCartVisible, toggleCart, cart , setCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };

 