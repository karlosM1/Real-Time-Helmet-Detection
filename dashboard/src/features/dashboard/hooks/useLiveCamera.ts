import { fetchViolations } from "@/features/api/live.service";
import { useQuery } from "@tanstack/react-query";

export const useLiveCamera = (refetchInterval = 50000) => {
  return useQuery({
    queryKey: ["live-camera"],
    queryFn: fetchViolations,
    refetchInterval: refetchInterval,
    refetchOnWindowFocus: true,
    retry: 3,
    staleTime: 10000,
  });
};
