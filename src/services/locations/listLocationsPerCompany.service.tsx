import { useQuery } from "react-query";
import { api } from "../../config/api";

export interface Location {
  id: string;
  name: string;
  parentId: string;
}

export interface LocationsParams {
  companyId?: string;
}

export function useListLocationsPerCompany({ companyId }: LocationsParams) {
  const { data, isLoading, error } = useQuery<Location[] | null | undefined>(
    ["Locations", companyId],
    async () => {
      const response = await api.get(`/companies/${companyId}/locations`);
      return response.data;
    }
  );

  return { data, isLoading, error };
}
