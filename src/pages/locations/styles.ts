import styled from "styled-components";

export const RootContainer = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "100%",
  backgroundColor: theme.colors.light,
  overflow: "hidden",
  borderRadius: "8px",
  padding: "8px",
}));

export const LocationBreadcrumb = styled.div(() => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  height: "48px",
  padding: "0 16px",
  gap: 8,
}));

export const LocationHeader = styled.header`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const ButtonsHeader = styled.div`
  display: flex;
  gap: 8px;
`;

export const Icon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const LocationsContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 40px;
  padding: 16px;
  width: "100%";
  height: 100%;
`;

export const LocationsTreeViewFullBox = styled.div`
  width: 30%;@media (max-width: ${(props) => props.theme.breakpoints.laptop}) {
    width: 97%;
  }
`;

export const AssetContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 30%;
  height: 100%;
  @media (max-width: ${(props) => props.theme.breakpoints.laptop}) {
    width: 100%;
  }
`;

export const LocationsTreeViewContainer = styled.div`
  width: 100%;
  min-height: calc(100% - 48px);
  border: ${({ theme }) => `1px solid ${theme.colors.grey}`};
  border-top: none;
  padding-left: 24px;
  padding-top: 8px;
`;

export const LocationContent = styled.div`
  width: 64.8%;
  min-height: calc(100% - 48px);
  border: ${({ theme }) => `1px solid ${theme.colors.grey}`};
  border-radius: 4px;

  @media (max-width: ${(props) => props.theme.breakpoints.laptop}) {
    width: 100%;
  }
`;
