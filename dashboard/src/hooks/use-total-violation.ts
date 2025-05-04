import { useQuery } from "@tanstack/react-query";
import { fetchTotalViolations } from "@/features/api/dashboard.service";

export interface TotalViolations {
  total_violations: number;
}

export function useTotalViolations() {
  return useQuery<TotalViolations>({
    queryKey: ["totalViolations"],
    queryFn: fetchTotalViolations,
  });
}
