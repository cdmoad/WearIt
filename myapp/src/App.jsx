import { useState } from 'react'
import './App.css'
import Home from './pages/home/home'
import Route from './routes/routes'
import { CartProvider } from './contexts/cartContext';
 
function App() {

 
  return (
    <>
    <CartProvider>
    <Route/>
    </CartProvider>
    </>
  )
}

export default App
