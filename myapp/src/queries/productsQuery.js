import { useQuery } from '@tanstack/react-query';
import { fetchProducts,getProduct } from '../api/products';
 

export function useGetProducts() {
  return useQuery(['products'],fetchProducts,{staleTime:20000});
}

 

export function useGetProduct(id) {
  return useQuery(['product', id],()=>getProduct(id),{staleTime:20000,enabled: !!id});
}