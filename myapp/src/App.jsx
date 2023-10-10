import { useState } from 'react'
import './App.css'
import Home from './pages/home/home'
import Route from './routes/routes'
import { CartProvider } from './contexts/cartContext';
import axios from 'axios';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

 const queryClient = new QueryClient()  
 import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


 axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1";

function App() {

 
  return (
    <>
 
 <QueryClientProvider client={queryClient}> 
    <CartProvider>
    <Route/>
    </CartProvider>
    <ReactQueryDevtools initialIsOpen={false} />

  </QueryClientProvider>
    </>
  )
}

export default App
