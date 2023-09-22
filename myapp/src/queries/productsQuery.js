import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../api/products';

export function useGetProducts() {
  return useQuery(['products'],fetchProducts,{staleTime:20000});
}