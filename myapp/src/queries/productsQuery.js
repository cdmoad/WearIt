import { useQuery,useMutation,useQueryClient  } from "@tanstack/react-query"
import { fetchProducts,getProduct,addProduct } from '../api/products';
 


export function useGetProducts() {
  return useQuery(['products'],fetchProducts,{staleTime:30000});
}

 
export function useGetProduct(id) {
  return useQuery(['product', id],()=>getProduct(id),{staleTime:20000,enabled: !!id});
}

export function useAddProduct(data) {
 
  const queryClient = useQueryClient()
  
   return useMutation((data)=>addProduct(data), {
    onSuccess: () => {
      queryClient.invalidateQueries('products');
    },
  });

}

 