import { useQuery } from "@tanstack/react-query";
import { fetchTotalUser } from "@/features/api/dashboard.service";

export interface TotalUser {
  total_users: number;
}

export function useTotalUsers() {
  return useQuery<TotalUser>({
    queryKey: ["totalUsers"],
    queryFn: fetchTotalUser,
  });
}
