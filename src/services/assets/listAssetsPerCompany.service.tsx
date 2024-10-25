import { useQuery } from "react-query";
import { api } from "../../config/api";

export interface Asset {
  gatewayId?: string;
  id?: string;
  locationId?: string;
  name?: string;
  parentId?: string;
  sensorId?: string;
  sensorType?: string;
  status?: string;
}

export interface AssetsParams {
  companyId?: string;
}

export function useListAssetsPerCompany({ companyId }: AssetsParams) {
  const { data, isLoading, error } = useQuery<Asset[] | null | undefined>(
    ["assets", companyId],
    async () => {
      const response = await api.get(`/companies/${companyId}/assets`);
      return response.data;
    }
  );

  return { data, isLoading, error };
}
