import { useQuery } from '@tanstack/react-query';
import { getReviews } from '../api/reviews';
 

export function useGetReviews(id) {
  return useQuery(['reviews', id],()=>getReviews(id),{staleTime:20000,enabled: !!id});
}

 

 