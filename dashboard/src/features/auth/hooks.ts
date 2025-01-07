import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "@tanstack/react-router";

export const useAuthUser = () => {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: ["auth-user"],
    queryFn: () => {},
  });
};
