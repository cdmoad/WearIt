import { useQuery } from '@tanstack/react-query';
import { fetchUsers } from '../api/users';

export function useGetUsers() {
  return useQuery(['users'],fetchUsers,{staleTime:20000});
}