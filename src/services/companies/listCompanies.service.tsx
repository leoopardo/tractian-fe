import { useQuery } from "react-query";
import { api } from "../../config/api";

export interface Company {
  id: string;
  name: string;
}

export function useListCompanies() {
  const { data, isLoading, error } = useQuery<Company[] | null | undefined>(
    "companies",
    async () => {
      const response = await api.get("/companies");
      return response.data;
    }
  );

  return { data, isLoading, error };
}
