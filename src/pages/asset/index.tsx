import { useLocation, useParams } from "react-router-dom";
import { useListAssetsPerCompany } from "../../services/assets/listAssetsPerCompany.service";
import {
  AssetBody,
  AssetFirstSecction,
  AssetHeader,
  AssetInfo,
  ImagePreview,
  UploadButton,
} from "./styles";
import { Typography } from "../../components/typography";
import { BoltIcon } from "@heroicons/react/20/solid";
import { defaultTheme } from "../../styles/themes/default";
import { useEffect, useRef, useState } from "react";
import { RadioIcon, RssIcon } from "@heroicons/react/24/outline";

const types = {
  energy: "Sensor de energia",
  vibration: "Sensor de vibração",
};

const status = {
  operating: "Operando",
  alert: "Crítico",
};

export const Asset = () => {
  const { assetId, companyId } = useParams();
  const { data } = useListAssetsPerCompany({ companyId });
  const currentAsset = data?.find((asset) => asset.id === assetId);
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    setImagePreview(null);
  }, [location]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
    }
  };

  return (
    <>
      <AssetHeader>
        <Typography variant="head" size="small" bold>
          {currentAsset?.name}
        </Typography>
        {currentAsset?.sensorType === "energy" ? (
          <BoltIcon
            width={12}
            color={
              currentAsset?.status === "alert"
                ? defaultTheme.colors.error
                : defaultTheme.colors.success
            }
          />
        ) : ["operating", "alert"].includes(currentAsset?.status || "") ? (
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor:
                currentAsset?.status === "alert"
                  ? defaultTheme.colors.error
                  : defaultTheme.colors.success,
            }}
          />
        ) : (
          <> </>
        )}
      </AssetHeader>
      <AssetBody>
        <AssetFirstSecction>
          <input
            type="file"
            hidden
            ref={inputFileRef}
            accept="image/*"
            onChange={handleImageUpload}
          />
          {!imagePreview && (
            <UploadButton onClick={() => inputFileRef.current?.click()}>
              Upload
            </UploadButton>
          )}
          {imagePreview && (
            <ImagePreview onClick={() => inputFileRef.current?.click()}>
              <img
                src={imagePreview}
                alt="Preview"
                style={{ maxWidth: "100%", maxHeight: "200px" }}
              />
            </ImagePreview>
          )}
          <AssetInfo>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <Typography variant="head" size="small" bold>
                Tipo de equipamento
              </Typography>
              <Typography variant="head" size="small" style={{ opacity: 0.5 }}>
                {(types as any)[currentAsset?.sensorType as any]}
              </Typography>
            </div>
            <hr
              style={{ borderTop: `1px solid ${defaultTheme.colors.grey}` }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <Typography variant="head" size="small" bold>
                Situação
              </Typography>
              <Typography variant="head" size="small" style={{ opacity: 0.5 }}>
                {(status as any)[currentAsset?.status as any]}
              </Typography>
            </div>
          </AssetInfo>
        </AssetFirstSecction>
        <hr
          style={{
            borderTop: `1px solid ${defaultTheme.colors.grey}`,
            margin: "16px 20px",
          }}
        />
        <AssetFirstSecction>
          <div
            style={{
              width: "40%",
              display: "flex",
              flexDirection: "column",
              gap: 8,
              paddingLeft: 8,
            }}
          >
            <Typography variant="head" size="small" bold>
              Sensor
            </Typography>
            <Typography
              variant="head"
              size="small"
              style={{
                opacity: 0.5,
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <RssIcon width={20} color={defaultTheme.colors.secondary} />{" "}
              {currentAsset?.sensorId}
            </Typography>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <Typography variant="head" size="small" bold>
              Receptor
            </Typography>
            <Typography
              variant="head"
              size="small"
              style={{
                opacity: 0.5,
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <RadioIcon width={20} color={defaultTheme.colors.secondary} />{" "}
              {currentAsset?.gatewayId}
            </Typography>
          </div>
        </AssetFirstSecction>
      </AssetBody>
    </>
  );
};
