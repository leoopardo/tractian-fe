import styled from "styled-components";

export const AssetHeader = styled.div`
  width: calc(100% - 32px);
  border-bottom: 1px solid #d1d1d1;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  display: flex;
  gap: 8px;
`;

export const AssetBody = styled.div`
  height: calc(100% - 50px);
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const AssetFirstSecction = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  margin-top: 16px;
  padding: 0 16px;
`;

export const UploadButton = styled.button`
  background-color: #55a7ff2f;
  color: ${({ theme }) => theme.colors.info};
  height: 226px;
  width: 40%;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  gap: 8px;
  align-items: center;
  transition: all 0.4s;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px dashed ${({ theme }) => theme.colors.info};
  border-style: dashed;

  &:hover {
    background-color: #55a7ff4f;
  }
`;
export const ImagePreview = styled.div`
  height: 226px;
  width: 40%;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  align-items: center;
  transition: all 0.4s;
  border: 1px dashed ${({ theme }) => theme.colors.info};
  border-style: dashed;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #55a7ff4f;
  }
`;

export const AssetInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 32px 16px;
  width: 60%;
`;
