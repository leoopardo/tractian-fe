import { useParams } from "react-router-dom";
import { useListAssetsPerCompany } from "../../services/assets/listAssetsPerCompany.service";
import { AssetHeader } from "./styles";
import { Typography } from "../../components/typography";

export const Asset = () => {
  const { assetId, companyId } = useParams();
  const { data } = useListAssetsPerCompany({ companyId });

  console.log(data);

  return (
    <>
      <AssetHeader>
        <Typography variant="head">
          {data?.find((asset) => asset.id === assetId)?.name}
        </Typography>
      </AssetHeader>
    </>
  );
};
