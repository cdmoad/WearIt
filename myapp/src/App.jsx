import { useState } from 'react'
import './App.css'
import Home from './pages/home/home'
import Route from './routes/routes'
import { CartProvider } from './contexts/cartContext';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

 const queryClient = new QueryClient()  
 import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


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
