import { fetchViolations } from "@/features/api/live.service";
import { useQuery } from "@tanstack/react-query";

export const useLiveCamera = () => {
  return useQuery({
    queryKey: ["live-camera"],
    queryFn: fetchViolations,
  });
};
