import { useParams } from "react-router-dom";
import { useListAssetsPerCompany } from "../../services/assets/listAssetsPerCompany.service";
import { AssetHeader } from "./styles";

export const Asset = () => {
  const { assetId, companyId } = useParams();
  const { data } = useListAssetsPerCompany({ companyId });

  console.log(data);

  return (
    <>
      <AssetHeader>
        {data?.find((asset) => asset.id === assetId)?.name}kkk
      </AssetHeader>
    </>
  );
};
